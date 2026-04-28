import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Aruseer Foundation", template: "%s | Aruseer Foundation" },
  description: "Aruseer Foundation helps children from financially struggling families in Tamil Nadu continue their education with dignity.",
  keywords: ["education", "charity", "Tamil Nadu", "children", "scholarship", "foundation"],
  openGraph: {
    siteName: "Aruseer Foundation",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}