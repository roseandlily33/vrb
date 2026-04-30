import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar.component";
import Footer from "./Components/Footer/Footer.component";

// Font imports and CSS variable setup
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "VRB Web Design & Development",
  description:
    "Crafting high-performing web experiences with a focus on design, development, and user experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

// To switch fonts, adjust the className below and update globals.css accordingly
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${inter.variable}
      `}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
