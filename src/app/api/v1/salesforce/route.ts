import { NextResponse } from "next/server";
import { SalesforceService } from "@/services/salesforce";

// mock submission api
export async function POST(req: Request) {
  try {
    const salesforceService = new SalesforceService();
    const data = await req.json();
    const result = await salesforceService.submitForm(data);
    return NextResponse.json({ message: "Successful", result });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
}
