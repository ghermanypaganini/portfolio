import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "freelancer and backpacker",
    location: "based in world",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
  {
    title: "Jurerê In. Habitasul",
    location: "Remote | Floripa, SC",
    description: "systems support",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Irani SA",
    location: "Joaçaba, SC",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2017 - 2021",
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
