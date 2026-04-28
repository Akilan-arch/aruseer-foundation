import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Our Causes",
    description: "Aruseer Foundation supports school fee payments, books, uniforms, and emergency education aid for children in Tamil Nadu.",
    alternates: { canonical: `/${locale}/causes` },
  };
}

export default async function CausesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>

      {/* Hero */}
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Causes</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            What We Are Fighting For
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.85 }}>
            Every cause we support is rooted in one belief — that financial hardship should never be the reason a child stops learning.
          </p>
        </div>
      </section>

      {/* Main Causes */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {[
            {
              num: "01", tag: "Fees", tagBg: "#EDE9FE", tagText: "#7C3AED",
              title: "School Fee Support",
              desc: "In Tamil Nadu, many government and private-aided schools charge modest fees — but for families living below the poverty line or dealing with sudden financial hardship, even small amounts can be impossible to manage. When a fee deadline is missed, children are often asked to stay home. We aim to step in and cover those fees so the child never misses a single day of school due to money.",
              what: ["Term fees and annual fees", "Examination registration fees", "Re-admission fees after a gap"],
              border: "#DDD6FE"
            },
            {
              num: "02", tag: "Essentials", tagBg: "#DCFCE7", tagText: "#15803D",
              title: "Books, Uniforms & Stationery",
              desc: "A child who arrives at school without the right materials struggles silently. Without the required uniform, they may be turned away at the gate. Without textbooks, they cannot follow lessons. These are not luxuries — they are the basic requirements for a child to participate in their own education. We want every child we support to have everything they need to show up and learn with confidence.",
              what: ["School textbooks and workbooks", "Uniforms, shoes, and bags", "Stationery, pens, and basic supplies"],
              border: "#BBF7D0"
            },
            {
              num: "03", tag: "Emergency", tagBg: "#E0F2FE", tagText: "#0369A1",
              title: "Emergency Education Aid",
              desc: "Some families are managing just fine — until something goes wrong. A parent losing their job, a medical emergency, a death in the family. These sudden crises can pull a child out of school overnight. Emergency education aid exists for these moments — to give a family breathing room so education is not the first thing sacrificed when times get hard.",
              what: ["Urgent fee payments during family crisis", "Replacement of lost or damaged materials", "Transport support in exceptional cases"],
              border: "#BAE6FD"
            },
          ].map(cause => (
            <div key={cause.num} style={{ background: "#FAFAFA", border: `1px solid ${cause.border}`, borderRadius: "16px", padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 800, color: "#F1F5F9", lineHeight: 1 }}>{cause.num}</span>
                  <span style={{ background: cause.tagBg, color: cause.tagText, fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px" }}>{cause.tag}</span>
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>{cause.title}</h3>
                <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.85 }}>{cause.desc}</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "13px", color: "#0F172A", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>What This Covers</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {cause.what.map(w => (
                    <div key={w} style={{ display: "flex", gap: "10px", alignItems: "center", background: "white", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "0.875rem 1rem" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: cause.tagText, flexShrink: 0 }}></div>
                      <span style={{ color: "#334155", fontSize: "13.5px" }}>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F8F7FF", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1rem" }}>Support One of These Causes</h2>
          <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.8, marginBottom: "2rem" }}>Your contribution, regardless of size, goes directly towards one of these three areas.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>Donate Now</Link>
            <Link href={`/${locale}/contact`} style={{ background: "transparent", color: "#8B5CF6", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1px solid #8B5CF6" }}>Request Aid</Link>
          </div>
        </div>
      </section>

    </div>
  );
}