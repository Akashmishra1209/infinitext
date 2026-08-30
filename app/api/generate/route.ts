import { auth } from "@clerk/nextjs/server";
import { AI_MODELS } from "@/utils/AIModel";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

type ModelConfig = {
    id: string;
    provider: "openrouter" | "nvidia";
    url: string;
    key: string | undefined;
};

function getModelConfigs(): ModelConfig[] {
    return AI_MODELS.map((model) => ({
        id: model.id,
        provider: model.provider === "OpenRouter" ? "openrouter" as const : "nvidia" as const,
        url: model.provider === "OpenRouter" ? OPENROUTER_URL : NVIDIA_URL,
        key: model.provider === "OpenRouter" ? process.env.OPENROUTER_API_KEY : process.env.NVIDIA_API_KEY,
    }));
}

export async function POST(request: Request) {
    const { userId } = await auth();
    if (!userId) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json() as { prompt?: string };
    if (!body.prompt?.trim()) {
        return Response.json({ error: "A prompt is required" }, { status: 400 });
    }

    for (const config of getModelConfigs()) {
        if (!config.key) continue;

        try {
            const response = await fetch(config.url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${config.key}`,
                    "Content-Type": "application/json",
                    ...(config.provider === "openrouter" && {
                        "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
                        "X-Title": "Infinitext",
                    }),
                },
                body: JSON.stringify({
                    model: config.id,
                    messages: [{ role: "user", content: body.prompt }],
                    temperature: 0.7,
                    max_tokens: 1000,
                }),
                signal: AbortSignal.timeout(8000),
            });

            if (!response.ok) continue;
            const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
            const content = data.choices?.[0]?.message?.content;
            if (content) return Response.json({ content, model: config.id });
        } catch {
            continue;
        }
    }

    return Response.json({ error: "All configured AI models failed" }, { status: 502 });
}