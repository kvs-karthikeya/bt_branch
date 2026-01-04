"use client"

import { Target, Award, Users, Mail, Phone, MapPin, Code } from "lucide-react"
import DNAStrand from "@/components/dna-strand"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <DNAStrand />
      {/* High-tech Header */}
      <section className="relative py-32 border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-6xl sm:text-8xl font-extralight tracking-tighter text-foreground leading-none">
              ABOUT <br />
              <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We are defining the intersection of academic excellence and digital innovation. Our mission is to create a
              seamless interface for the modern student.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Mission</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Empowering students through advanced digital infrastructure and transparent access to institutional
              knowledge.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Vision</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              To be the benchmark for university department interfaces, merging aesthetics with high-performance
              utility.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Community</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Built for students, by students. A collaborative ecosystem fostering growth and technical maturity.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24 sm:py-32 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl sm:text-6xl font-light text-foreground tracking-tight">The Core Team</h2>
            <p className="text-muted-foreground font-light">The architects behind the University Branch platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative bg-background border border-border rounded-2xl p-8 hover:border-primary transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Code size={32} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Developer {i}</h3>
                    <p className="text-sm text-primary">Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-light tracking-tight text-foreground">
                Connect with the <br />
                Department
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Our doors are always open for academic inquiries, collaborations, and student support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Mail size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Email</span>
                </div>
                <p className="text-foreground font-light">info@university-branch.edu</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Phone</span>
                </div>
                <p className="text-foreground font-light">+1 (555) 0123 4567</p>
              </div>
              <div className="space-y-4 sm:col-span-2">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Location</span>
                </div>
                <p className="text-foreground font-light">Suite 404, Academic Block A, University Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
