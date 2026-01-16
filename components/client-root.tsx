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

function AOSInitializer() {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos")
      AOS.init({
        duration: 600,
        easing: "ease-out",
        once: true,
        offset: 100,
      })
    }
    loadAOS()
  }, [])

  return null
}

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <AOSInitializer />
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
