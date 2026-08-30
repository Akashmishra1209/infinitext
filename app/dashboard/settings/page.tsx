"use client";

import { UserProfile } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'

export default function Settings() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10">
        <UserProfile/>
        <Toaster />
    </div>
  )
}