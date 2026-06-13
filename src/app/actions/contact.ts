"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

// ─── Zod Validation Schema ───────────────────────────────────────────
// Defines the exact shape and constraints for every field.
// If any field fails, Zod returns a clear error message.
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be under 100 characters")
    .optional()
    .default(""),
  subject: z.enum(["web", "mobile", "enterprise", "general"], {
    errorMap: () => ({ message: "Please select a valid subject" }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters"),
});

// ─── XSS Sanitization ───────────────────────────────────────────────
// Escapes the 5 dangerous HTML characters so user input can never
// be interpreted as HTML/JS when interpolated into email templates.
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(formData: FormData) {
  try {
    const honeypot = formData.get("fax") as string;

    // If honeypot is filled, it's a bot submission. Return success silently.
    if (honeypot) {
      console.warn("Spam submission detected and discarded via honeypot.");
      return { success: true };
    }

    // ── Step 1: Validate with Zod ──────────────────────────────────
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company") || "",
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      // Collect the first error message from Zod for the user
      const firstError = result.error.errors[0]?.message ?? "Invalid input";
      return { success: false, error: firstError };
    }

    // result.data is now typed, trimmed, and guaranteed valid
    const { name, email, phone, company, subject, message } = result.data;

    // ── Step 2: Sanitize for HTML output ────────────────────────────
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company || "N/A");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // ── Step 3: Insert into Supabase (validated, raw values) ────────
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, company, subject, message }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return { success: false, error: "Failed to save submission. Please ensure the table exists." };
    }

    // ── Step 4: Send email via Resend (sanitized values in HTML) ────
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      
      const { data, error: adminError } = await resend.emails.send({
        from: "Speion Website <onboarding@resend.dev>",
        to: "flaminggarena@gmail.com",
        subject: `New Lead: ${safeSubject} - from ${safeName}`,
        text: `You have received a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>
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
