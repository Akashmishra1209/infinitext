import { NextResponse } from "next/server";
import Razorpay from "razorpay"
export async function POST(req:any,res:any) {
    let instance=new Razorpay({
        key_id:process.env.RAZORPAY_API_KEY,
        key_secret:process.env.RAZORPAY_API_SECRET          
    })
    if (!process.env.RAZORPAY_MONTHLY_SUBSCRIPTION_ID) {
        throw new Error('RAZORPAY_MONTHLY_SUBSCRIPTION_ID is not defined');
    }
    const result= await instance.subscriptions.create({
        plan_id:process.env.RAZORPAY_MONTHLY_SUBSCRIPTION_ID,
        customer_notify:1,
        quantity:1,
        total_count:1,
        addons:[],
        notes:{
            key1:"Note"
        }
    })
     return NextResponse.json(result)
}