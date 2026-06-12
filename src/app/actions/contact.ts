"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !subject || !message) {
      return { success: false, error: "Name, email, phone, subject, and message are required" };
    }

    // 1. Insert into Supabase
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, company, subject, message }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return { success: false, error: "Failed to save submission. Please ensure the table exists." };
    }

    // 2. Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      
      const { data, error } = await resend.emails.send({
        from: "Speion Website <onboarding@resend.dev>",
        to: "speiongroup@gmail.com",
        subject: `New Lead: ${subject} - from ${name}`,
        text: `You have received a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
      }
    } else {
      console.warn("RESEND_API_KEY not set. Email notification skipped.");
    }

    return { success: true };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
