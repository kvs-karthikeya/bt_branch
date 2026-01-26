"use client"

import { useState, useEffect } from "react"
import { Users, Calendar, Award, ChevronLeft, ChevronRight } from "lucide-react"
import DNAStrand from "@/components/dna-strand"
import AOS from "aos"
import "aos/dist/aos.css"

interface Member {
  id: string
  name: string
  role: string
  image: string
}

interface Event {
  id: string
  title: string
  date: string
  description: string
  attendees: number
  image: string
}

const clubMembers: Member[] = [
  { id: "1", name: "Arjun Sharma", role: "President", image: "/male-student.jpg" },
  { id: "2", name: "Priya Patel", role: "Vice President", image: "/female-student.jpg" },
  { id: "3", name: "Rohan Singh", role: "Treasurer", image: "/male-student.jpg" },
  { id: "4", name: "Anjali Verma", role: "Secretary", image: "/female-student.jpg" },
  { id: "5", name: "Vikram Kumar", role: "Event Coordinator", image: "/male-student.jpg" },
  { id: "6", name: "Neha Gupta", role: "Event Coordinator", image: "/female-student.jpg" },
]

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Tech Fest 2025",
    date: "2025-11-15",
    description: "Annual technology festival featuring competitions, workshops, and networking opportunities.",
    attendees: 500,
    image: "/tech-conference.jpg",
  },
  {
    id: "2",
    title: "Hackathon Challenge",
    date: "2025-11-22",
    description: "24-hour hackathon with exciting prizes and mentorship from industry experts.",
    attendees: 200,
    image: "/hackathon-event.png",
  },
  {
    id: "3",
    title: "Web Development Workshop",
    date: "2025-12-01",
    description: "Learn modern web development frameworks and best practices from experienced developers.",
    attendees: 150,
    image: "/web-development.jpg",
  },
  {
    id: "4",
    title: "AI & ML Bootcamp",
    date: "2025-12-10",
    description: "Intensive bootcamp on artificial intelligence and machine learning applications.",
    attendees: 180,
    image: "/ai-conference.jpg",
  },
  {
    id: "5",
    title: "Cloud Computing Summit",
    date: "2025-12-20",
    description: "Explore cloud technologies and best practices with industry leaders.",
    attendees: 220,
    image: "/cloud-computing.jpg",
  },
]

const pastEvents: Event[] = [
  {
    id: "1",
    title: "AI & Machine Learning Seminar",
    date: "2025-09-20",
    description: "Comprehensive seminar on AI and ML applications in real-world scenarios.",
    attendees: 300,
    image: "/ai-conference.jpg",
  },
  {
    id: "2",
    title: "Cloud Computing Workshop",
    date: "2025-08-15",
    description: "Hands-on workshop covering AWS, Azure, and Google Cloud platforms.",
    attendees: 250,
    image: "/cloud-computing.jpg",
  },
  {
    id: "3",
    title: "Cybersecurity Awareness",
    date: "2025-07-10",
    description: "Educational session on cybersecurity best practices and threat prevention.",
    attendees: 200,
    image: "/cybersecurity-network.png",
  },
]

export default function BOLTPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const allEventImages = [...upcomingEvents, ...pastEvents]

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % allEventImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [allEventImages.length])

  return (
    <div className="min-h-screen bg-background relative">
      <DNAStrand />

      {/* Hero Section */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1
            className="text-5xl sm:text-7xl font-extralight tracking-tighter text-foreground mb-6"
            data-aos="fade-up"
          >
            BOLT <span className="text-primary italic">CLUB</span>
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            A departmental student initiative promoting technical competence, innovation, and collaborative engagement
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Event Gallery */}
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-extralight tracking-tight text-foreground mb-10">Event Gallery</h2>
          <div className="relative bg-white border border-border rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5">
            <div className="relative h-[600px] bg-secondary flex items-center justify-center">
              <img
                src={allEventImages[currentSlideIndex].image || "/placeholder.svg"}
                alt={allEventImages[currentSlideIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-4xl font-light text-foreground mb-4">
                  {allEventImages[currentSlideIndex].title}
                </h3>
                <p className="text-foreground/60 text-lg max-w-2xl font-light">
                  {allEventImages[currentSlideIndex].description}
                </p>
              </div>
            </div>

            {/* Slideshow Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
              <button
                onClick={() =>
                  setCurrentSlideIndex((prev) => (prev - 1 + allEventImages.length) % allEventImages.length)
                }
                className="pointer-events-auto p-4 rounded-full bg-white/90 hover:bg-primary text-foreground hover:text-white shadow-xl transition-all hover:scale-110 border border-border/50"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % allEventImages.length)}
                className="pointer-events-auto p-4 rounded-full bg-white/90 hover:bg-primary text-foreground hover:text-white shadow-xl transition-all hover:scale-110 border border-border/50"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {allEventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlideIndex ? "bg-primary w-10" : "bg-white/60 w-2 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Club Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div data-aos="zoom-in" className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-2">150+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-2">25+</div>
            <div className="text-muted-foreground">Events Annually</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-2">15+</div>
            <div className="text-muted-foreground">Awards Won</div>
          </div>
        </div>

        {/* Club Leadership */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-10" data-aos="fade-up">
            Club Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubMembers.map((member, index) => (
              <div
                key={member.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-4xl font-bold text-foreground mb-10" data-aos="fade-up">
            Events
          </h2>

          {/* Tab Navigation */}
          <div className="flex gap-6 mb-10 border-b border-border" data-aos="fade-up">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-4 font-semibold border-b-2 transition-all ${
                activeTab === "upcoming"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-4 font-semibold border-b-2 transition-all ${
                activeTab === "past"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "upcoming" ? upcomingEvents : pastEvents).map((event, index) => (
              <div
                key={event.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="h-52 bg-secondary flex items-center justify-center overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={16} />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Users size={16} />
                      {event.attendees} attendees
                    </span>
                    <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
