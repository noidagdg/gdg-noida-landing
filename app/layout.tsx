import type { Metadata } from "next";
import "./globals.css";
import { PageLoader } from "@/components/ui/page-loader";

export const metadata: Metadata = {
  title: "GDG Noida",
  description: "GDG Noida is a community of developers who are passionate about technology and innovation.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/og-image.png",
    title: "GDG Noida",
    description: "GDG Noida is a community of developers who are passionate about technology and innovation.",
    url: "https://gdgnoida.com",
    siteName: "GDG Noida",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "'Product Sans', ui-sans-serif, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
