"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-screen">{children}</main>
      {pathname !== "/about" && <Footer />}
    </>
  )
}
