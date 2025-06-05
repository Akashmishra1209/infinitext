"use client";
import React, { useState } from 'react';
import Sidenav from './_components/Sidenav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditContext } from '../(context)/UpdateCreditContext';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [totalUsage, setTotalUsage] = useState<Number>(0)
    const [userSubscription, setUserSubscription] = useState<boolean>(false)
    const [updateCreditUsage, setUpdateCreditUsage] = useState<any>()
    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
                <UpdateCreditContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
                    <div className='bg-slate-100 h-screen'>
                        <div className='md:w-64 hidden md:block fixed'>
                            <Sidenav />
                        </div>
                        <div className='md:ml-64'>
                            <Header />
                            {children}
                        </div>
                    </div>
                </UpdateCreditContext.Provider>
            </UserSubscriptionContext.Provider>
        </TotalUsageContext.Provider>
    );
}