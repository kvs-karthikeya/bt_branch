"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Resources", href: "/resources" },
    { label: "BOLT Club", href: "/bolt" },
    { label: "Alumni", href: "/alumni" },
    { label: "Community", href: "/community" },
    { label: "Smart Select", href: "https://your-smart-select-link.com", external: true },
    { label: "Gallery", href: "/gallery" }, // Added Gallery link
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-5">
            <Image
              src="/btec.jpeg"
              alt="Logo"
              className="h-8 w-auto object-contain grayscale opacity-90 hover:opacity-100 transition"
              width={0}
              height={0}
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isLinkActive = isActive(item.href)
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-all duration-300 relative group text-foreground hover:text-primary"
                >
                  {item.label}
                  <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-all duration-300 relative group ${
                    isLinkActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary transition-transform duration-300 origin-left ${
                      isLinkActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></div>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-1 bg-background border-t border-border">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-bold tracking-widest uppercase text-foreground hover:bg-secondary hover:text-primary transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-bold tracking-widest uppercase transition-all ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5 border-l-4 border-primary"
                      : "text-foreground hover:bg-secondary hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
