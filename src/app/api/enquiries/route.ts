import { NextResponse } from 'next/server';
import { INITIAL_DEMO_ENQUIRIES } from '@/lib/storage';
import { EventEnquiry } from '@/types';

// In-memory fallback for server runtime demonstration
let serverEnquiries: EventEnquiry[] = [...INITIAL_DEMO_ENQUIRIES];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: serverEnquiries,
    demoMode: true,
    meta: {
      provider: 'Innovexa Prototype Relational Store',
      table: 'event_inquiries',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.eventName || !body.customerName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Required fields missing: eventName, customerName, email, phone.' },
        { status: 400 }
      );
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newEnquiry: EventEnquiry = {
      id: `enq-${Date.now()}`,
      referenceNo: `INV-2026-${randomSuffix}`,
      eventName: body.eventName,
      eventType: body.eventType || 'Other',
      preferredDate: body.preferredDate || new Date().toISOString().split('T')[0],
      alternativeDate: body.alternativeDate,
      location: body.location || 'Sri Lanka',
      guestCount: Number(body.guestCount) || 50,
      selectedServices: body.selectedServices || [],
      budgetRange: body.budgetRange || 'Not decided yet',
      customerName: body.customerName,
      email: body.email,
      phone: body.phone,
      companyName: body.companyName,
      additionalRequirements: body.additionalRequirements,
      status: 'Received',
      createdAt: new Date().toISOString(),
    };

    serverEnquiries.unshift(newEnquiry);

    return NextResponse.json({
      success: true,
      message: 'Event enquiry registered successfully in Innovexa database prototype.',
      data: newEnquiry,
      demoMode: true,
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to process enquiry.' }, { status: 500 });
  }
}
