"use client"

import type React from "react"

import { useState } from "react"
import { Search, Edit2, Trash2, Plus, X, Youtube } from "lucide-react"
import AccessKeyModal from "@/components/access-key-modal"

interface Podcast {
  id: string
  title: string
  description: string
  speaker: string
  date: string
  duration: string
  youtubeUrl: string
  category: string
  image: string
}

const mockPodcasts: Podcast[] = [
  {
    id: "1",
    title: "The Future of AI in Education",
    description:
      "Exploring how artificial intelligence is transforming the educational landscape and creating new opportunities for learning.",
    speaker: "Dr. Rajesh Kumar",
    date: "2025-10-18",
    duration: "45:32",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    category: "Technology",
    image: "/ai-education.jpg",
  },
  {
    id: "2",
    title: "Career Paths in Tech",
    description: "Industry experts discuss various career opportunities in technology and how to prepare for them.",
    speaker: "Prof. Priya Sharma",
    date: "2025-10-15",
    duration: "38:15",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    category: "Career",
    image: "/career-tech.jpg",
  },
  {
    id: "3",
    title: "Web Development Trends 2025",
    description: "Latest trends and best practices in web development, including frameworks, tools, and methodologies.",
    speaker: "Vikram Singh",
    date: "2025-10-12",
    duration: "52:20",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    category: "Technology",
    image: "/web-development.jpg",
  },
  {
    id: "4",
    title: "Entrepreneurship in Tech",
    description: "Insights from successful tech entrepreneurs about starting and scaling tech ventures.",
    speaker: "Anjali Verma",
    date: "2025-10-08",
    duration: "41:45",
    youtubeUrl: "https://youtube.com/watch?v=example4",
    category: "Entrepreneurship",
    image: "/vibrant-startup-office.png",
  },
  {
    id: "5",
    title: "Cloud Computing Essentials",
    description: "Understanding cloud computing fundamentals and how to leverage cloud services effectively.",
    speaker: "Dr. Amit Patel",
    date: "2025-10-05",
    duration: "47:10",
    youtubeUrl: "https://youtube.com/watch?v=example5",
    category: "Technology",
    image: "/cloud-computing.jpg",
  },
  {
    id: "6",
    title: "Cybersecurity Best Practices",
    description: "Essential cybersecurity practices and strategies to protect your digital assets.",
    speaker: "Neha Gupta",
    date: "2025-10-01",
    duration: "39:55",
    youtubeUrl: "https://youtube.com/watch?v=example6",
    category: "Security",
    image: "/cybersecurity-network.png",
  },
]

export default function PodcastsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [podcasts, setPodcasts] = useState<Podcast[]>(mockPodcasts)
  const [showAccessModal, setShowAccessModal] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [editingPodcast, setEditingPodcast] = useState<Podcast | null>(null)
  const [pendingAction, setPendingAction] = useState<{ type: "add" | "edit" | "delete"; id?: string } | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    speaker: "",
    description: "",
    youtubeUrl: "",
    image: "",
    category: "Technology",
  })

  const categories = ["all", ...new Set(podcasts.map((p) => p.category))]

  const filteredPodcasts = podcasts.filter((podcast) => {
    const matchesSearch =
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || podcast.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleAddClick = () => {
    if (!isAuthenticated) {
      setPendingAction({ type: "add" })
      setShowAccessModal(true)
    } else {
      setEditingPodcast(null)
      setFormData({
        title: "",
        speaker: "",
        description: "",
        youtubeUrl: "",
        image: "",
        category: "Technology",
      })
      setShowForm(!showForm)
    }
  }

  const handleEditClick = (podcast: Podcast) => {
    if (!isAuthenticated) {
      setEditingPodcast(podcast)
      setPendingAction({ type: "edit", id: podcast.id })
      setShowAccessModal(true)
    } else {
      setEditingPodcast(podcast)
      setFormData({
        title: podcast.title,
        speaker: podcast.speaker,
        description: podcast.description,
        youtubeUrl: podcast.youtubeUrl,
        image: podcast.image,
        category: podcast.category,
      })
      setShowForm(true)
    }
  }

  const handleDeleteClick = (id: string) => {
    if (!isAuthenticated) {
      setPendingAction({ type: "delete", id })
      setShowAccessModal(true)
    } else {
      setPodcasts(podcasts.filter((p) => p.id !== id))
    }
  }

  const handleAccessKeySubmit = () => {
    setIsAuthenticated(true)
    if (pendingAction?.type === "delete") {
      setPodcasts(podcasts.filter((p) => p.id !== pendingAction.id))
    } else if (pendingAction?.type === "edit" && editingPodcast) {
      setFormData({
        title: editingPodcast.title,
        speaker: editingPodcast.speaker,
        description: editingPodcast.description,
        youtubeUrl: editingPodcast.youtubeUrl,
        image: editingPodcast.image,
        category: editingPodcast.category,
      })
      setShowForm(true)
    } else {
      setShowForm(true)
    }
    setPendingAction(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPodcast) {
      setPodcasts(
        podcasts.map((p) =>
          p.id === editingPodcast.id
            ? {
                ...p,
                title: formData.title,
                speaker: formData.speaker,
                description: formData.description,
                youtubeUrl: formData.youtubeUrl,
                image: formData.image,
                category: formData.category,
              }
            : p,
        ),
      )
    } else {
      const newPodcast: Podcast = {
        id: Date.now().toString(),
        title: formData.title,
        speaker: formData.speaker,
        description: formData.description,
        youtubeUrl: formData.youtubeUrl,
        image: formData.image || "/placeholder.svg",
        category: formData.category,
        date: new Date().toISOString().split("T")[0],
        duration: "00:00",
      }
      setPodcasts([newPodcast, ...podcasts])
    }
    setFormData({
      title: "",
      speaker: "",
      description: "",
      youtubeUrl: "",
      image: "",
      category: "Technology",
    })
    setShowForm(false)
    setEditingPodcast(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <AccessKeyModal
        isOpen={showAccessModal}
        onClose={() => {
          setShowAccessModal(false)
          setPendingAction(null)
          setEditingPodcast(null)
        }}
        onSubmit={handleAccessKeySubmit}
        section="podcasts"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Podcasts</h1>
              <p className="text-muted-foreground">
                Listen to insightful discussions and educational content from our community experts
              </p>
            </div>
            <button
              onClick={handleAddClick}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              <Plus size={20} />
              Add Podcast
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add/Edit Form */}
        {showForm && isAuthenticated && (
          <div className="mb-8 bg-card border-2 border-primary rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-foreground">
                {editingPodcast ? "Edit Podcast" : "Add New Podcast"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingPodcast(null)
                }}
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Podcast title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Speaker</label>
                <input
                  type="text"
                  value={formData.speaker}
                  onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Speaker name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Podcast description"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">YouTube Link *</label>
                <input
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="https://youtube.com/watch?v=..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Image URL (Optional)</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option>Technology</option>
                  <option>Career</option>
                  <option>Entrepreneurship</option>
                  <option>Security</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                {editingPodcast ? "Save Changes" : "Add Podcast"}
              </button>
            </form>
          </div>
        )}

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search podcasts by title, speaker, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-primary rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-primary rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-card border-2 border-primary rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-secondary flex items-center justify-center overflow-hidden group">
                <img
                  src={podcast.image || "/placeholder.svg"}
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary">
                    {podcast.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{podcast.duration}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{podcast.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{podcast.description}</p>

                <div className="space-y-3 mb-4 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Speaker:</span> {podcast.speaker}
                  </p>
                  <p className="text-muted-foreground">
                    {new Date(podcast.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={podcast.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    <Youtube size={18} />
                    View on YouTube
                  </a>

                  <div className="flex gap-2 pt-2 border-t-2 border-primary">
                    {isAuthenticated && (
                      <>
                        <button
                          onClick={() => handleEditClick(podcast)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(podcast.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500/5 transition-colors text-sm font-medium"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPodcasts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No podcasts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
