"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm Ghermany Paganini, Brazilian from the state of Santa Catarina. I'm
        an enthusiast of science and tech, sports fan, a curious about history,
        stories and cultures.{" "}
      </p>
      <p>
        I graduated in Computer Engineering and have been working in the IT
        field for 7 years. Additionally, I have extensive experience in
        hospitality.{" "}
      </p>
      <p>
        {" "}
        Currently, I'm studying web development, automation, cloud computing,
        security and micro-SaaS business.
      </p>
      <p>
        <span className="font-medium">
          {" "}
          Nowadays, I'm a backpacker traveling the world doing exchanges,
          learning new skills, sharing experiences, getting to know cultures,
          places and people! Discovering, every day, new ways of 'trying' to
          interpret the world.
        </span>
        <span className="italic"></span>
      </p>
      <p></p>
      <span className="font-bold"> 🇧🇷 🇵🇹 🇲🇦 🇪🇸 🇫🇷 🇬🇧</span>{" "}
    </motion.section>
  );
}
