import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { siteLinks } from "@/lib/data-links";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"]
});

export const metadata: Metadata = {
  title: siteLinks.title,
  description: siteLinks.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteLinks.url)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
