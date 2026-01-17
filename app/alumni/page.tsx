"use client"

import { useState, useEffect } from "react"
import { Search, Briefcase, MapPin, Mail, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import DNAStrand from "@/components/dna-strand"
import AOS from "aos"
import "aos/dist/aos.css"

interface AlumniMember {
  id: string
  name: string
  batch: string
  company: string
  position: string
  location: string
  email: string
  phone: string
  image: string
  linkedIn?: string
}

const mockAlumni: AlumniMember[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    batch: "2020",
    company: "Google",
    position: "Senior Software Engineer",
    location: "Bangalore, India",
    email: "rajesh.kumar@google.com",
    phone: "+91-9876543210",
    image: "/male-student.jpg",
    linkedIn: "linkedin.com/in/rajesh-kumar",
  },
  {
    id: "2",
    name: "Priya Sharma",
    batch: "2021",
    company: "Microsoft",
    position: "Product Manager",
    location: "Hyderabad, India",
    email: "priya.sharma@microsoft.com",
    phone: "+91-9876543211",
    image: "/female-student.jpg",
    linkedIn: "linkedin.com/in/priya-sharma",
  },
  {
    id: "3",
    name: "Vikram Singh",
    batch: "2019",
    company: "Amazon",
    position: "Data Scientist",
    location: "Pune, India",
    email: "vikram.singh@amazon.com",
    phone: "+91-9876543212",
    image: "/male-student.jpg",
    linkedIn: "linkedin.com/in/vikram-singh",
  },
  {
    id: "4",
    name: "Anjali Verma",
    batch: "2020",
    company: "Startup Founder",
    position: "CEO",
    location: "Mumbai, India",
    email: "anjali@startup.com",
    phone: "+91-9876543213",
    image: "/female-student.jpg",
    linkedIn: "linkedin.com/in/anjali-verma",
  },
  {
    id: "5",
    name: "Amit Patel",
    batch: "2018",
    company: "IBM",
    position: "Cloud Architect",
    location: "Delhi, India",
    email: "amit.patel@ibm.com",
    phone: "+91-9876543214",
    image: "/male-student.jpg",
    linkedIn: "linkedin.com/in/amit-patel",
  },
  {
    id: "6",
    name: "Neha Gupta",
    batch: "2021",
    company: "Accenture",
    position: "Consultant",
    location: "Bangalore, India",
    email: "neha.gupta@accenture.com",
    phone: "+91-9876543215",
    image: "/female-student.jpg",
    linkedIn: "linkedin.com/in/neha-gupta",
  },
]

const testimonials = [
  {
    text: "My time at the university prepared me for the global tech landscape.",
    author: "Rajesh Kumar",
    role: "Google",
  },
  { text: "The community here is supportive and highly innovative.", author: "Priya Sharma", role: "Microsoft" },
  { text: "Excellent infrastructure and faculty mentorship.", author: "Vikram Singh", role: "Amazon" },
]

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBatch, setSelectedBatch] = useState<string>("all")
  const [alumni] = useState<AlumniMember[]>(mockAlumni)
  const [testimonyIndex, setTestimonyIndex] = useState(0)

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 900,
      easing: "ease-out-cubic",
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonyIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const batches = [
    "all",
    ...Array.from(new Set(alumni.map((a) => a.batch)))
      .sort()
      .reverse(),
  ]

  const filteredAlumni = alumni.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.position.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesBatch = selectedBatch === "all" || member.batch === selectedBatch

    return matchesSearch && matchesBatch
  })

  return (
    <div className="min-h-screen bg-background relative">
      <DNAStrand />

      {/* Header */}
<section className="relative py-32 border-b border-border overflow-hidden">
  <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-3xl space-y-6">
      <h1
        data-aos="fade-up"
        className="text-6xl sm:text-8xl font-extralight tracking-tighter text-foreground leading-none"
      >
        ALUMNI <br />
        <span className="text-primary">NETWORK</span>
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-xl text-muted-foreground font-light leading-relaxed"
      >
        Connect with our successful alumni and explore career opportunities.
      </p>
    </div>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Testimonials Slideshow */}
        <div
          className="mb-16 relative bg-secondary/30 border border-border rounded-2xl p-10 text-center overflow-hidden"
          data-aos="fade-up"
        >
          <div className="relative z-10 transition-all duration-700">
            <p className="text-2xl font-light italic text-foreground leading-relaxed mb-6">
              "{testimonials[testimonyIndex].text}"
            </p>
            <div className="space-y-1">
              <p className="font-bold text-primary">{testimonials[testimonyIndex].author}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                {testimonials[testimonyIndex].role}
              </p>
            </div>
          </div>

          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={() => setTestimonyIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={() => setTestimonyIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-aos="fade-up">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by name, company, or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-primary rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch === "all" ? "All Batches" : `Batch ${batch}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-card border-2 border-primary rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">Batch {member.batch}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Briefcase size={16} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.position}</p>
                      <p className="text-xs text-muted-foreground">{member.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    {member.location}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-shadow text-sm font-medium"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  {member.linkedIn &&(
                <a
                  href={
                    member.linkedIn.startsWith("http")
                    ? member.linkedIn
                    : `https://${member.linkedIn}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium"
                  >
                <Linkedin size={16} />
                  LinkedIn
                </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-muted-foreground text-lg">No alumni found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
