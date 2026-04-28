import Link from "next/link";
import { Locale } from "@/lib/i18n/config";

interface FooterProps {
  locale: Locale;
  footer: { rights: string; privacy: string; terms: string; };
}

export default function Footer({ locale, footer }: FooterProps) {
  return (
    <footer style={{ background: "#1E3A5F", color: "white", marginTop: "auto" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: "36px", height: "36px", background: "#8B5CF6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "14px", fontFamily: "Georgia, serif" }}>AF</span>
              </div>
              <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "18px" }}>Aruseer Foundation</span>
            </div>
            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7 }}>Empowering children through education. Every child deserves the chance to learn and succeed.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "15px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><Link href={`/${locale}/about`} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px" }}>About Us</Link></li>
              <li><Link href={`/${locale}/causes`} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px" }}>Our Causes</Link></li>
              <li><Link href={`/${locale}/volunteer`} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px" }}>Volunteer</Link></li>
              <li><Link href={`/${locale}/contact`} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px" }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "15px" }}>Contact</h4>
            <div style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 2 }}>
              <p>Tamil Nadu, India</p>
              <p>info@aruseerfoundation.org</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", fontSize: "15px" }}>Support a Child</h4>
            <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "1rem" }}>Your donation changes lives.</p>
            <Link href={`/${locale}/donate`} style={{ background: "#8B5CF6", color: "white", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "inline-block" }}>Donate Now</Link>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #334155", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#64748B", fontSize: "13px" }}>2024 Aruseer Foundation. {footer.rights}</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href={`/${locale}/privacy`} style={{ color: "#64748B", fontSize: "13px", textDecoration: "none" }}>{footer.privacy}</Link>
            <Link href={`/${locale}/terms`} style={{ color: "#64748B", fontSize: "13px", textDecoration: "none" }}>{footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}