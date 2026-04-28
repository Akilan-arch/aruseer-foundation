import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy",
    description: "Privacy Policy for Aruseer Foundation. Learn how we handle your personal information.",
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>
      <section style={{ background: "#0F172A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>Privacy Policy</h1>
          <p style={{ color: "#64748B", fontSize: "14px", marginTop: "1rem" }}>Last updated: January 2024</p>
        </div>
      </section>

      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              title: "Who We Are",
              body: "Aruseer Foundation is a new, independent education-focused charity based in Tamil Nadu, India. We are committed to protecting your privacy and handling your personal information with care and respect."
            },
            {
              title: "What Information We Collect",
              body: "When you contact us or submit an aid request, we may collect your name, email address, phone number, and details about your situation. We only collect information that is necessary to process your enquiry or request."
            },
            {
              title: "How We Use Your Information",
              body: "We use the information you provide solely to respond to your enquiry, process aid requests, or send you updates about your donation. We do not use your information for marketing purposes and we do not sell or share your data with third parties."
            },
            {
              title: "Payment Information",
              body: "Aruseer Foundation does not collect, store, or process payment card details. Donations are currently made via bank transfer or UPI directly. We do not handle or retain any financial account information."
            },
            {
              title: "Data Security",
              body: "We take reasonable steps to protect the personal information you share with us. Aid request details are treated with strict confidentiality and are only accessible to the small team processing requests."
            },
            {
              title: "Your Rights",
              body: "You have the right to request access to the personal information we hold about you, ask us to correct inaccurate information, or request that we delete your data. To exercise these rights, please contact us at info@aruseerfoundation.org."
            },
            {
              title: "Cookies",
              body: "Our website does not currently use tracking cookies or third-party analytics. If this changes in the future, we will update this policy and notify users accordingly."
            },
            {
              title: "Changes to This Policy",
              body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically."
            },
            {
              title: "Contact Us",
              body: "If you have any questions about this privacy policy or how we handle your information, please contact us at info@aruseerfoundation.org."
            },
          ].map(section => (
            <div key={section.title} style={{ borderBottom: "1px solid #F1F5F9", paddingBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.875rem" }}>{section.title}</h2>
              <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1rem" }}>
            <Link href={`/${locale}`} style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "14px", textDecoration: "none", borderBottom: "2px solid #8B5CF6", paddingBottom: "2px" }}>Back to Home</Link>
            <Link href={`/${locale}/terms`} style={{ color: "#64748B", fontWeight: 600, fontSize: "14px", textDecoration: "none", borderBottom: "2px solid #E2E8F0", paddingBottom: "2px" }}>Terms of Service</Link>
          </div>
        </div>
      </section>
    </div>
  );
}