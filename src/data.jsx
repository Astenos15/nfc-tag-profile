// Dont touch code below
import { nanoid } from "nanoid";
import { FaFacebookSquare, FaInstagramSquare, FaDiscord } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// Dont touch code above

import picture from "./assets/img/profile.png"; // Only change  the file format "./assets/img/profile.{format}"

export const photo = picture; // Do not touch

export const userName = "raffy"; // Type your desired username between " "

export const birthYear = 1990; // Type your birthyear here

// Tell something about yourself.Type text between " "
export const aboutMe =
  "Hello I'm Raffy Front-end developer,copywriter, and entrepreneur.Let's build something amazing together!";

// Copy and paste your social/contact link and paste in -- href: "paste here" --
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
    href: "https://www.instagram.com/raffy14.io",
    icon: <FaInstagramSquare />,
    color: "#E1306C",
  },
  {
    id: nanoid(),
    socialName: "tiktok",
    href: "https://www.tiktok.com/@raffy14.io",
    icon: <AiFillTikTok />,
    color: "#000",
  },
  {
    id: nanoid(),
    socialName: "email",
    href: "raffy.ramos.14.portfolio@gmail.com",
    icon: <SiGmail />,
    color: "#BB001B",
  },
  {
    id: nanoid(),
    socialName: "discord",
    href: "https://discordapp.com/users/383866910153900032",
    icon: <FaDiscord />,
    color: "	#5865F2",
  },
  {
    id: nanoid(),
    socialName: "website",
    href: "https://raffy-ramos-port.netlify.app",
    icon: <FaLink />,
    color: "teal",
  },
];

export const footerText = "Let's have a coffee";

// https://discordapp.com/users/383866910153900032;
