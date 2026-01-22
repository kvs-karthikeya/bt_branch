"use client"

import Link from "next/link"
import {
  BookOpen,
  Users,
  Users2,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  ImageIcon,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [recruiterIndex, setRecruiterIndex] = useState(0)
  const modulesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((err) => console.log("[v0] Video autoplay failed:", err))
    }
  }, [])

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const features = [
    {
      icon: BookOpen,
      title: "About Us",
      description: "Access study materials, lecture notes, and question papers organized by year and subject",
      href: "/about",
    },
    {
      icon: Users,
      title: "Faculty Directory",
      description: "Connect with faculty members, view their expertise, and find office hours",
      href: "/faculty",
    },
    {
      icon: Users2,
      title: "Resources",
      description: "Explore our vibrant student club with events, members, and activities",
      href: "/resources",
    },
    {
      icon: Users,
      title: "BOLT CLUB",
      description: "Connect with successful alumni and explore career opportunities",
      href: "/bolt",
    },
    {
      icon: ImageIcon,
      title: "Alumni",
      description: "Explore interactive visuals showcasing branch events, campus life, and achievements",
      href: "/alumni",
    },
    {
      icon: ImageIcon,
      title: "Community",
      description: "Explore us",
      href: "/community",
    },
    {
      icon: ImageIcon,
      title: "Smart Select",
      description: "Explore",
      href: "https://mostly-final-hzxh.vercel.app/",
    },
    {
      icon: ImageIcon,
      title: "Gallery",
      description: "Explore us",
      href: "/gallery",
    },
  ]

  const departmentSocials = [
    { icon: Instagram, href: "https://www.instagram.com/kl_zenbiotech", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/biotechnology-department-600111221", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Globe, href: "https://www.kluniversity.in/bt/", label: "Website" },
  ]

  return (
    <div className="space-y-0 bg-background">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" data-aos="fade-up">
          <video
            ref={videoRef}
            src="/klu.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-6" data-aos="fade-up">
            <h1
              className="text-7xl sm:text-8xl lg:text-9xl font-extralight tracking-tighter text-foreground leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              Department Of
              <br />
              <span className="text-primary font-light">BIOTECHNOLOGY</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-[0.2em] uppercase">
              The Future of Learning
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8" data-aos="fade-up">
            <button
              onClick={scrollToModules}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-500 transform hover:-translate-y-1"
            >
              EXPLORE PLATFORM
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          data-aos="fade-up"
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
        </div>
      </section>

      {/* MODULES */}
      <section className="relative bg-background py-32 sm:py-48 border-y border-border" ref={modulesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" data-aos="fade-up">
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
                  <div
                    data-aos="fade-up"
                    className="relative h-full bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                  >
                    <div className="relative z-10 flex flex-col h-full space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {feature.description}
                        </p>
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

      {/* SOCIALS */}
      <section className="relative bg-background py-32 border-b border-border" id="socials-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">Follow Department</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed" data-aos="fade-up">
            Stay synced with our latest research, events, and academic updates across all platforms.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {departmentSocials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  className="p-4 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
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
