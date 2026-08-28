export const DEFAULT_AI_MODEL = "openrouter/anthropic/claude-sonnet-4";

export const AI_MODELS = [
    {
        id: "openrouter/anthropic/claude-sonnet-4",
        name: "Claude Sonnet 4",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/llama-3.3-nemotron-super-49b-v1",
        name: "Llama 3.3 Nemotron Super 49B",
        provider: "NVIDIA",
    },
    {
        id: "deepseek-ai/deepseek-r1",
        name: "DeepSeek R1",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.3-70b-instruct",
        name: "Llama 3.3 70B",
        provider: "NVIDIA",
    },
    {
        id: "mistralai/mistral-large-2-instruct",
        name: "Mistral Large 2",
        provider: "NVIDIA",
    },
    {
        id: "nvidia/nemotron-4-340b-instruct",
        name: "Nemotron 4 340B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.1-405b-instruct",
        name: "Llama 3.1 405B",
        provider: "NVIDIA",
    },
    {
        id: "qwen/qwen-2.5-72b-instruct",
        name: "Qwen 2.5 72B",
        provider: "NVIDIA",
    },
    {
        id: "qwen/qwq-32b-preview",
        name: "QwQ 32B Preview",
        provider: "NVIDIA",
    },
    {
        id: "google/gemma-4-it",
        name: "Gemma 4 IT",
        provider: "NVIDIA",
    },
    {
        id: "google/gemma-2-27b-it",
        name: "Gemma 2 27B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.2-90b-vision-instruct",
        name: "Llama 3.2 90B Vision",
        provider: "NVIDIA",
    },
    {
        id: "mistralai/mixtral-8x22b-instruct",
        name: "Mixtral 8x22B",
        provider: "NVIDIA",
    },
    {
        id: "qwen/qwen-2.5-coder-32b-instruct",
        name: "Qwen 2.5 Coder 32B",
        provider: "NVIDIA",
    },
    {
        id: "deepseek-ai/deepseek-coder-7b-instruct-v1.5",
        name: "DeepSeek Coder 7B",
        provider: "NVIDIA",
    },
    {
        id: "mistralai/codestral-22b-instruct",
        name: "Codestral 22B",
        provider: "NVIDIA",
    },
    {
        id: "nvidia/llama-3.1-nemotron-70b-instruct",
        name: "Llama 3.1 Nemotron 70B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.1-70b-instruct",
        name: "Llama 3.1 70B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.1-8b-instruct",
        name: "Llama 3.1 8B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.2-1b-instruct",
        name: "Llama 3.2 1B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.2-3b-instruct",
        name: "Llama 3.2 3B",
        provider: "NVIDIA",
    },
    {
        id: "meta/llama-3.2-11b-vision-instruct",
        name: "Llama 3.2 11B Vision",
        provider: "NVIDIA",
    },
    {
        id: "google/gemma-2-2b-it",
        name: "Gemma 2 2B",
        provider: "NVIDIA",
    },
    {
        id: "google/gemma-2-9b-it",
        name: "Gemma 2 9B",
        provider: "NVIDIA",
    },
    {
        id: "mistralai/mistral-nemo-12b-instruct",
        name: "Mistral Nemo 12B",
        provider: "NVIDIA",
    },
    {
        id: "microsoft/phi-3-mini-128k-instruct",
        name: "Phi 3 Mini",
        provider: "NVIDIA",
    },
    {
        id: "microsoft/phi-3-medium-128k-instruct",
        name: "Phi 3 Medium",
        provider: "NVIDIA",
    },
    {
        id: "microsoft/phi-3.5-mini-instruct",
        name: "Phi 3.5 Mini",
        provider: "NVIDIA",
    },
    {
        id: "microsoft/phi-3.5-moe-instruct",
        name: "Phi 3.5 MoE",
        provider: "NVIDIA",
    },
    {
        id: "qwen/qwen-2.5-7b-instruct",
        name: "Qwen 2.5 7B",
        provider: "NVIDIA",
    },
    {
        id: "nvidia/nemotron-mini-4b-instruct",
        name: "Nemotron Mini 4B",
        provider: "NVIDIA",
    },
    {
        id: "google/gemma-4-31b-it:free",
        name: "Gemma 4 31B (free)",
        provider: "OpenRouter",
    },
    {
        id: "google/gemma-4-26b-a4b-it:free",
        name: "Gemma 4 26B (free)",
        provider: "OpenRouter",
    },
    {
        id: "openai/gpt-oss-20b:free",
        name: "GPT-OSS 20B (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-3-super-120b-a12b:free",
        name: "Nemotron 3 Super 120B (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-3-ultra-550b-a55b:free",
        name: "Nemotron 3 Ultra 550B (free)",
        provider: "OpenRouter",
    },
    {
        id: "poolside/laguna-s-2.1:free",
        name: "Laguna S 2.1 (free)",
        provider: "OpenRouter",
    },
    {
        id: "poolside/laguna-xs-2.1:free",
        name: "Laguna XS 2.1 (free)",
        provider: "OpenRouter",
    },
    {
        id: "inclusionai/ling-3.0-flash:free",
        name: "Ling 3.0 Flash (free)",
        provider: "OpenRouter",
    },
    {
        id: "cohere/north-mini-code:free",
        name: "North Mini Code (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        name: "Nemotron 3 Nano Omni (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-3-nano-30b-a3b:free",
        name: "Nemotron 3 Nano (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-nano-12b-v2-vl:free",
        name: "Nemotron Nano 12B VL (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-nano-9b-v2:free",
        name: "Nemotron Nano 9B (free)",
        provider: "OpenRouter",
    },
    {
        id: "nvidia/nemotron-3.5-content-safety:free",
        name: "Nemotron Content Safety (free)",
        provider: "OpenRouter",
    },
    {
        id: "openrouter/free",
        name: "OpenRouter Free Router",
        provider: "OpenRouter",
    },
] as const;

export type AiModelId = (typeof AI_MODELS)[number]["id"];

export function isAiModelId(value: unknown): value is AiModelId {
    return AI_MODELS.some((model) => model.id === value);
}