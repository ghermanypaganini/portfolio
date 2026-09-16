"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c👋 Curioso(a) o suficiente pra abrir o DevTools?\n%cGostei disso. Bora conversar: ghermanypaganini@atractor.com.br",
      "color:#7c3aed;font-size:16px;font-weight:bold;",
      "color:#6b7280;font-size:13px;"
    );
  }, []);

  return null;
}
