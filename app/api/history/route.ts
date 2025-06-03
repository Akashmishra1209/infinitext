import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import { eq } from 'drizzle-orm';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const userEmail = body.userEmail;
        if (!userEmail) {
            return NextResponse.json({ error: 'Missing userEmail parameter' }, { status: 400 });
        }
        const data = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
    }
}