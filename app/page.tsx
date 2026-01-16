"use client"

import Link from "next/link"
import {
  BookOpen,
  Users,
  Users2,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
// import DNAStrand from "@/components/dna-strand"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [recruiterIndex, setRecruiterIndex] = useState(0)
  const modulesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const recruiters = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "Meta", logo: "/meta-logo-abstract.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRecruiterIndex((prev) => (prev + 1) % recruiters.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const features = [
    {
      icon: BookOpen,
      title: "Resources",
      description: "Access study materials, lecture notes, and question papers organized by year and subject",
      href: "/resources",
    },
    {
      icon: Users,
      title: "Faculty Directory",
      description: "Connect with faculty members, view their expertise, and find office hours",
      href: "/faculty",
    },
    {
      icon: Users2,
      title: "BOLT Club",
      description: "Explore our vibrant student club with events, members, and activities",
      href: "/bolt",
    },
    {
      icon: Users,
      title: "Alumni Network",
      description: "Connect with successful alumni and explore career opportunities",
      href: "/alumni",
    },
    {
      icon: ImageIcon,
      title: "Photo Gallery",
      description: "Explore interactive visuals showcasing branch events, campus life, and achievements",
      href: "/gallery",
    },
    {
      icon: ImageIcon,
      title: "About Us",
      description: "Explore us",
      href: "/about",
    },
  ]

  const departmentSocials = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Globe, href: "https://department.university.edu", label: "Website" },
  ]

  return (
    <div className="space-y-0">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <video
           src="/klu.mp4"
           autoPlay
           loop
           muted
           playsInline
           preload="auto"
           className="absolute inset-0 w-full h-full object-cover"
           >
         </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-6">
            <h1
              className="text-7xl sm:text-8xl lg:text-9xl font-extralight tracking-tighter text-foreground leading-none animate-fade-in-up"
              style={{ letterSpacing: "-0.04em" }}
            >
              Department Of<br />
              <span className="text-primary font-light">BIOTECHNOLOGY</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-[0.2em] uppercase">
              The Future of Learning
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={scrollToModules}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-500 transform hover:-translate-y-1"
            >
              EXPLORE PLATFORM
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
        </div>
      </section>

      <section className="relative bg-background py-32 sm:py-48 border-y border-border" ref={modulesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-foreground leading-tight">
                Academic <span className="text-primary italic">Intelligence</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                High-performance academic tools designed for the next generation of students.
              </p>
            </div>
            <div className="h-px flex-1 bg-border mb-4 hidden md:block ml-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} href={feature.href} className="group">
                  <div className="relative h-full bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-10 hover:border-primary/50 transition-all duration-500">
                    <div className="relative z-10 flex flex-col h-full space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
                      </div>
                      <div className="pt-6 border-t border-border flex items-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground group-hover:text-primary group-hover:gap-4 transition-all duration-300">
                        Access Module <span className="text-primary ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-background py-32 border-b border-border overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">Our Recruiters</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto h-48 flex items-center justify-center bg-secondary/20 rounded-3xl border border-border">
            <div className="flex transition-all duration-700 ease-in-out">
              <img
                src={recruiters[recruiterIndex].logo || "/placeholder.svg"}
                alt={recruiters[recruiterIndex].name}
                className="h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>

            <button
              onClick={() => setRecruiterIndex((prev) => (prev - 1 + recruiters.length) % recruiters.length)}
              className="absolute left-4 p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setRecruiterIndex((prev) => (prev + 1) % recruiters.length)}
              className="absolute right-4 p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-background py-32 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">Follow Department</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Stay synced with our latest research, events, and academic updates across all platforms.
          </p>

          <div className="flex justify-center items-center gap-8">
            {departmentSocials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500 group"
                  title={social.label}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
