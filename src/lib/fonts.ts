import { Inter, Jost } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const sequelMedium = localFont({
  src: "../../public/fonts/SequelSans-MediumHead.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-sequel-medium",
  display: "swap",
});

export const sequelRoman = localFont({
  src: "../../public/fonts/SequelSans-RomanHead.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-sequel-roman",
  display: "swap",
});

export const sequelBold = localFont({
  src: "../../public/fonts/SequelSans-BoldHead.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-sequel-bold",
  display: "swap",
});

export const sequelSemiBold = localFont({
  src: "../../public/fonts/SequelSans-SemiBoldHead.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-sequel-semi",
  display: "swap",
});

export const sequelHeavy = localFont({
  src: "../../public/fonts/SequelSans-HeavyDisp.woff2",
  weight: "800",
  style: "normal",
  variable: "--font-sequel-heavy",
  display: "swap",
});

export const siteFontVariables = [
  inter.variable,
  jost.variable,
  sequelMedium.variable,
  sequelRoman.variable,
  sequelBold.variable,
  sequelSemiBold.variable,
  sequelHeavy.variable,
].join(" ");
