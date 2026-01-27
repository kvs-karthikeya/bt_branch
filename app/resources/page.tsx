"use client"

import { BookOpen, Headphones, Calendar, ArrowUpRight } from "lucide-react"
import DNAStrand from "@/components/dna-strand"

export default function ResourcesPage() {
  const years = [
    { label: "1st Year", link: "https://www.notion.so/2f5bf827fb0b80529d85f15756907c7f" },
    { label: "2nd Year", link: "https://your-2nd-year-link.com" },
    { label: "3rd Year", link: "https://www.notion.so/2f5bf827fb0b80f8b290c3fb266dbb79" },
    { label: "4th Year", link: "https://your-4th-year-link.com" },
  ]
  const timetables = [
  { label: "1st Year", link: "https://your-1st-year-timetable-link.com" },
  { label: "2nd Year", link: "https://www.notion.so/2nd-YEAR-TIMETABLE-2e84d94886d980f08610f94b3c884393" },
  { label: "3rd Year", link: "https://your-3rd-year-timetable-link.com" },
  { label: "4th Year", link: "https://your-4th-year-timetable-link.com" },
]

  const SubsectionHeader = ({ icon: Icon, title, description }: any) => (
    <div className="flex items-center gap-4 mb-10" data-aos="fade-up">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl font-light tracking-tight text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mt-1">{description}</p>
      </div>
    </div>
  )

  const YearGrid = ({ items, buttonLabel = "Explore" }: any) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((year: any, index: number) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 150}
          className="group relative bg-secondary/30 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <h3 className="text-4xl font-extralight text-foreground/80 group-hover:text-primary transition-colors">
              {year.label}
            </h3>
            <a
              href={year.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary text-xs font-bold uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {buttonLabel} <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-background relative">
      <DNAStrand />

      <div className="relative py-24 border-b border-border bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-extralight tracking-tighter text-foreground mb-6" data-aos="fade-up">
            Academic <span className="text-primary font-light italic">Repository</span>
          </h1>
          <p className="text-muted-foreground uppercase tracking-[0.3em] font-bold text-xs" data-aos="fade-up" data-aos-delay="200">
            An organized framework for accessing and contextualizing academic resources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        <section>
          <SubsectionHeader
            icon={BookOpen}
            title="Lecture Notes"
            description="Comprehensive course materials and study guides"
          />
          <YearGrid items={years} />
        </section>

        <section className="bg-secondary/20 border border-border rounded-3xl p-12 text-center space-y-8" data-aos="fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <Headphones size={32} strokeWidth={1.5} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-light tracking-tight text-foreground">Audio Podcasts</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Deep dives into complex topics and academic discussions to enhance your learning.
            </p>
          </div>
          <a
            href="https://www.notion.so/Podcasts-2e84d94886d9804fbfbac746ccdb3efd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:shadow-lg transition-all"
          >
            Explore Library <ArrowUpRight size={18} />
          </a>
        </section>

        <section>
          <SubsectionHeader
            icon={Calendar}
            title="Academic Time Table"
            description="Stay aligned with course progression"
          />
          <YearGrid items={timetables} buttonLabel="View Schedule" />
        </section>
      </div>
    </div>
  )
}
