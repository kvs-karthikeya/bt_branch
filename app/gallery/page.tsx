"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import DNAStrand from "@/components/dna-strand"
import AOS from "aos"
import "aos/dist/aos.css"

interface GalleryImage {
  id: string
  title: string
  description: string
  image: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Campus Main Building",
    description: "The iconic main building of our university campus",
    image: "/placeholder.svg?key=campus1",
    category: "Campus",
  },
  {
    id: "2",
    title: "Library Interior",
    description: "Modern library with state-of-the-art facilities",
    image: "/placeholder.svg?key=library",
    category: "Facilities",
  },
  {
    id: "3",
    title: "Tech Fest 2024",
    description: "Annual technology festival with competitions and workshops",
    image: "/placeholder.svg?key=techfest",
    category: "Events",
  },
  {
    id: "4",
    title: "Computer Lab",
    description: "Advanced computer lab with latest equipment",
    image: "/placeholder.svg?key=lab",
    category: "Facilities",
  },
  {
    id: "5",
    title: "Graduation Ceremony",
    description: "Celebrating the achievements of our graduates",
    image: "/placeholder.svg?key=graduation",
    category: "Events",
  },
  {
    id: "6",
    title: "Campus Grounds",
    description: "Beautiful green spaces and outdoor areas",
    image: "/placeholder.svg?key=grounds",
    category: "Campus",
  },
  {
    id: "7",
    title: "Hackathon 2024",
    description: "24-hour coding competition with amazing projects",
    image: "/placeholder.svg?key=hackathon",
    category: "Events",
  },
  {
    id: "8",
    title: "Cafeteria",
    description: "Modern cafeteria with diverse food options",
    image: "/placeholder.svg?key=cafeteria",
    category: "Facilities",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const categories = ["all", ...new Set(galleryImages.map((img) => img.category))]
  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
    setSelectedImage(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1])
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    setSelectedImage(filteredImages[currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1])
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DNAStrand />

      {/* Header */}
      <div className="relative z-10 border-b border-border">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-6xl sm:text-7xl font-extralight tracking-tighter text-foreground mb-4">
            BRANCH <span className="text-primary font-light italic">GALLERY</span>
          </h1>
          <p className="text-muted-foreground font-light tracking-[0.1em] uppercase text-sm">
            Visualizing Excellence and Innovation
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
                setSelectedImage(null)
              }}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(34,197,94,0.2)]"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {category === "all" ? "All Visuals" : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              data-aos="fade-up"
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(0)
              }}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group border border-border bg-secondary/30 backdrop-blur-sm"
            >
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-light mb-2">{image.title}</h3>
                  <div className="w-8 h-0.5 bg-white mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex items-center justify-center p-8">
            <div className="relative max-w-4xl w-full" data-aos="fade-up">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Image Container */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-200">{selectedImage.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Counter */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
