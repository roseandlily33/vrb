import {
  Poppins,
  Inter,
  Prata,
  Open_Sans,
  Cormorant_Garamond,
  Manrope,
  Playfair_Display,
} from "next/font/google";
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

// const prata = Prata({
//   variable: "--font-prata",
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const openSans = Open_Sans({
//   variable: "--font-open-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

// const cormorantGaramond = Cormorant_Garamond({
//   variable: "--font-cormorant-garamond",
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

// const manrope = Manrope({
//   variable: "--font-manrope",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

// const playfairDisplay = Playfair_Display({
//   variable: "--font-playfair-display",
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

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
