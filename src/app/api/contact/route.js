
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid form data." },
        { status: 400 }
      );
    }

    const cleanData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    if (
      cleanData.name.length < 2 ||
      cleanData.name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanData.email) ||
      cleanData.email.length > 254 ||
      cleanData.subject.length < 3 ||
      cleanData.subject.length > 150 ||
      cleanData.message.length < 10 ||
      cleanData.message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "Please enter valid details." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER],
      replyTo: cleanData.email,
      subject: `Portfolio Message: ${cleanData.subject}`,

      text: `
Name: ${cleanData.name}
Email: ${cleanData.email}
Subject: ${cleanData.subject}

Message:
${cleanData.message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanData.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanData.email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(cleanData.subject)}</p>
          <h3>Message:</h3>
          <p>${escapeHtml(cleanData.message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);

      return NextResponse.json(
        { success: false, message: "Unable to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
