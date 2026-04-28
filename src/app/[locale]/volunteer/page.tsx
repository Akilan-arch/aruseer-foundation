import type { Metadata } from "next";
import { Locale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Volunteer",
    description: "Volunteer with Aruseer Foundation. Help children in Tamil Nadu access education by contributing your time and skills.",
    alternates: { canonical: `/${locale}/volunteer` },
  };
}

export default async function VolunteerPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#0F172A" }}>

      {/* Hero */}
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Volunteer</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Give Your Time, Change a Life
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.85 }}>
            Aruseer Foundation is built by people who care. If you want to contribute your time and skills to help children stay in school, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Why Volunteer</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "1.25rem", lineHeight: 1.25 }}>
              We Are Just Getting Started — And We Need People
            </h2>
            <p style={{ color: "#64748B", lineHeight: 1.85, fontSize: "15px", marginBottom: "1rem" }}>
              As a new foundation, every person who joins us makes a meaningful difference. We are not a large organisation with hundreds of staff. We are a small, committed team working with limited resources to do something genuinely important.
            </p>
            <p style={{ color: "#64748B", lineHeight: 1.85, fontSize: "15px" }}>
              Volunteering with Aruseer Foundation means your contribution is visible, valued, and directly connected to real children in Tamil Nadu.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { title: "Meaningful work", desc: "Every task you do — from outreach to verification — directly helps a child." },
              { title: "Flexible commitment", desc: "We respect your time. Contribute as much or as little as you can manage." },
              { title: "Be part of something early", desc: "Join a foundation from its beginning and help shape how it grows." },
              { title: "Work with honest people", desc: "We operate with full transparency — no politics, no bureaucracy." },
            ].map(item => (
              <div key={item.title} style={{ background: "#F8F7FF", border: "1px solid #EDE9FE", borderRadius: "12px", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 600, color: "#0F172A", fontSize: "14px", marginBottom: "4px" }}>{item.title}</div>
                <div style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section style={{ background: "#F8F7FF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#8B5CF6", fontWeight: 600, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Volunteer Roles</p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "#0F172A" }}>How You Can Help</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Community Outreach", desc: "Help us reach families who need support. Talk to local communities, schools, and social networks to spread awareness about the foundation.", tag: "Field Work", tagBg: "#EDE9FE", tagText: "#7C3AED" },
              { title: "Request Verification", desc: "Review aid requests with care and sensitivity. Help us confirm the genuine needs of families applying for support.", tag: "Coordination", tagBg: "#DCFCE7", tagText: "#15803D" },
              { title: "Tutoring & Mentorship", desc: "Provide academic support to children who are struggling. Even one hour a week of tutoring can make a real difference.", tag: "Education", tagBg: "#E0F2FE", tagText: "#0369A1" },
              { title: "Admin & Operations", desc: "Help with documentation, communication, donor updates, and keeping the foundation running smoothly behind the scenes.", tag: "Admin", tagBg: "#FFF7ED", tagText: "#C2410C" },
              { title: "Digital & Communication", desc: "Support our online presence, social media, content writing, or website updates to help us reach more people.", tag: "Digital", tagBg: "#F5F3FF", tagText: "#7C3AED" },
              { title: "Fundraising Support", desc: "Help organise small fundraising efforts, events, or campaigns to raise awareness and funds for the foundation.", tag: "Fundraising", tagBg: "#FFF7ED", tagText: "#B45309" },
            ].map(role => (
              <div key={role.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "1.75rem" }}>
                <span style={{ background: role.tagBg, color: role.tagText, fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px" }}>{role.tag}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", margin: "0.875rem 0 0.5rem" }}>{role.title}</h3>
                <p style={{ color: "#64748B", fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0F172A", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>Ready to Volunteer?</h2>
          <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.8, marginBottom: "2rem" }}>
            Reach out to us and tell us how you would like to contribute. We will get back to you personally.
          </p>
          <Link href={`/${locale}/contact`} style={{ background: "#8B5CF6", color: "white", padding: "14px 32px", borderRadius: "8px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}