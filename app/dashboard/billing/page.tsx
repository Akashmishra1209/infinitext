"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import CircleCheckIcon from "../_components/CircleCheckIcon"
import axios from "axios"
import { Loader2 } from 'lucide-react'
import { db } from '@/utils/db'
import { UserSubscription } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'

export default function Billing() {
  const { user } = useUser()
  const [loading, setLoading] = useState<boolean>(false)
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])
  
  const CreateSubscription = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/create-subscription", {});
      console.log(response.data);
      onPayment(response.data.id)
    } catch (error) {
      console.error("Subscription creation failed:", error);
      setLoading(false)
    }
  }

  const onPayment = (subId: string) => {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      "subscription_id": subId,
      "name": "InfiniText",
      "description": "Premium Membership",
      handler: async (res: any) => {
        console.log(res);
        if (res) {
          saveSubscription(res?.razorpay_payment_id)
        }
        setLoading(false)
      }
    }
    // @ts-ignore
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const saveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: moment().format("DD/MM/YYYY")
      });
      
      if (result) {
        setUserSubscription({
          email: user?.primaryEmailAddress?.emailAddress!,
          userName: user?.fullName!,
          active: true,
          paymentId: paymentId,
          joinDate: moment().format("DD/MM/YYYY")
        });
      }
      window.location.reload()
    } catch (error) {
      console.error("Failed to save subscription:", error);
      throw error;
    }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        <div className="flex flex-col rounded-xl border-2 bg-white relative">
          <div className="grid gap-6 p-8">
            <div>
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">Basic features for individuals</p>
            </div>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">₹0</span>
              <span className="ml-2 text-gray-500">/month</span>
            </div>
            <div className="grid gap-3 text-sm">
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                1000 credits
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                Basic support
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                50 content templates
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                10 days history available
              </p>
            </div>
          </div>

          {!userSubscription &&
            <div className="mt-auto p-6 border-t">
              <Button className="w-full py-2.5" size="lg" variant="secondary">Current Plan</Button>
            </div>
          }
        </div>
        <div className="flex flex-col rounded-xl border border-gray-200 bg-white relative">
          <div className="absolute -top-3 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Recommended
          </div>
          <div className="grid gap-6 p-8">
            <div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">For teams shipping quality projects</p>
            </div>
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">₹199</span>
              <span className="ml-2 text-gray-500">/month</span>
            </div>
            <div className="grid gap-3 text-sm">
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                10000 credits
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                24/7 support
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                100 content templates
              </p>
              <p className="flex items-center gap-3">
                <CircleCheckIcon className="w-5 h-5 text-green-500" />
                1 year history available
              </p>
            </div>
          </div>
          <div className="mt-auto p-6 border-t">
            <Button className="w-full py-2.5 cursor-pointer flex gap-2 items-center" variant={userSubscription?"secondary":"default"} disabled={loading || userSubscription} size="lg" onClick={() => CreateSubscription()}>
              {loading && <Loader2 className="animate-spin" />}
              {userSubscription ? "Current Plan" : "Upgrade to Pro"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}