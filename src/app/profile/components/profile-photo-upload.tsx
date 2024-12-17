"use client"

import { useState } from "react"
import { Camera } from 'lucide-react'

export function ProfilePhotoUpload() {
  const [photo, setPhoto] = useState<string | null>(null)

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative w-20 h-20">
      <div className="w-full h-full rounded-full bg-[#2A2533] flex items-center justify-center overflow-hidden">
        {photo ? (
          <img src={photo} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <Camera className="w-8 h-8 text-[#999999]" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  )
}

