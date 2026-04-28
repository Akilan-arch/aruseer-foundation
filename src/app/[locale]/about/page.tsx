import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About Us",
    description: locale === "ta"
      ? "அருசீர் அறக்கட்டளையின் நோக்கம், தொலைநோக்கு மற்றும் மதிப்புகளை அறிந்து கொள்ளுங்கள்."
      : "Learn about Aruseer Foundation's mission, vision, and values — a new education charity in Tamil Nadu.",
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>About Us</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>Who We Are and Why We Exist</h1>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.85 }}>Aruseer Foundation is a new, independent education-focused charity based in Tamil Nadu. We exist because too many children are being denied an education not due to lack of ability, but due to lack of money.</p>
        </div>
      </section>
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[{ label: "Our Mission", title: "Remove financial barriers to education", desc: "To provide direct, transparent financial support to children and families in Tamil Nadu who are struggling to afford school fees, books, uniforms, and other education essentials.", color: "#8B5CF6", bg: "#F5F3FF", border: "#DDD6FE" }, { label: "Our Vision", title: "A Tamil Nadu where every child finishes school", desc: "We believe that every child in Tamil Nadu — regardless of their family income — deserves the opportunity to complete their education, build skills, and shape their own future with dignity.", color: "#0EA5E9", bg: "#F0F9FF", border: "#BAE6FD" }, { label: "Our Values", title: "Honesty, transparency, and humility", desc: "We are a new foundation. We do not overstate our impact. We operate with complete transparency, use donations only for education support, and grow responsibly — earning trust through action, not words.", color: "#10B981", bg: "#F0FDF4", border: "#BBF7D0" }].map(item => (
            <div key={item.label} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: "16px", padding: "2.5rem", borderTop: `3px solid ${item.color}` }}>
              <p style={{ color: item.color, fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{item.label}</p>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "#F8F7FF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Approach</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1.25rem", lineHeight: 1.25 }}>Starting Small, Acting Honestly</h2>
            <p style={{ color: "#64748B", lineHeight: 1.85, fontSize: "15px", marginBottom: "1rem" }}>We are not pretending to be something we are not. Aruseer Foundation is in its earliest stages. We do not have large infrastructure, hundreds of staff, or years of impact reports.</p>
            <p style={{ color: "#64748B", lineHeight: 1.85, fontSize: "15px" }}>What we do have is a clear purpose, a transparent process, and a genuine commitment to helping even one child stay in school. We will build from there — carefully, honestly, and responsibly.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[{ title: "No fake numbers", desc: "We will never publish inflated stats or unverified claims about our impact." }, { title: "Direct support", desc: "Donations go directly to education needs — not admin overhead or marketing." }, { title: "Case by case", desc: "Every request is reviewed individually with care and respect for the family." }, { title: "Publicly accountable", desc: "We will share regular updates on how donations are being used." }].map(item => (
              <div key={item.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.25rem 1.5rem", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8B5CF6", marginTop: "6px", flexShrink: 0 }}></div>
                <div>
                  <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "14px", marginBottom: "3px" }}>{item.title}</div>
                  <div style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Be Part of This From the Start</h2>
          <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.8, marginBottom: "2rem" }}>Whether you want to donate or need support — we are here and we are listening.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>Donate Now</Link>
            <Link href={`/${locale}/contact`} style={{ background: "transparent", color: "white", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>Request Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}