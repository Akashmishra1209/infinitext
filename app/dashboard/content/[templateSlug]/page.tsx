"use client";
import React, { useContext, useEffect, useState } from 'react';
import moment from "moment"
import Formsection from '@/app/dashboard/content/_components/Formsection';
import Outputsection from '@/app/dashboard/content/_components/Outputsection';
import { Templates } from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { DEFAULT_AI_MODEL, isAiModelId } from '@/utils/AIModel';
import { useUser } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/sonner';
import { toast } from "sonner";
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';

export default function CreateNewContent({ params }: {params: Promise<{ templateSlug: string }>}) {
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState<(typeof Templates)[number]>();
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
    const {updateCreditUsage, setUpdateCreditUsage}=useContext(UpdateCreditContext)
    const router = useRouter()

    useEffect(() => {
        params.then(({ templateSlug }) => {
            setSelectedTemplate(Templates.find((tool) => tool.slug === templateSlug));
        });
    }, [params]);

    /**
     * @param formData
     * @returns
     */
    const generateAIContent = async (data: Record<string, string>) => {
        if (totalUsage >= 1000&&!userSubscription) {    
            toast.info("Failed to generate content.")
            return router.push("/dashboard/billing");
        }
        try {
            setLoading(true);
            const selectedPrompt = selectedTemplate?.aiPrompt;
            const finalAIPrompt = JSON.stringify(data) + "," + selectedPrompt;
            const storedModel = window.localStorage.getItem("infinitext-ai-model");
            const model = isAiModelId(storedModel) ? storedModel : DEFAULT_AI_MODEL;
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: finalAIPrompt, model }),
            });
            const result = await response.json() as { content?: string; model?: string; error?: string };
            if (!response.ok || !result.content) {
                throw new Error(result.error ?? "AI generation failed");
            }
            if (isAiModelId(result.model)) {
                window.localStorage.setItem("infinitext-ai-model", result.model);
            }
            const aiResponseText = result.content;

            console.log(aiResponseText);
            setAIOutput(await aiResponseText);

            await saveInDatabase(JSON.stringify(data), selectedTemplate?.slug ?? '', await aiResponseText)
            setUpdateCreditUsage(Date.now())
            toast.success("AI content generated successfully.");
        } catch (error) {
            toast.error("Failed to generate content: " + (error as Error).message);
        } finally {

            setLoading(false);
        }
    };

    const saveInDatabase = async (formData: string, slug: string, aiResponse: string) => {
        if (!slug || !aiResponse || !user?.primaryEmailAddress?.emailAddress) {
            console.error("Missing required fields for database insert.");
            return;
        }
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy: user.primaryEmailAddress.emailAddress,
            createdAt: moment().format("DD/MM/YYYY")
        });
        console.log(result);
    };

    return (
        <div className='p-10'>
            <Link href="/dashboard">
                <Button className=""><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {selectedTemplate && (
                    <Formsection
                        selectedTemplate={selectedTemplate}
                        userFormInput={generateAIContent}
                        loading={loading}
                    />
                )}
                <div className='col-span-2'>
                    <Outputsection aiOutput={aiOutput} />
                </div>
            </div>
            <Toaster />
        </div>
    );
}
