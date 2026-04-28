import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service",
    description: "Terms of Service for Aruseer Foundation.",
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>
      <section style={{ background: "#0F172A", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Legal</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>Terms of Service</h1>
          <p style={{ color: "#64748B", fontSize: "14px", marginTop: "1rem" }}>Last updated: January 2024</p>
        </div>
      </section>

      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              title: "Acceptance of Terms",
              body: "By accessing and using the Aruseer Foundation website, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use our website."
            },
            {
              title: "About Our Services",
              body: "Aruseer Foundation provides information about our education support programmes and allows individuals to contact us for aid requests or general enquiries. We are a new, independent charity and our services are provided in good faith on a best-efforts basis."
            },
            {
              title: "Donations",
              body: "All donations made to Aruseer Foundation are voluntary. We commit to using donations solely for education-related support for children in Tamil Nadu. Donations are non-refundable unless made in error, in which case please contact us promptly at info@aruseerfoundation.org."
            },
            {
              title: "Aid Requests",
              body: "Submitting an aid request does not guarantee that support will be provided. All requests are reviewed on a case-by-case basis subject to available resources. We will respond to all requests as promptly as possible and with respect and dignity."
            },
            {
              title: "Accuracy of Information",
              body: "We aim to keep all information on our website accurate and up to date. However, as a new foundation, some details may change as we develop. We are not liable for decisions made based on information on this website."
            },
            {
              title: "User Conduct",
              body: "You agree not to misuse this website or submit false aid requests. Any attempt to obtain support through dishonest means will result in the request being rejected and may be reported to relevant authorities."
            },
            {
              title: "Intellectual Property",
              body: "All content on this website — including text, design, and branding — belongs to Aruseer Foundation. You may not reproduce or use our content without written permission."
            },
            {
              title: "Limitation of Liability",
              body: "Aruseer Foundation is a new, volunteer-run charity. To the fullest extent permitted by law, we are not liable for any indirect or consequential losses arising from the use of this website or our services."
            },
            {
              title: "Governing Law",
              body: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts of Tamil Nadu."
            },
            {
              title: "Contact",
              body: "For any questions about these terms, please contact us at info@aruseerfoundation.org."
            },
          ].map(section => (
            <div key={section.title} style={{ borderBottom: "1px solid #F1F5F9", paddingBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.875rem" }}>{section.title}</h2>
              <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>{section.body}</p>
            </div>
          ))}

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1rem" }}>
            <Link href={`/${locale}`} style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "14px", textDecoration: "none", borderBottom: "2px solid #8B5CF6", paddingBottom: "2px" }}>Back to Home</Link>
            <Link href={`/${locale}/privacy`} style={{ color: "#64748B", fontWeight: 600, fontSize: "14px", textDecoration: "none", borderBottom: "2px solid #E2E8F0", paddingBottom: "2px" }}>Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}