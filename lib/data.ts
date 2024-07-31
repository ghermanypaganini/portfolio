import React from "react";
import { FaUserClock } from "react-icons/fa"; //react-icons/cg
import { FaHotel } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import screentab from "@/public/screenshot-tabnews.png";
import portfolio from "@/public/screenshot-portfolio.png";
import n8n from "@/public/workflow.png";

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
    title: "clone-tabnews",
    description:
      "The implementation of a forum project, aimed at development studies, inspired by Tabnews.com.br.",
    tags: ["Javascript", "PostgreSQL", "Tailwind", "Vercel hosting"],
    imageUrl: screentab,
  },
  {
    title: "this portfolio",
    description:
      "Portfolio web page using modern dev frameworks. Code is available on GitHub.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Open Source"],
    imageUrl: portfolio,
  },
  {
    title: "automation",
    description: "Automate your workflows and integrate systems.",
    tags: [
      "Worflows",
      "Integrations",
      "Webhooks",
      "Automation",
      "Tasks",
      "n8n",
    ],
    imageUrl: n8n,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Linux",
  "Hosting",
  "N8N",
  "Wordpress",
  "Ghost",
  "Scrum",
  "PMS",
] as const;
