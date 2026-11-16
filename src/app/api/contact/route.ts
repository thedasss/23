import { NextResponse } from 'next/server';
import { INITIAL_DEMO_MESSAGES } from '@/lib/storage';
import { ContactMessage } from '@/types';

let serverMessages: ContactMessage[] = [...INITIAL_DEMO_MESSAGES];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: serverMessages,
    demoMode: true,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: body.name,
      email: body.email,
      subject: body.subject || 'General Inquiry - Innovexa Malabe Office',
      message: body.message,
      createdAt: new Date().toISOString(),
      status: 'Unread',
    };

    serverMessages.unshift(newMessage);

    return NextResponse.json({
      success: true,
      message: 'Your message has been received by the Innovexa team at Malabe HQ.',
      data: newMessage,
      demoMode: true,
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Server error processing contact message.' }, { status: 500 });
  }
}
