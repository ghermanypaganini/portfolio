import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ConsoleEasterEgg from "@/components/console-easter-egg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ghermany.me"),
  title: "Ghermany Paganini | Developer & IT Consultant",
  description:
    "Personal portfolio of Ghermany Paganini — software developer and IT consultant specializing in automation, AI agents, and web development.",
  keywords: [
    "Ghermany Paganini",
    "Developer",
    "IT Consultant",
    "Automation",
    "AI Agents",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "Ghermany Paganini" }],
  creator: "Ghermany Paganini",
  openGraph: {
    title: "Ghermany Paganini | Developer & IT Consultant",
    description:
      "Personal portfolio of Ghermany Paganini — software developer and IT consultant specializing in automation, AI agents, and web development.",
    url: "https://ghermany.me",
    siteName: "Ghermany Paganini",
    images: [
      {
        url: "/bitmap-fundo.jpg",
        width: 292,
        height: 292,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ghermany Paganini | Developer & IT Consultant",
    description:
      "Personal portfolio of Ghermany Paganini — software developer and IT consultant specializing in automation, AI agents, and web development.",
    images: ["/bitmap-fundo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<!--\n  A resposta é 42.\n  A pergunta certa era: você chegou até aqui? Me manda um e-mail: ghermanypaganini@atractor.com.br\n-->",
          }}
        />
        <div className="bg-[#d1f5d4] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        {/* 1a cor: fbe2e3 */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <ConsoleEasterEgg />
      </body>
    </html>
  );
}
