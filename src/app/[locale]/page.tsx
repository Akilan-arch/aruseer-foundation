import { getDictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const reasons = locale === "ta" ? [
    "\u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bbe\u0bb2\u0bcd \u0b88\u0b9f\u0bc1\u0b95\u0b9f\u0bcd\u0b9f \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bbe\u0ba4\u0bb5\u0bc8",
    "\u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b9a\u0bc0\u0bb0\u0bc1\u0b9f\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0ba3\u0bae\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8",
    "\u0baa\u0bcb\u0b95\u0bcd\u0b95\u0bc1\u0bb5\u0bb0\u0ba4\u0bcd\u0ba4\u0bc1 \u0b9a\u0bc6\u0bb2\u0bb5\u0bc1\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bc8 \u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bc7\u0baf\u0bc7 \u0b87\u0bb0\u0b95\u0bcd\u0b95 \u0bb5\u0bc8\u0b95\u0bcd\u0b95\u0bbf\u0ba9\u0bcd\u0bb1\u0ba9",
    "\u0ba4\u0bbf\u0b9f\u0bc0\u0bb0\u0bcd \u0ba8\u0bbf\u0ba4\u0bbf \u0ba8\u0bc6\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0b9f\u0bbf\u0b95\u0bb3\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf\u0baf\u0bc8 \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bbf\u0ba9\u0bcd\u0bb1\u0ba9",
    "\u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0ba4\u0bb2\u0bc8\u0bae\u0bc1\u0bb1\u0bc8 \u0b95\u0bb1\u0bcd\u0baa\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b87\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bb2\u0bcd"
  ] : [
    "School fees that families cannot afford",
    "No money for books, uniforms, or stationery",
    "Transport costs forcing children to stay home",
    "Sudden financial crises causing dropouts",
    "First-generation learners with no support system"
  ];

  const trustPoints = locale === "ta" ? [
    "\u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bbe\u0bb2\u0bcd \u0b8e\u0ba8\u0bcd\u0ba4 \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b85\u0b9f\u0bcd\u0b9f\u0bc8 \u0ba4\u0bb0\u0bb5\u0bc1\u0bae\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8",
    "\u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8\u0b95\u0bb3\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1 \u0b86\u0ba4\u0bb0\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",
    "\u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0ba4\u0bbf \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b8e\u0ba9\u0bcd\u0bb1\u0bc1 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0bb5\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bcd",
    "\u0ba8\u0bbe\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bca\u0bb1\u0bc1\u0baa\u0bcd\u0baa\u0bc1\u0b9f\u0ba9\u0bcd \u0bb5\u0bb3\u0bb0\u0bcd\u0bb5\u0bcb\u0bae\u0bcd, \u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bbe\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bc8 \u0bae\u0bbf\u0b95\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 \u0bae\u0bbe\u0b9f\u0bcd\u0b9f\u0bcb\u0bae\u0bcd"
  ] : [
    "No payment or card data is ever stored by us",
    "Donations are used only for education-related support",
    "Donors will receive updates on how funds are used",
    "We will grow responsibly and never overstate our impact"
  ];

  const isTa = locale === "ta";

  return (
    <div style={{ fontFamily: "Inter, 'Noto Sans Tamil', sans-serif", color: "#0F172A" }}>

      <section style={{ background: "#0F172A", color: "white", padding: "5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "999px", padding: "6px 16px", fontSize: "12px", fontWeight: 600, color: "#C4B5FD", marginBottom: "2rem", letterSpacing: "0.05em" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6", display: "inline-block" }}></span>
            {isTa ? "\u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b85\u0bb1\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bb3\u0bc8 \u2014 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0ba8\u0bbe\u0b9f\u0bc1" : "A NEW FOUNDATION — TAMIL NADU"}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem" }}>
            {dict.hero.title}
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#94A3B8", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            {dict.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              {isTa ? "\u0b87\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0b85\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Donate Now"}
            </Link>
            <Link href={`/${locale}/contact`} style={{ background: "transparent", color: "white", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              {isTa ? "\u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b95\u0bcb\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Request Education Support"}
            </Link>
          </div>
          <p style={{ color: "#475569", fontSize: "13px", fontStyle: "italic" }}>
            {isTa ? "\u0ba8\u0bbe\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8, \u0bb5\u0bc6\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8\u0ba4\u0bcd\u0ba4\u0ba9\u0bcd\u0bae\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0b95\u0bcd\u0b95\u0bb1\u0bc8\u0baf\u0bc1\u0b9f\u0ba9\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0b85\u0bb1\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bb3\u0bc8\u0baf\u0bc8 \u0b95\u0b9f\u0bcd\u0b9f\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "We are building this foundation step by step, with honesty, transparency, and care."}
          </p>
        </div>
      </section>

      <section style={{ background: "#F8F7FF", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {[
            { title: isTa ? "\u0b87\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd" : "Starting Now", desc: isTa ? "\u0b89\u0b9f\u0ba9\u0b9f\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0ba4\u0bc7\u0bb5\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bc1\u0b9f\u0ba9\u0bcd \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0bae\u0bc1\u0ba9\u0bcd\u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf." : "A new education-focused initiative beginning with children who need immediate support.", color: "#8B5CF6" },
            { title: isTa ? "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0ba8\u0bbe\u0b9f\u0bc1 \u0b95\u0bb5\u0ba9\u0bae\u0bcd" : "Tamil Nadu Focus", desc: isTa ? "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0ba8\u0bbe\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3 \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc1\u0b9f\u0ba9\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0bc2\u0bb0\u0bbf\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "Starting locally with families and students in Tamil Nadu.", color: "#0EA5E9" },
            { title: isTa ? "\u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1" : "Education Support", desc: isTa ? "\u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd, \u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b9a\u0bc0\u0bb0\u0bc1\u0b9f\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b85\u0bb5\u0b9a\u0bb0 \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba4\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b89\u0ba4\u0bb5\u0bc1\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "Helping with school fees, books, uniforms, and urgent education needs.", color: "#10B981" },
            { title: isTa ? "\u0bb5\u0bc6\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8\u0baf\u0bbe\u0ba9 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8" : "Transparent Giving", desc: isTa ? "\u0b92\u0bb5\u0bcd\u0bb5\u0bcb\u0bb0\u0bc1 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0b95 \u0b95\u0ba3\u0bcd\u0b95\u0bbe\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1 \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd." : "Every donation tracked clearly and used only for education support.", color: "#F59E0B" },
          ].map(block => (
            <div key={block.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "1.75rem", borderTop: `3px solid ${block.color}` }}>
              <h4 style={{ fontWeight: 700, fontSize: "15px", color: "#0F172A", marginBottom: "0.6rem" }}>{block.title}</h4>
              <p style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "white", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "2.5rem", borderTop: "4px solid #8B5CF6" }}>
            <div style={{ width: "48px", height: "48px", background: "#EDE9FE", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: "22px" }}>🎓</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>
              {isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bc8 \u0b86\u0ba4\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Support a Child"}
            </h3>
            <p style={{ color: "#64748B", lineHeight: 1.7, fontSize: "15px", marginBottom: "1.5rem" }}>
              {isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0ba8\u0bc7\u0bb0\u0b9f\u0bbf\u0baf\u0bbe\u0b95 \u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd. \u0b89\u0ba4\u0bb5\u0bbf\u0ba4\u0bcd\u0ba4\u0bca\u0b95\u0bc8, \u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b9a\u0bc0\u0bb0\u0bc1\u0b9f\u0bc8 \u2014 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0b9f\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd." : "Make a direct impact by funding a child's education. Scholarships, books, uniforms — your donation covers it all."}
            </p>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "11px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
              {isTa ? "\u0b87\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0b85\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Donate Now"}
            </Link>
          </div>
          <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "2.5rem", borderTop: "4px solid #0EA5E9" }}>
            <div style={{ width: "48px", height: "48px", background: "#E0F2FE", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: "22px" }}>🙏</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>
              {isTa ? "\u0ba8\u0bbf\u0ba4\u0bbf \u0b89\u0ba4\u0bb5\u0bbf \u0b95\u0bcb\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Request Financial Aid"}
            </h3>
            <p style={{ color: "#64748B", lineHeight: 1.7, fontSize: "15px", marginBottom: "1.5rem" }}>
              {isTa ? "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0ba3\u0bae\u0bcd \u0b9a\u0bc6\u0bb2\u0bc1\u0ba4\u0bcd\u0ba4 \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8\u0baf\u0bbe? \u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0bb1\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bb3\u0bc8\u0baf\u0bbf\u0b9f\u0bae\u0bcd \u0b89\u0ba4\u0bb5\u0bbf\u0ba4\u0bcd\u0ba4\u0bca\u0b95\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bbf\u0ba4\u0bbf \u0b89\u0ba4\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbf\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd." : "Struggling to pay for your child's education? Apply for a scholarship or financial assistance from our foundation."}
            </p>
            <Link href={`/${locale}/contact`} style={{ background: "#0EA5E9", color: "white", padding: "11px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>
              {isTa ? "\u0b89\u0ba4\u0bb5\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbf\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Apply for Aid"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#F8F7FF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {isTa ? "\u0b8f\u0ba9\u0bcd \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bbf\u0ba9\u0bcb\u0bae\u0bcd" : "Why We Started"}
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0F172A", marginBottom: "1rem", lineHeight: 1.25 }}>
              {isTa ? "\u0baa\u0ba3\u0bae\u0bcd \u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bbf\u0ba9\u0bcd \u0b95\u0bb1\u0bcd\u0bb1\u0bb2\u0bc8 \u0ba8\u0bbf\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0bcd\u0b95\u0bc2\u0b9f\u0bbe\u0ba4\u0bc1" : "Money Should Never Stop a Child From Learning"}
            </h2>
            <p style={{ color: "#64748B", lineHeight: 1.85, fontSize: "15px", maxWidth: "680px" }}>
              {isTa ? "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\u0ba8\u0bbe\u0b9f\u0bc1 \u0bae\u0bc1\u0bb4\u0bc1\u0bb5\u0ba4\u0bc1\u0bae\u0bcd, \u0b86\u0baf\u0bbf\u0bb0\u0b95\u0bcd\u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bc8 \u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0bb0 \u0bb5\u0bc8\u0b95\u0bcd\u0b95 \u0baa\u0bcb\u0bb0\u0bbe\u0b9f\u0bc1\u0b95\u0bbf\u0ba9\u0bcd\u0bb1\u0ba9." : "Across Tamil Nadu, thousands of families struggle to keep their children in school."}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {reasons.map(item => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "white", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "1rem 1.25rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8B5CF6", marginTop: "6px", flexShrink: 0 }}></div>
                <span style={{ color: "#334155", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {isTa ? "\u0ba8\u0bbe\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0ba9\u0bcd\u0ba9 \u0b86\u0ba4\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd" : "What We Support"}
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0F172A" }}>
              {isTa ? "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b8e\u0ba4\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0b9f\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0bae\u0bcd" : "What Your Support Can Cover"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: isTa ? "\u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b86\u0ba4\u0bb0\u0bb5\u0bc1" : "School Fee Support", desc: isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0bae\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b95\u0bbe\u0bb2\u0b95\u0bcd\u0b95\u0bc6\u0b9f\u0bc1\u0bb5\u0bc8 \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95 \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bbe\u0ba4\u0baa\u0bcb\u0ba4\u0bc1, \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8 \u0bb5\u0b95\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bbf \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0baa\u0bcd\u0baa\u0b9f\u0bbe\u0bae\u0bb2\u0bcd \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95 \u0ba8\u0bbe\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bc1\u0baf\u0bb2\u0bcd\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "When a family cannot meet a school fee deadline, we aim to step in so the child is never turned away from class.", border: "#EDE9FE", tag: isTa ? "\u0b95\u0b9f\u0bcd\u0b9f\u0ba3\u0bae\u0bcd" : "Fees", tagBg: "#EDE9FE", tagText: "#7C3AED" },
              { title: isTa ? "\u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bc0\u0bb0\u0bc1\u0b9f\u0bc8 \u0b86\u0ba4\u0bb0\u0bb5\u0bc1" : "Books & Uniform Support", desc: isTa ? "\u0bbe\u0bb1\u0bc1 \u0b86\u0ba4\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bc8\u0baf\u0bc1\u0b9f\u0ba9\u0bcd \u0b95\u0bb1\u0b95\u0bcd\u0b95 \u0ba4\u0bc7\u0bb5\u0bc8\u0baf\u0bbe\u0ba9\u0ba4\u0bc8 \u0baa\u0bc6\u0bb1 \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd." : "We want to ensure every supported child has what they need to show up ready to learn with confidence.", border: "#DCFCE7", tag: isTa ? "\u0b85\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0bb5\u0b9a\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Essentials", tagBg: "#DCFCE7", tagText: "#15803D" },
              { title: isTa ? "\u0b85\u0bb5\u0b9a\u0bb0 \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b89\u0ba4\u0bb5\u0bbf" : "Emergency Education Aid", desc: isTa ? "\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1 \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bbe\u0ba9 \u0b8e\u0ba4\u0bbf\u0bb0\u0bcd\u0baa\u0bbe\u0bb0\u0bbe\u0ba4 \u0ba8\u0bc6\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0b9f\u0bbf\u0b95\u0bb3\u0bc8 \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0bb5\u0bbf\u0bb0\u0bc8\u0bb5\u0bbe\u0b95 \u0baa\u0ba4\u0bbf\u0bb2\u0bb3\u0bbf\u0b95\u0bcd\u0b95 \u0bae\u0bc1\u0baf\u0bb2\u0bcd\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "We aim to respond quickly when families face unexpected education-related crises.", border: "#E0F2FE", tag: isTa ? "\u0b85\u0bb5\u0b9a\u0bb0\u0ba8\u0bbf\u0bb2\u0bc8" : "Emergency", tagBg: "#E0F2FE", tagText: "#0369A1" },
            ].map(card => (
              <div key={card.title} style={{ background: "#FAFAFA", border: `1px solid ${card.border}`, borderRadius: "16px", padding: "2rem" }}>
                <span style={{ background: card.tagBg, color: card.tagText, fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px" }}>{card.tag}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#0F172A", margin: "1rem 0 0.75rem" }}>{card.title}</h3>
                <p style={{ color: "#64748B", lineHeight: 1.75, fontSize: "14px", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F8F7FF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {isTa ? "\u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0bae\u0bc1\u0bb1\u0bc8" : "The Process"}
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0F172A" }}>
              {isTa ? "\u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd" : "How Support Will Work"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { step: "01", title: isTa ? "\u0b95\u0bcb\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc8 \u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Submit a Request", desc: isTa ? "\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bc7\u0bb5\u0bc8\u0baf\u0bc8 \u0bb5\u0bbf\u0bb5\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b95\u0bcb\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc8\u0baf\u0bc8 \u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bcd." : "Family or student submits a request describing their education-related financial need." },
              { step: "02", title: isTa ? "\u0ba4\u0bc7\u0bb5\u0bc8 \u0b9a\u0bb0\u0bbf\u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1" : "Need is Verified", desc: isTa ? "\u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0bb4\u0bc1 \u0b95\u0bb5\u0ba9\u0ba4\u0bcd\u0ba4\u0bc1\u0b9f\u0ba9\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bb0\u0bbf\u0baf\u0bbe\u0ba4\u0bc8\u0baf\u0bc1\u0b9f\u0ba9\u0bcd \u0b9a\u0bc2\u0bb4\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8 \u0b9a\u0bb0\u0bbf\u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1." : "Our team reviews and verifies the situation with care and respect." },
              { step: "03", title: isTa ? "\u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b92\u0ba4\u0bc1\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1" : "Support Allocated", desc: isTa ? "\u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0ba8\u0bbf\u0ba4\u0bbf \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0b9f\u0bcd\u0b9f \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba4\u0bc7\u0bb5\u0bc8\u0baf\u0bc8 \u0baa\u0bc2\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bbf \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0b9a\u0bc6\u0bb2\u0bb5\u0bbf\u0b9f\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1." : "Donor funds are directed to cover the specific education need identified." },
              { step: "04", title: isTa ? "\u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0ba9\u0bcd\u0bb1\u0ba9" : "Updates Shared", desc: isTa ? "\u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0ba8\u0bb0\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bc6\u0bb3\u0bbf\u0bb5\u0bbe\u0ba9 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bcd." : "Donors and recipients receive clear updates. Transparency is non-negotiable." },
            ].map(s => (
              <div key={s.step} style={{ background: "white", border: "1px solid #EDE9FE", borderRadius: "14px", padding: "1.75rem" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#EDE9FE", lineHeight: 1, marginBottom: "1rem" }}>{s.step}</div>
                <h4 style={{ fontWeight: 700, fontSize: "15px", color: "#0F172A", marginBottom: "0.5rem" }}>{s.title}</h4>
                <p style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {isTa ? "\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0ba4\u0bcd\u0ba4\u0bc8 \u0b89\u0bb0\u0bc1\u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Make a Difference"}
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>
              {isTa ? "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0b8e\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0b89\u0ba4\u0bb5\u0bb2\u0bbe\u0bae\u0bcd" : "What Your Donation Can Help With"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { amount: isTa ? "\u20b9500" : "₹500", desc: isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0b95\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b85\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8 \u0baa\u0bb3\u0bcd\u0bb3\u0bbf \u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bc8 \u0bb5\u0bbe\u0b99\u0b95 \u0b89\u0ba4\u0bb5\u0bb2\u0bbe\u0bae\u0bcd." : "Can help cover books, stationery, or basic school supplies for a child.", color: "#EDE9FE", text: "#7C3AED", border: "#DDD6FE" },
              { amount: isTa ? "\u20b91,000" : "₹1,000", desc: isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0bb3\u0bcd\u0bb3\u0bbf \u0b9a\u0bc0\u0bb0\u0bc1\u0b9f\u0bc8 \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b85\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0bb5\u0b9a\u0bbf\u0baf \u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bc8 \u0b86\u0ba4\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0bae\u0bcd." : "Can support a school uniform or other essential items a child needs.", color: "#DCFCE7", text: "#15803D", border: "#BBF7D0" },
              { amount: isTa ? "\u20b92,500+" : "₹2,500+", desc: isTa ? "\u0ba4\u0bc7\u0bb5\u0bc8\u0baf\u0bc1\u0bb3\u0bcd\u0bb3 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0ba3 \u0b86\u0ba4\u0bb0\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0bae\u0bcd." : "Can contribute towards school fee support for a child in need.", color: "#E0F2FE", text: "#0369A1", border: "#BAE6FD" },
            ].map(d => (
              <div key={d.amount} style={{ background: d.color, border: `1px solid ${d.border}`, borderRadius: "16px", padding: "2rem" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 800, color: d.text, marginBottom: "0.75rem" }}>{d.amount}</div>
                <p style={{ color: "#334155", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: "13px", marginTop: "2rem", fontStyle: "italic" }}>
            {isTa ? "\u0ba4\u0bca\u0b95\u0bc8\u0b95\u0bb3\u0bcd \u0b9a\u0bc1\u0b9f\u0bcd\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0bb5\u0b95\u0bc8\u0baf\u0bbf\u0bb2\u0bbe\u0ba9\u0bb5\u0bc8. \u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0b9f\u0bcd\u0b9f\u0bc1\u0bae\u0bc7 \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd." : "All amounts are indicative. Donations are used solely for education-related support."}
          </p>
        </div>
      </section>

      <section style={{ background: "#F8F7FF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {isTa ? "\u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bb1\u0bc1\u0ba4\u0bbf" : "Our Promise"}
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>
            {isTa ? "\u0bb5\u0bc6\u0bb3\u0bbf\u0baa\u0bcd\u0baa\u0b9f\u0bc8\u0ba4\u0bcd\u0ba4\u0ba9\u0bcd\u0bae\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b95\u0b9f\u0bcd\u0b9f\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1" : "Built on Transparency"}
          </h2>
          <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            {isTa ? "\u0ba8\u0bbe\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b92\u0bb0\u0bc1 \u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b85\u0bb1\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bb3\u0bc8 \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0ba8\u0bae\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bc8 \u0b9a\u0bae\u0bcd\u0baa\u0bbe\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0b8e\u0ba9\u0bcd\u0bb1\u0bc1 \u0baa\u0bc1\u0bb0\u0bbf\u0ba8\u0bcd\u0ba4\u0bc1\u0b95\u0bca\u0bb3\u0bcd\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd." : "We are a new foundation and we understand that trust must be earned."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {trustPoints.map(item => (
              <div key={item} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.25rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6" }}></div>
                </div>
                <span style={{ color: "#334155", fontSize: "13.5px", lineHeight: 1.65 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
            {isTa ? "\u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8 \u0baa\u0bb3\u0bcd\u0bb3\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0bb0 \u0b89\u0ba4\u0bb5\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Help a Child Stay in School"}
          </h2>
          <p style={{ color: "#64748B", fontSize: "1.05rem", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            {isTa ? "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b86\u0ba4\u0bb0\u0bb5\u0bc1, \u0b9a\u0bbf\u0bb1\u0bbf\u0baf\u0ba4\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bc1\u0bae\u0bcd, \u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b85\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0ba4\u0bcd\u0ba4\u0bc8 \u0b95\u0bc1\u0bb1\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0b92\u0bb0\u0bc1 \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bb1\u0bcd\u0bb1\u0bb2\u0bc8 \u0ba4\u0bca\u0b9f\u0bb0 \u0ba8\u0bae\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bc8 \u0b85\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0bae\u0bcd." : "Your support, even small, can reduce the pressure on a family and give a child the confidence to continue learning."}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "15px 32px", borderRadius: "8px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              {isTa ? "\u0b87\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1 \u0ba8\u0ba9\u0bcd\u0b95\u0bca\u0b9f\u0bc8 \u0b85\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd" : "Donate Now"}
            </Link>
            <Link href={`/${locale}/contact`} style={{ background: "transparent", color: "white", padding: "15px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "16px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
              {isTa ? "\u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b86\u0ba4\u0bb0\u0bb5\u0bc1 \u0b95\u0bcb\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd" : "Request Education Support"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}