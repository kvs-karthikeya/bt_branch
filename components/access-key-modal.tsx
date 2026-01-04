"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface AccessKeyModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (key: string) => void
  section: string
}

export default function AccessKeyModal({ isOpen, onClose, onSubmit, section }: AccessKeyModalProps) {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const validKeys: Record<string, string> = {
      announcements: "ADMIN_ANNOUNCE_2025",
      "lost-found": "ADMIN_LOSTFOUND_2025",
      resources: "ADMIN_RESOURCES_2025",
      podcasts: "ADMIN_PODCASTS_2025",
      alumni: "ADMIN_ALUMNI_2025",
      bolt: "ADMIN_BOLT_2025",
    }

    const trimmedKey = key.trim()
    const sectionKey = section.toLowerCase().replace(/\s+/g, "-")

    if (validKeys[sectionKey] && trimmedKey === validKeys[sectionKey]) {
      onSubmit(trimmedKey)
      setKey("")
      onClose()
    } else {
      setError("Invalid access key. Permission denied.")
      setKey("")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-card border-2 border-primary rounded-lg p-6 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">Admin Access Required</h2>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg transition-colors text-foreground">
            <X size={24} />
          </button>
        </div>

        <p className="text-muted-foreground mb-6">
          Enter your access key to make changes to {section.replace("-", " ")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Access Key</label>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full px-4 py-2 border-2 border-primary rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent placeholder-muted-foreground"
              placeholder="Enter access key"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-shadow font-medium"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
