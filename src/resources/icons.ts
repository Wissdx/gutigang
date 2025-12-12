import React from "react";
import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { FaDumbbell, FaAppleWhole } from "react-icons/fa6";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaInstagram, FaTiktok } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  dumbbell: FaDumbbell,
  apple: FaAppleWhole,
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  myprotein: (({ size, className, style, title }) => {
    const dim = typeof size === "number" ? size : size ? parseInt(String(size), 10) : 24;
    return React.createElement("img", {
      src: "/images/myprotein.png",
      alt: title || "Myprotein",
      className,
      style: {
        width: dim,
        height: dim,
        objectFit: "contain",
        display: "inline-block",
        filter: "none",
        ...style,
      },
    });
  }) as IconType,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
