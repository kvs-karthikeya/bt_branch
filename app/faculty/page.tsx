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
    name: "Dr. Praveen Kumar Vemuri",
    designation: "Head Of the Department & Professor",
    subjects: ["Genetic Engineering", "Immunology"],
    batch: "Y23 & Y24",
    email: "vemuripraveen@kluniversity.in",
    phone: "9849629496",
    officeNumber: "C-516",
    availableHours: "Mon-Sat: 9:20AM - 5:30PM",
    image: "/faculty/hod-praveen-kumar-sir-vemuri.png.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/vemuri-praveen-kumar-2850a96b/",
  },
  {
    id: "2",
    name: "Prof. Chandrashekhar",
    designation: "deputy HOD",
    subjects: ["Cell Biology"],
    batch: "Y24",
    email: "vemuripraveen@kluniversity.in",
    phone: "9849629496",
    officeNumber: "C-516",
    availableHours: "Mon-Sat: 9:20AM - 5:30PM",
    image: "/faculty/hod-praveen-kumar-sir-vemuri.png.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/vemuri-praveen-kumar-2850a96b/",
  },
  {
    id: "3",
    name: "Dr. B V L S Prasad",
    designation: "Professor",
    subjects: ["Computational Biology"],
    batch: "Y24",
    email: "vemuripraveen@kluniversity.in",
    phone: "9849629496",
    officeNumber: "C-516",
    availableHours: "Mon-Sat: 9:20AM - 5:30PM",
    image: "/faculty/hod-praveen-kumar-sir-vemuri.png.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/vemuri-praveen-kumar-2850a96b/",
  },
  {
    id: "4",
    name: "Dr. Pinnamaneni Rajashekhar",
    designation: "Associate Professor",
    subjects: ["Microbiology", "Molecular Biology"],
    batch: "Y24",
    email: "anjali.verma@university.edu",
    phone: "+1 (555) 678-9012",
    officeNumber: "C-514",
    availableHours: "Tue-Thu: 1-3 PM",
    image: "/faculty/dr-rajashekar.jpeg",
    linkedinUrl: "https://linkedin.com/in/anjali-verma",
  },
  {
    id: "5",
    name: "",
    designation: "",
    subjects: [""],
    batch: "",
    email: "",
    phone: "",
    officeNumber: "",
    availableHours: "",
    image: "",
    linkedinUrl: "",
  },
  {
    id: "6",
    name: "Dr. Nadeem Siddiqui",
    designation: "Associate Professor",
    subjects: ["Biochemistry", "Tissue Engineering"],
    batch: "Y24 & Y22",
    email: "siddiqui@kluniversity.in",
    phone: "9381269914",
    officeNumber: "C-517",
    availableHours: "Mon-Sat: 10AM - 5PM",
    image: "/faculty/nadeem-siddiqui-sir.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dr-nadeem-siddiqui-229999aa/",
  },
  {
    id: "7",
    name: "Dr. Mohammed Arifullah",
    designation: "Professor",
    subjects: ["Biochemistry"],
    batch: "Y24",
    email: "arifullahmd@kluniversity.in",
    phone: "7032470721",
    officeNumber: "C-514B",
    availableHours: "Mon-Sat: 9:20AM - 5:30PM",
    image: "/faculty/mohammed-arifullah-sir.jpg.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/dr-nadeem-siddiqui-229999aa/",
  },
  {
    id: "8",
    name: "Dr. Koteswara Reddy Gujjula",
    designation: "Assistant Professor",
    subjects: ["Biochemical Thermodynamics","Process Engineering Principles", "Bioprocess Economics and Plant Design", "Bioinformatics"],
    batch: "2017",
    email: "koteswarareddy@kluniversity.in",
    phone: "8555913247",
    officeNumber: "C-505",
    availableHours: "Mon-Sat: 9:20AM-5:30PM",
    image: "/faculty/koti-reddy-sir.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dr-nadeem-siddiqui-229999aa/",
  },
  {
    id: "9",
    name: "Dr. Venkata Rajesh Yella",
    designation: "Professor",
    subjects: ["Bioinformatics", "Python & R programming", "Computer aided drug design", "Bioanalytical techniques"],
    batch: "Y24",
    email: "yvrajesh_bt@kluniversity.in",
    phone: "9182238439",
    officeNumber: "C-505",
    availableHours: "Mon-Sat: 9:20AM-5:30PM",
    image: "/faculty/dr-venkata-rajesh-yella-sir.JPG.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/venkata-rajesh-yella-620ba1166/",
  },
 {
    id: "10",
    name: "",
    designation: "",
    subjects: [""],
    batch: "",
    email: "",
    phone: "",
    officeNumber: "",
    availableHours: "",
    image: "",
    linkedinUrl: "",
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
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{faculty.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{faculty.designation}</p>

                <div className="space-y-3 mb-4 text-sm">

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
