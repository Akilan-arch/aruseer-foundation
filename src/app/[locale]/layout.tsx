import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import PageTransition from "@/components/PageTransition";
import { Locale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }>; }) {
  const { locale } = await params;
  if (!locales.includes(locale)) redirect("/en");
  const dict = await getDictionary(locale);
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar locale={locale} nav={dict.nav} />
      <main style={{ flex: 1 }}>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer locale={locale} footer={dict.footer} />
      <Chatbot locale={locale} />
    </div>
  );
}