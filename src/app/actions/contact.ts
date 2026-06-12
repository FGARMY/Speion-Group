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
      
      // 2. Send email to Speion Admins (Testing Address)
      const { data, error: adminError } = await resend.emails.send({
        from: "Speion Website <onboarding@resend.dev>",
        to: "flaminggarena@gmail.com",
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

      if (adminError) {
        console.error("Resend error (admin email):", adminError);
      }

      // 3. Send Auto-responder to the Client (Disabled until domain is verified in Resend)
      /*
      const { error: clientError } = await resend.emails.send({
        from: "Speion Group <onboarding@resend.dev>", // Or a verified domain
        to: email,
        subject: "We've received your message - Speion Group",
        text: `Hi ${name},\n\nThank you for reaching out to Speion Group!\n\nWe have received your message regarding "${subject}" and our team will get back to you shortly.\n\nBest regards,\nSpeion Group Team`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
            <h2 style="color: #0f172a;">Thank you for contacting us, ${name}!</h2>
            <p>We have successfully received your inquiry regarding <strong>${subject}</strong>.</p>
            <p>Our engineering team is reviewing your requirements and will be in touch with you very shortly.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Speion Group Team</strong></p>
          </div>
        `,
      });

      if (clientError) {
        console.error("Resend error (client email):", clientError);
      }
      */
    } else {
      console.warn("RESEND_API_KEY not set. Email notification skipped.");
    }

    return { success: true };
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}
