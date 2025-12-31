import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"

import "../globals.css";
import { div } from "motion/react-client";

const _geist = Geist({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emily & James Wedding",
  description: "Join us for our special day on June 15, 2025",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <div>
      <section className={`font-sans antialiased min-h-screen`}>
        {children}
       
      </section>
    </div>
  )
}
