"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import {
  FaGithub,
  FaGithubAlt,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/bitmap-fundo.jpg"
              alt="Ghermany portrait"
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />{" "}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {" "}
            🌎{" "}
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-5 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey 🤙, Welcome! I'm Ghermany.</span>{" "}
        <span className="font-bold"></span>
        <span className="underline"></span>
      </motion.h1>
      <motion.h1
        className="mb-8 mt-4 px-4 text-1xl sm:text-2xl !leading-[1.5] scroll-mt-28" //className="mb-8 mt-4 px-4 text-4xl !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100, scale: 1 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        <span>This is my sleek "CV", or almost that. </span>
        {/* I can develop your site or web application, help your team design and support IT architecture or find the ideal tech solution for your company. */}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" //
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="http://ghermanypaganini.medium.com/"
        >
          Blog{" "}
          <HiBookOpen className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/*  
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        */}

        <a
          className="bg-white p-5 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ghermanypaganini/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-115 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ghermanypaganini"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://instagram.com/ghermanypaganini"
          target="_blank"
        >
          <FaInstagram />
        </a>

        <a
          className="bg-white p-5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://t.me/ghermanypaganini"
          target="_blank"
        >
          <FaTelegramPlane />
        </a>
      </motion.div>

      <motion.h1
        className="mb-5 mt-4 px-4 font-medium sm:text-1.5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">📍 🇧🇷 </span>{" "}
      </motion.h1>
    </section>
  );
}
