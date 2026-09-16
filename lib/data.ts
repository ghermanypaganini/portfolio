import React from "react";
import { FaUserClock } from "react-icons/fa"; //react-icons/cg
import { FaHotel } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import anfitrion from "@/public/anfitrion.png";
import portfolio from "@/public/screenshot-portfolio.png";
import croworx from "@/public/croworx.png";
import hotel from "@/public/hotel.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Services and Consultant",
    location: "Websites, servers, troubleshooting, systems",
    description: "",
    icon: React.createElement(LuServer),
  },
  {
    title: "Automation tasks",
    location: "Remote",
    description: "Automate your business or personal tasks",
    icon: React.createElement(FaUserClock),
  },
  {
    title: "Hospitality",
    location: "Arroio Trinta, SC",
    description:
      "Hotel locate in Arroio Trinta, Santa Catarina, Brasil. Visit owr website on www.hotelsanghermann.com",
    icon: React.createElement(FaHotel),
  },
] as const;

export const projectsData = [
  {
    title: "Anfitrion Hub",
    description: "Management system for vacation rental hosts.",
    tags: ["Anfitrion", "Business", "Hospitality", "System"],
    imageUrl: anfitrion,
    url: "https://anfitrionhub.com.br",
  },
  {
    title: "Croworx",
    description: "AI Agents for automate workflows and integrate systems.",
    tags: ["AI", "Integrations", "Webhooks", "Automation"],
    imageUrl: croworx,
    url: "https://croworx.com.br",
  },
  {
    title: "Hotel San Ghermann",
    description: "Hotel locate in Arroio Trinta, Santa Catarina, Brasil",
    tags: ["Hospitality", "Hotel"],
    imageUrl: hotel,
    url: "https://www.hotelsanghermann.com",
  },
  {
    title: "This Portfolio - Open Source",
    description:
      "Portfolio web page using modern dev frameworks. Code is available on GitHub.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Open Source"],
    imageUrl: portfolio,
    url: "https://github.com/ghermanypaganini/portfolio",
  },
] as const;

export const skillsData = [
  "Automation",
  "AI Agents",
  "N8N",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Git",
  "PostgreSQL",
  "Supabase",
  "Python",
  "Linux",
  "AWS",
  "Google Cloud",
  "Google Workspace",
  "Vercel",
  "Railway",
  "DigitalOcean",
  "Scrum",
  "PMS",
  "CRM",
] as const;
