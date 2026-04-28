"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";

interface NavbarProps {
  locale: Locale;
  nav: { home: string; about: string; causes: string; donate: string; volunteer: string; contact: string; };
}

export default function Navbar({ locale, nav }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const items = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/causes`, label: nav.causes },
    { href: `/${locale}/volunteer`, label: nav.volunteer },
    { href: `/${locale}/contact`, label: nav.contact },
  ];

  return (
    <nav style={{ background: "white", borderBottom: "1px solid #EDE9FE", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "66px" }}>

        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: "9px", textDecoration: "none" }}>
          <div style={{ width: "34px", height: "34px", background: "#EDE9FE", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #DDD6FE" }}>
            <span style={{ color: "#7C3AED", fontWeight: 800, fontSize: "15px", fontFamily: "Georgia, serif" }}>AF</span>
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "15px", color: "#3B0764" }}>Aruseer</div>
            <div style={{ fontSize: "9px", color: "#8B5CF6", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "2px" }}>Foundation</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            {items.map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: "13.5px", fontWeight: 500, textDecoration: "none",
                color: pathname === item.href ? "#7C3AED" : "#334155",
                borderBottom: pathname === item.href ? "2px solid #7C3AED" : "2px solid transparent",
                paddingBottom: "2px"
              }}>
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop Right */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <LanguageSwitcher />
            <Link href={`/${locale}/donate`} style={{ background: "#7C3AED", color: "white", padding: "9px 18px", borderRadius: "7px", fontWeight: 600, fontSize: "13.5px", textDecoration: "none" }}>
              Donate Now
            </Link>
          </div>
        )}

        {/* Mobile Right */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <LanguageSwitcher />
            <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "2px", background: open ? "#7C3AED" : "#334155", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", background: open ? "#7C3AED" : "#334155", borderRadius: "2px", transition: "all 0.2s", opacity: open ? 0 : 1 }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", background: open ? "#7C3AED" : "#334155", borderRadius: "2px", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div style={{ background: "white", borderTop: "1px solid #EDE9FE", padding: "1rem 1.5rem 1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "1rem" }}>
            {items.map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: "15px", fontWeight: 500, textDecoration: "none", padding: "12px 0",
                color: pathname === item.href ? "#7C3AED" : "#334155",
                borderBottom: "1px solid #F8F7FF"
              }}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/donate`} style={{ background: "#7C3AED", color: "white", padding: "12px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", textDecoration: "none", display: "block", textAlign: "center" }}>
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}