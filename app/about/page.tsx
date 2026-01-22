"use client"

import { useEffect } from "react"
import { Target, Award, Users, Mail, Phone, MapPin } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* High-tech Header */}
      <section className="relative py-32 border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1
              data-aos="fade-up"
              className="text-6xl sm:text-8xl font-extralight tracking-tighter text-foreground leading-none"
            >
              ABOUT <br />
              <span className="text-primary italic">US</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-muted-foreground font-light leading-relaxed"
            >
              We are defining the intersection of academic excellence and digital innovation. Our mission is to create a
              seamless interface for the modern student.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div data-aos="fade-up" className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Mission</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Empowering students through advanced digital infrastructure and transparent access to institutional
              knowledge.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Vision</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              To be the benchmark for university department interfaces, merging aesthetics with high-performance
              utility.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-6">
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

      <section className="py-24 sm:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-light tracking-tight text-foreground mb-20">
            Message from Leadership
          </h2>

          {/* HOD Message */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl font-light text-foreground">Head of Department</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                "Education is not about filling minds with information, but igniting them with possibilities. At our
                department, we believe in fostering excellence through innovation, collaboration, and a deep commitment
                to student success. Our students are not just learners; they are pioneers shaping the future of
                technology and academia."
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                "I am proud of what we have built here—a community where curiosity meets rigor, where challenges become
                opportunities, and where every student finds their path to greatness."
              </p>
              <p className="text-primary font-medium">Dr. [HOD Name]</p>
            </div>
            <div data-aos="fade-left" className="order-1 lg:order-2 flex justify-center">
              <div className="w-64 h-80 rounded-2xl bg-secondary border border-border overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Head of Department"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Deputy HOD Message */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="flex justify-center">
              <div className="w-64 h-80 rounded-2xl bg-secondary border border-border overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
                  alt="Deputy Head of Department"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="space-y-6">
              <h3 className="text-2xl font-light text-foreground">Deputy Head of Department</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                "The strength of our department lies not in individual brilliance, but in our collective dedication to
                nurturing talent. Every student who walks through our doors has the potential to change the world, and
                our role is to provide them with the tools, mentorship, and inspiration they need."
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                "I witness daily the transformative power of education, and I am honored to be part of this journey with
                our students and faculty."
              </p>
              <p className="text-primary font-medium">Prof. [Deputy HOD Name]</p>
            </div>
          </div>
        </div>
      </section>
      
            {/* RECRUITERS */}
      <section className="relative bg-background py-32 border-y border-border overflow-hidden" id="recruiters-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">Our Recruiters</h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div
            className="relative max-w-4xl mx-auto h-48 flex items-center justify-center bg-secondary/20 rounded-3xl border border-border"
            data-aos="fade-up"
          >
            <div className="flex transition-all duration-700 ease-in-out">
              <img
                src={recruiters[recruiterIndex].logo || "/placeholder.svg"}
                alt={recruiters[recruiterIndex].name}
                className="h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>

            <button
              data-aos="fade-up"
              onClick={() => setRecruiterIndex((prev) => (prev - 1 + recruiters.length) % recruiters.length)}
              className="absolute left-4 p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              data-aos="fade-up"
              onClick={() => setRecruiterIndex((prev) => (prev + 1) % recruiters.length)}
              className="absolute right-4 p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div data-aos="fade-up" className="space-y-8">
              <h2 className="text-4xl font-light tracking-tight text-foreground">
                Connect with the <br />
                Department
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Our doors are always open for academic inquiries, collaborations, and student support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div data-aos="fade-up" className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Mail size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Email</span>
                </div>
                <p className="text-foreground font-light">info@university-branch.edu</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Phone</span>
                </div>
                <p className="text-foreground font-light">+1 (555) 0123 4567</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="space-y-4 sm:col-span-2">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Location</span>
                </div>
                <p className="text-foreground font-light">KL University, Green fields, Vaddeswaram, Andhra Pradesh, India, 522501</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
