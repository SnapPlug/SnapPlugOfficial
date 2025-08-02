import { NextRequest, NextResponse } from 'next/server';
import { sendWebhook } from '@/lib/webhook';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { workflow, data } = body;

    if (!workflow || !data) {
      return NextResponse.json(
        { error: 'Workflow and data are required' },
        { status: 400 }
      );
    }

    // webhook 전송
    const result = await sendWebhook(workflow, data);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Webhook API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 