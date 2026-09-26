import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Inquiry API ready" });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const tour = String(formData.get("tour") || "");
  const travelers = String(formData.get("travelers") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: "Inquiry received successfully.",
    data: {
      name,
      email,
      tour,
      travelers,
      message,
    },
  });
}
