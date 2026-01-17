import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientRoot from "@/components/client-root"

const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "University Branch - Excellence in Education",
  description: "Professional college branch website with resources, faculty details, announcements, and more",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      </head>
      <body className="font-sans antialiased">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  )
}
