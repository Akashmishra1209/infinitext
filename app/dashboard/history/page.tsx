"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export type HistoryElem = {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string | null;
}

export default function Component() {
    const { user } = useUser();
    const [historyelems, setHistoryelems] = useState<HistoryElem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
                    return;
                }
                setLoading(true);
                const userEmail = user.emailAddresses[0].emailAddress;
                const response = await fetch("/api/history", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userEmail }),
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch history");
                }
                const result = await response.json();
                setHistoryelems(Array.isArray(result.data) ? (result.data as HistoryElem[]) : []);
                console.log("Data", result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.id) {
            fetchData();
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8 space-y-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">History</h1>
                        <p className="text-sm text-gray-500">
                            Search your previously generated AI content
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-[1fr_2fr_auto_auto] items-center gap-4 p-4 text-sm font-medium bg-gray-100 text-gray-700">
                            <div>TEMPLATE</div>
                            <div>AI RESP</div>
                            <div>WORDS</div>
                            <div>COPY</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {loading ? (
                                <div className="p-8 text-center text-gray-500">Loading...</div>
                            ) : historyelems.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">No history found.</div>
                            ) : (
                                historyelems.map((elem) => (
                                    <div
                                        key={elem.id}
                                        className="grid grid-cols-[1fr_2fr_auto_auto] items-center gap-4 p-4 text-sm hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <div className="truncate text-gray-600">
                                            {elem.templateSlug}
                                        </div>
                                        <div className="truncate text-gray-600">
                                            {elem.aiResponse
                                                ? elem.aiResponse.substring(0, 50) +
                                                (elem.aiResponse.length > 50 ? "..." : "")
                                                : "No response available"}
                                        </div>
                                        <div className="text-gray-500">
                                            {elem.aiResponse
                                                ? elem.aiResponse.trim().split(/\s+/).length
                                                : 0}
                                        </div>
                                        <div>
                                            <Button
                                                variant="ghost"
                                                className="h-8 px-3 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 cursor-pointer"
                                                onClick={() =>
                                                    elem.aiResponse &&
                                                    navigator.clipboard.writeText(elem.aiResponse)
                                                }
                                                disabled={!elem.aiResponse}
                                            >
                                                Copy
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}