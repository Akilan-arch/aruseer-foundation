"use client";
import { useRouter, usePathname } from "next/navigation";
import { locales, Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const current = pathname.split("/")[1] as Locale;

  const switchLanguage = (locale: Locale) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div style={{ display: "flex", gap: "4px", background: "#F1F5F9", borderRadius: "8px", padding: "3px" }}>
      {locales.map(locale => (
        <button key={locale} onClick={() => switchLanguage(locale)} style={{
          padding: "4px 10px", fontSize: "12px", fontWeight: 600, borderRadius: "6px", border: "none", cursor: "pointer",
          background: current === locale ? "#F97316" : "transparent",
          color: current === locale ? "white" : "#64748B",
        }}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
