import { NextResponse } from "next/server";
import Razorpay from "razorpay"
export async function POST() {
    const keyId = process.env.RAZORPAY_API_KEY;
    const keySecret = process.env.RAZORPAY_API_SECRET;
    const planId = process.env.RAZORPAY_MONTHLY_SUBSCRIPTION_ID;

    if (!keyId || !keySecret || !planId) {
        return NextResponse.json(
            { error: "Razorpay is not configured on the server" },
            { status: 500 }
        );
    }

    try {
        const instance = new Razorpay({ key_id: keyId, key_secret: keySecret });
        const result = await instance.subscriptions.create({
            plan_id: planId,
            customer_notify: 1,
            quantity: 1,
            total_count: 1,
            addons: [],
            notes: { key1: "Note" },
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Razorpay subscription creation failed:", error);
        const razorpayError = error as {
            error?: { code?: string; description?: string };
            message?: string;
        };
        const description = razorpayError.error?.description ?? razorpayError.message;
        return NextResponse.json(
            { error: description ?? "Unable to create Razorpay subscription" },
            { status: 502 }
        );
    }
}