import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEBEQ - Transparent AI Workflow Automation",
  description: "Transform repetitive tasks into human creativity. Give your team 3+ hours back every day with transparent AI that observes patterns, not people.",
  keywords: "workflow automation, AI automation, productivity, business efficiency, transparent AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
