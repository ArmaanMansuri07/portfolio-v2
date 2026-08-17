import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Armaan Mansuri | Full Stack Web Developer",
  description:
    "Portfolio of Armaan Mansuri, a Full Stack Web Developer building modern, responsive and user-friendly web applications with React, Next.js, Django and Python.",
  keywords: [
    "Armaan Mansuri",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Armaan Mansuri" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}