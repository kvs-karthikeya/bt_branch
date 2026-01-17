"use client"

import type React from "react"
import { useEffect } from "react"
import { MessageCircle, Users } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

interface CommunityGroup {
  id: string
  batch: string
  type: "students" | "official"
  description: string
  members: number
  whatsappLink: string
  icon: React.ReactNode
}

const communityGroups: CommunityGroup[] = [
  {
    id: "1",
    batch: "Y24",
    type: "students",
    description: "Connect with your batch mates, share notes, and collaborate on projects",
    members: 450,
    whatsappLink: "https://chat.whatsapp.com/y24students",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "2",
    batch: "Y24",
    type: "official",
    description: "Official announcements, academic updates, and important notices for Y24",
    members: 480,
    whatsappLink: "https://chat.whatsapp.com/y24official",
    icon: <MessageCircle className="w-8 h-8" />,
  },
  {
    id: "3",
    batch: "Y25",
    type: "students",
    description: "Connect with your batch mates, share notes, and collaborate on projects",
    members: 520,
    whatsappLink: "https://chat.whatsapp.com/y25students",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "4",
    batch: "Y25",
    type: "official",
    description: "Official announcements, academic updates, and important notices for Y25",
    members: 550,
    whatsappLink: "https://chat.whatsapp.com/y25official",
    icon: <MessageCircle className="w-8 h-8" />,
  },
]

export default function CommunityPage() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
<div className="bg-gradient-to-r from-primary/20 to-accent/20 border-b-2 border-primary">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 
      data-aos="fade-up"
      className="text-4xl font-light text-foreground mb-2 animate-fade-in-up">
      Community Groups
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="text-muted-foreground">
      Join your batch WhatsApp groups to stay connected with peers and receive official updates
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Y24 Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-foreground mb-8">Year 2024 (Y24)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityGroups
              .filter((g) => g.batch === "Y24")
              .map((group, index) => (
                <div
                  key={group.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-card border-2 border-primary rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">{group.icon}</div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary">
                      {group.type === "students" ? "Students" : "Official"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {group.batch} {group.type === "students" ? "Students" : "Official"}
                  </h3>
                  <p className="text-muted-foreground mb-4">{group.description}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Users size={16} />
                    {group.members} members
                  </div>

                  <a
                    href={group.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    <MessageCircle size={20} />
                    Join WhatsApp Group
                  </a>
                </div>
              ))}
          </div>
        </div>

        {/* Y25 Section */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-foreground mb-8">Year 2025 (Y25)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityGroups
              .filter((g) => g.batch === "Y25")
              .map((group, index) => (
                <div
                  key={group.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-card border-2 border-primary rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">{group.icon}</div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary">
                      {group.type === "students" ? "Students" : "Official"}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {group.batch} {group.type === "students" ? "Students" : "Official"}
                  </h3>
                  <p className="text-muted-foreground mb-4">{group.description}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Users size={16} />
                    {group.members} members
                  </div>

                  <a
                    href={group.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    <MessageCircle size={20} />
                    Join WhatsApp Group
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
