"use client"

import { useEffect, useState } from "react"
import { Target, Award, Users, Mail, Phone, MapPin, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutPage() {
  const [recruiterIndex, setRecruiterIndex] = useState(0)

  const recruiters = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "Microsoft", logo: "/microsoft-logo.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "Meta", logo: "/meta-logo-abstract.png" },
  ]
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRecruiterIndex((prev) => (prev + 1) % recruiters.length)
    }, 4000)
    return () => clearInterval(interval)
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
      
      {/* About the Department */}
      <section className="py-24 sm:py-32 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-light tracking-tight text-foreground">
            About the Department
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" data-aos="fade-up"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-muted-foreground font-light leading-relaxed"
          >
            Established in 2002, the Department of Biotechnology was strategically envisioned to advance the seamless
            convergence of life sciences, engineering principles, and emerging technological frameworks. It stands as 
            the first Biotechnology department in South India to secure accreditation from the National Board of Accreditation 
            (NBA) and continues to be strengthened through support from the DST–FIST initiative for advanced research infrastructure.
The department is distinguished by a fully doctorate-qualified faculty drawn from premier national institutions including IISc, IITs,
            and NITs, possessing interdisciplinary expertise across plant sciences, fermentation engineering, cancer and neurobiology, 
            biomaterials, and in silico drug discovery. Faculty-driven research, sustained by competitive funding from leading national 
            and international agencies such as DBT, DST, UGC, MSME, and ICMR, has mobilized grants exceeding ₹34 crores and yielded high-impact 
            scholarly publications with translational relevance. An extensive ecosystem of state-of-the-art academic and research laboratories, 
            augmented by innovation and incubation centers, houses sophisticated analytical instrumentation and high-performance computing capabilities
            that catalyze scientific inquiry and entrepreneurial advancement. The department delivers outcome-based, flexible academic pathways
            reinforced by industry partnerships, international academic exposure, and globally networked instruction, thereby producing graduates 
            equipped for leadership in core biotechnology domains and technology-intensive interdisciplinary careers.

          </p>
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
              To cultivate a rigorous academic and research ecosystem that advances innovative scholarship, 
              professional mastery, and ethical stewardship in biological engineering and related scientific disciplines.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Vision</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              To achieve international distinction in advancing excellence in education, frontier research, 
              and extension across emerging domains of biological engineering and allied interdisciplinary sciences.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-light text-foreground">Community</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              A student-anchored academic community fostering collaborative learning, intellectual engagement,
              and progressive technical maturity through collective academic endeavor.
            </p>
          </div>
        </div>
      </section>

      {/* About the Website */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-light tracking-tight text-foreground">
            About the Website
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" data-aos="fade-up"></div>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto"
          >
            This platform serves as a centralized digital hub for students, faculty, and alumni. It provides access to
            academic resources, departmental updates, student initiatives, and career opportunities, ensuring a seamless
            and modern academic experience.
          </p>
        </div>
      </section>
      
       {/* Message from Leadership */}
      <section className="py-24 sm:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-light tracking-tight text-foreground mb-20">
            Message from Leadership
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" data-aos="fade-up"></div>

          {/* HOD Message */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-6 order-2 lg:order-1">
              <h3 className="text-2xl font-light text-foreground">Head of Department</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                "Education, at its highest level, is an exercise in expanding intellectual possibility and shaping 
                purposeful inquiry. The Department of Biotechnology is built on the conviction that academic excellence emerges 
                from the integration of rigorous thought, innovative practice, and sustained engagement with emerging scientific 
                frontiers. This platform reflects our commitment to creating an environment where students are encouraged to 
                think independently, collaborate meaningfully, and pursue knowledge with depth and intent."
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                "What has been developed here is not merely an academic structure, but a space that supports aspiration, 
                nurtures curiosity, and enables students to evolve into contributors to science, technology, and society."
              </p>
              <p className="text-primary font-medium">Dr. Praveen Kumar Vemuri</p>
            </div>
            <div data-aos="fade-left" className="order-1 lg:order-2 flex justify-center">
              <div className="w-64 h-80 rounded-2xl bg-secondary border border-border overflow-hidden shadow-lg">
                <img
                  src="/about/dr-praveen-kumar.jpeg"
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
                "The strength of an academic ecosystem lies in how effectively it enables access, 
                continuity, and informed academic decision-making. This website has been conceived as a structured 
                interface between students and the department’s academic, research, and collaborative dimensions. 
                It is intended to support clarity in learning pathways, promote engagement with academic resources, and 
                encourage informed participation in departmental activities."
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                "Students are expected to utilize this platform not passively, but as a tool to organize their academic journey, 
                align their efforts with evolving disciplinary demands, and progressively refine their professional direction."
              </p>
              <p className="text-primary font-medium">Dr. Chandrashekhar Chanda</p>
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
                <p className="text-foreground font-light">deptbiotechklu@gmail.com</p>
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
