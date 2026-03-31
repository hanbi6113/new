// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Arcanes AI",
  description: "Arcanes AI website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-950 antialiased">
        <div className="min-h-screen bg-white">
          <SiteHeader />
          <div className="pt-20">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}