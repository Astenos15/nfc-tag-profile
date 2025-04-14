import { nanoid } from "nanoid";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillWechatWork } from "react-icons/ai";
import { FaViber } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";

export const socials = [
  {
    id: nanoid(),
    socialName: "facebook",
    href: "https://www.facebook.com/raffy14.io",
    icon: <FaFacebookSquare />,
    color: "#4267B2",
  },
  {
    id: nanoid(),
    socialName: "instagram",
    href: "#",
    icon: <FaInstagramSquare />,
    color: "#E1306C",
  },
  {
    id: nanoid(),
    socialName: "tiktok",
    href: "#",
    icon: <AiFillTikTok />,
    color: "#000",
  },
  {
    id: nanoid(),
    socialName: "email",
    href: "#",
    icon: <TbBrandGmail />,
    color: "#BB001B",
  },
  {
    id: nanoid(),
    socialName: "viber",
    href: "#",
    icon: <FaViber />,
    color: "	#7360f2",
  },
  {
    id: nanoid(),
    socialName: "wechat",
    href: "#",
    icon: <AiFillWechatWork />,
    color: "#09B83E",
  },
];
