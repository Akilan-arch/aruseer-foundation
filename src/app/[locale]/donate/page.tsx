import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Donate",
    description: "Support Aruseer Foundation. Your donation helps children in Tamil Nadu stay in school by covering fees, books, and uniforms.",
    alternates: { canonical: `/${locale}/donate` },
  };
}

export default async function DonatePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>

      {/* Hero */}
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Donate</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Your Contribution Keeps a Child in School
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.85 }}>
            Every rupee donated to Aruseer Foundation goes directly towards education support for children in Tamil Nadu. No admin cuts. No overhead charges.
          </p>
        </div>
      </section>

      {/* What Your Donation Can Do */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Impact</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A" }}>What Your Donation Can Help With</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {[
              { amount: "500", label: "Books & Stationery", desc: "Can help cover textbooks, notebooks, pens, and basic stationery for one child.", bg: "#F5F3FF", border: "#DDD6FE", text: "#7C3AED" },
              { amount: "1,000", label: "Uniform Support", desc: "Can help with a full school uniform, shoes, and a school bag for one child.", bg: "#F0FDF4", border: "#BBF7D0", text: "#15803D" },
              { amount: "2,500", label: "Term Fee Support", desc: "Can contribute towards a term school fee for a child from a low-income family.", bg: "#F0F9FF", border: "#BAE6FD", text: "#0369A1" },
              { amount: "5,000+", label: "Full Year Support", desc: "Can help cover a full year of essentials — fees, books, and uniform — for one child.", bg: "#FFF7ED", border: "#FED7AA", text: "#C2410C" },
            ].map(d => (
              <div key={d.amount} style={{ background: d.bg, border: `1px solid ${d.border}`, borderRadius: "16px", padding: "2rem" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", fontWeight: 800, color: d.text, marginBottom: "0.5rem" }}>
                  {d.amount}
                </div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#0F172A", marginBottom: "0.5rem" }}>{d.label}</div>
                <p style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: "13px", fontStyle: "italic" }}>
            All amounts are indicative. Donations are used solely for education-related support.
          </p>
        </div>
      </section>

      {/* How to Donate */}
      <section style={{ background: "#F8F7FF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>How to Donate</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>Bank Transfer & UPI</h2>
            <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.7 }}>
              We currently accept donations via bank transfer and UPI. Online payment integration is coming soon.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "2rem" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#0F172A", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Bank Transfer</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "Account Name", value: "Aruseer Foundation" },
                  { label: "Account Number", value: "XXXX XXXX XXXX" },
                  { label: "IFSC Code", value: "XXXXXXXX" },
                  { label: "Bank", value: "Update your bank name" },
                ].map(row => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F1F5F9", paddingBottom: "0.875rem" }}>
                    <span style={{ color: "#64748B", fontSize: "13.5px" }}>{row.label}</span>
                    <span style={{ fontWeight: 600, fontSize: "13.5px", color: "#0F172A" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "2rem" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#0F172A", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>UPI Payment</p>
              <div style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "1.5rem", textAlign: "center", marginBottom: "1rem" }}>
                <p style={{ color: "#64748B", fontSize: "13px", marginBottom: "0.5rem" }}>UPI ID</p>
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#7C3AED" }}>aruseer@upi</p>
                <p style={{ color: "#94A3B8", fontSize: "12px", marginTop: "0.5rem" }}>Update with your actual UPI ID</p>
              </div>
              <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6 }}>
                After donating, please email us at info@aruseerfoundation.org with your transaction ID so we can acknowledge your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>Our Donation Promise</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem", textAlign: "left" }}>
            {[
              "100% of donations go to education support",
              "No payment data is stored by us",
              "You will receive confirmation of your donation",
              "We will share how funds are used",
            ].map(item => (
              <div key={item} style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "12px", padding: "1.25rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6" }}></div>
                </div>
                <span style={{ color: "#334155", fontSize: "13.5px", lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}