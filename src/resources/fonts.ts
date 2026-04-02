import { Geist, Geist_Mono } from "next/font/google";
import { FontsConfig } from "@/types";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};
