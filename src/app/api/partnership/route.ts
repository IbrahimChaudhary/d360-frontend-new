import { NextResponse } from "next/server";

// This POST handler receives the contact form submission
export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // ✅ This is where your form data arrives
    console.log("📥 Mock partnership form received:", formData);

    // ✏️ You can later replace this with:
    // - mTLS API call to real backend
    // - Save to Strapi or local DB
    // - Send an email notification
    // - Log to a file or dashboard

    // Example structure:
    // {
    //   subject: "Partnership",
    //   organizationName: "Test Org",
    //   fullName: "John Doe",
    //   phoneNumber: "1234567890",
    //   email: "john@example.com",
    //   website: "https://example.com",
    //   message: "Interested in partnership"
    // }

    return NextResponse.json(
      { message: "✅ Mock API received your request successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error in mock API:", error.message);
    return NextResponse.json(
      { error: "Something went wrong while processing your form." },
      { status: 500 }
    );
  }
}
