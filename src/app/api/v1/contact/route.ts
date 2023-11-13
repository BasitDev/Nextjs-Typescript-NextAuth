import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contacts = await req.json();
    if (!contacts) {
      return NextResponse.json({ message: "Request body is empty" });
    }
    return NextResponse.json({ message: "Successful", contacts });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
}
