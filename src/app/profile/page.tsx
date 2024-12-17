"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Camera, User, FileText, Code, Globe, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ProfilePhotoUpload } from "./components/profile-photo-upload"
import { TagSelect } from "./components/tag-select"
import { LanguageSelect } from "./components/language-select"

export default function ProfilePage() {
  const [profileType, setProfileType] = useState("propose")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally add logic to save the profile
    console.log("Profile saved")
    // Redirect to celebration page
    router.push('/celebration')
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-[#F5F5F5] text-2xl font-semibold mb-8">My Profile</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <ProfilePhotoUpload />
          </div>

          {/* Name/Pseudo */}
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6 text-[#999999]" />
            <div className="flex-grow">
              <Label htmlFor="name" className="text-[#E0E0E0] text-sm">
                Name/Username *
              </Label>
              <Input
                id="name"
                placeholder="Your name or username"
                className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
                required
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex items-start space-x-4">
            <FileText className="w-6 h-6 text-[#999999] mt-1" />
            <div className="flex-grow">
              <Label htmlFor="bio" className="text-[#E0E0E0] text-sm">
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA] min-h-[100px]"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="flex items-start space-x-4">
            <Code className="w-6 h-6 text-[#999999] mt-1" />
            <div className="flex-grow">
              <Label className="text-[#E0E0E0] text-sm mb-2 block">
                Skills
              </Label>
              <TagSelect
                tags={["React", "Next.js", "TypeScript", "Node.js", "GraphQL"]}
                selectedTags={[]}
                onChange={() => { }}
              />
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-center space-x-4">
            <Globe className="w-6 h-6 text-[#999999]" />
            <div className="flex-grow">
              <Label htmlFor="languages" className="text-[#E0E0E0] text-sm">
                Languages
              </Label>
              <LanguageSelect />
            </div>
          </div>

          {/* Services */}
          <div className="flex items-start space-x-4">
            <Briefcase className="w-6 h-6 text-[#999999] mt-1" />
            <div className="flex-grow">
              <Label className="text-[#E0E0E0] text-sm mb-2 block">
                Services {profileType === "propose" ? "offered" : "needed"}
              </Label>
              <TagSelect
                tags={["Web Development", "UI/UX Design", "SEO", "Digital Marketing", "Content Writing"]}
                selectedTags={[]}
                onChange={() => { }}
              />
            </div>
          </div>

          {/* Profile Orientation */}
          <div className="mt-8">
            <Label className="text-[#E0E0E0] text-sm mb-2 block">
              Profile Orientation
            </Label>
            <RadioGroup
              defaultValue="propose"
              onValueChange={setProfileType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="propose"
                  id="propose"
                  className="text-[#9C27B0] border-[#9C27B0]"
                />
                <Label htmlFor="propose" className="text-[#E0E0E0]">I offer services</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="search"
                  id="search"
                  className="text-[#9C27B0] border-[#9C27B0]"
                />
                <Label htmlFor="search" className="text-[#E0E0E0]">I'm looking for services</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white mt-8">
            Save My Profile
          </Button>
        </form>
      </div>
    </div>
  )
}

