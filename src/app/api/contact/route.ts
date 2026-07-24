import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().min(7).max(30),
  service: z.string().min(2).max(100),
  preferredDate: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Production: wire to email/CRM. Logged for ops visibility in serverless logs.
    console.info("[contact]", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      preferredDate: data.preferredDate || null,
      messageLength: data.message.length,
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks! Your inquiry was received. We’ll get back shortly.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, message: "Please check the form fields and try again.", issues: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again or DM on Instagram." },
      { status: 500 },
    );
  }
}
