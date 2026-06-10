import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submission = {
      id: `nd_${Date.now()}`,
      name,
      email,
      subject: subject || "No Subject",
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("[NextJS Api] New Contact Saved:", submission);

    return NextResponse.json({
      success: true,
      message: "Message dispatched and logged successfully!",
      id: submission.id,
    });
  } catch (error: any) {
    console.error("Next.JS Contact Route Handler Error:", error);
    return NextResponse.json({ error: "Server malfunction" }, { status: 500 });
  }
}
