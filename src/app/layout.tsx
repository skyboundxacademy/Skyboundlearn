import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Xtreme Learn - Master Any Subject",
  description: "Your personalized learning platform with AI-powered education. Master any subject with expert-led courses, interactive lessons, and smart progress tracking.",
  keywords: ["education", "learning", "online courses", "tutoring", "AI learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
