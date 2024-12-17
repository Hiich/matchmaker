"use client"

import { useState } from "react"
import { X } from 'lucide-react'

interface TagSelectProps {
  tags: string[]
  selectedTags: string[]
  onChange: (tags: string[]) => void
}

export function TagSelect({ tags, selectedTags, onChange }: TagSelectProps) {
  const [selected, setSelected] = useState<string[]>(selectedTags)

  const toggleTag = (tag: string) => {
    const newSelected = selected.includes(tag)
      ? selected.filter(t => t !== tag)
      : [...selected, tag]
    setSelected(newSelected)
    onChange(newSelected)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selected.includes(tag)
              ? 'bg-[#9C27B0] text-white'
              : 'bg-[#2A2533] text-[#E0E0E0]'
          } hover:opacity-80 transition-opacity`}
        >
          {tag}
          {selected.includes(tag) && (
            <X className="inline-block ml-1 w-4 h-4" />
          )}
        </button>
      ))}
    </div>
  )
}

