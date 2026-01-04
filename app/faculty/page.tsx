"use client"

import { useState, useMemo } from "react"
import { Search, Mail, Phone, Clock, Linkedin } from "lucide-react"
import DNAStrand from "@/components/dna-strand"

interface Faculty {
  id: string
  name: string
  designation: string
  department: string
  subjects: string[]
  batch: string
  email: string
  phone: string
  officeNumber: string
  availableHours: string
  image: string
  linkedinUrl?: string
}

const mockFaculty: Faculty[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    designation: "Professor",
    department: "Computer Science",
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    batch: "2015",
    email: "rajesh.kumar@university.edu",
    phone: "+1 (555) 123-4567",
    officeNumber: "CS-301",
    availableHours: "Mon-Fri: 2-4 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/rajesh-kumar",
  },
  {
    id: "2",
    name: "Prof. Priya Sharma",
    designation: "Associate Professor",
    department: "Computer Science",
    subjects: ["Web Development", "Cloud Computing", "DevOps"],
    batch: "2018",
    email: "priya.sharma@university.edu",
    phone: "+1 (555) 234-5678",
    officeNumber: "CS-302",
    availableHours: "Tue-Thu: 3-5 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/priya-sharma",
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    designation: "Assistant Professor",
    department: "Mathematics",
    subjects: ["Calculus", "Linear Algebra", "Discrete Mathematics"],
    batch: "2020",
    email: "amit.patel@university.edu",
    phone: "+1 (555) 345-6789",
    officeNumber: "MATH-201",
    availableHours: "Mon-Wed: 1-3 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/amit-patel",
  },
  {
    id: "4",
    name: "Prof. Neha Gupta",
    designation: "Associate Professor",
    department: "Physics",
    subjects: ["Quantum Mechanics", "Thermodynamics", "Optics"],
    batch: "2017",
    email: "neha.gupta@university.edu",
    phone: "+1 (555) 456-7890",
    officeNumber: "PHYS-101",
    availableHours: "Wed-Fri: 2-4 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/neha-gupta",
  },
  {
    id: "5",
    name: "Dr. Vikram Singh",
    designation: "Professor",
    department: "Chemistry",
    subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
    batch: "2014",
    email: "vikram.singh@university.edu",
    phone: "+1 (555) 567-8901",
    officeNumber: "CHEM-401",
    availableHours: "Mon-Thu: 3-5 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/vikram-singh",
  },
  {
    id: "6",
    name: "Prof. Anjali Verma",
    designation: "Assistant Professor",
    department: "Computer Science",
    subjects: ["Machine Learning", "Artificial Intelligence", "Deep Learning"],
    batch: "2021",
    email: "anjali.verma@university.edu",
    phone: "+1 (555) 678-9012",
    officeNumber: "CS-303",
    availableHours: "Tue-Thu: 1-3 PM",
    image: "/diverse-professor-lecturing.png",
    linkedinUrl: "https://linkedin.com/in/anjali-verma",
  },
]

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaculty = useMemo(() => {
    return mockFaculty.filter((faculty) => {
      const matchesSearch =
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        faculty.designation.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSearch
    })
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background relative">
      <DNAStrand />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Faculty Directory</h1>
          <p className="text-muted-foreground">
            Connect with our experienced faculty members and find their office hours
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by name, subject, or designation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{faculty.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{faculty.designation}</p>

                <div className="space-y-3 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Department</p>
                    <p className="text-foreground font-medium">{faculty.department}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground">Subjects</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {faculty.subjects.map((subject, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary text-foreground text-xs rounded">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground">Office</p>
                    <p className="text-foreground font-medium">{faculty.officeNumber}</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    <span>{faculty.availableHours}</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-shadow font-medium text-sm"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${faculty.phone}`}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                    {faculty.linkedinUrl && (
                      <a
                        href={faculty.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No faculty members found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
