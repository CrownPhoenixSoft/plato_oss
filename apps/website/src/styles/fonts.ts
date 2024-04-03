import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const platoFont = localFont({
  src: "../styles/Satoshi-Variable.woff2",
  variable: "--font-plato",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
