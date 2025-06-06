"use client";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/Schema';
import { eq } from 'drizzle-orm';
import { HistoryElem } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditContext } from '@/app/(context)/UpdateCreditContext';

export default function UsageTrack() {
    const { user } = useUser()
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditContext)
    const [maxWords, setMaxWords] = useState(1000)
    const getData = async () => {
        try {
            if (!user?.primaryEmailAddress?.emailAddress) return;
            const result: HistoryElem[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
            getTotalUsage(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const isUserSubscribe = async () => {
        try {
            const userEmail = user?.primaryEmailAddress?.emailAddress;
            if (!userEmail) return;

            const result = await db.select()
                .from(UserSubscription)
                .where(eq(UserSubscription.email, userEmail));

            if (result.length > 0) {
                setUserSubscription(true);
                setMaxWords(10000);
            }
        } catch (error) {
            console.error('Error checking subscription:', error);
        }
    };

    const getTotalUsage = (result: HistoryElem[]) => {
        let total: number = 0;
        result.forEach((elem: HistoryElem) => {
            if (typeof elem.aiResponse === 'string') {
                total += elem.aiResponse.split(/\s+/).filter(Boolean).length;
            }
        });
        setTotalUsage(total);
    }

    useEffect(() => {
        if (!user) return;
        getData();
        isUserSubscribe();
    }, [user]);

    useEffect(() => {
        if (!user || !updateCreditUsage) return;
        getData();
    }, [updateCreditUsage, user]);

    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" style={{ width: `${(totalUsage / maxWords) * 100}%` }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credits Used</h2>
            </div>
            <Link href="/dashboard/billing">
                <Button variant="secondary" className="w-full my-3 text-primary cursor-pointer">Upgrade</Button>
            </Link>
        </div>
    );
}