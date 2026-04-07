import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar.component";
import Footer from "./Components/Footer/Footer.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VRB Web Design & Development",
  description:
    "Crafting high-performing web experiences with a focus on design, development, and user experience.",
    icons : {
      icon: "/favicon.ico",
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
