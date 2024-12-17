"use client"

import { useState } from 'react'
import { OfferCard } from './OfferCard'
import { FilterPanel } from '@/components/navigation/FilterPanel'
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from 'lucide-react'
import { SwipeActionPopup } from './SwipeActionPopup'
import { Input } from "@/components/ui/input"
import { testProfiles, Profile } from '@/data/test-profiles'
import { ProfileModal } from '@/app/chat/components/ProfileModal'

const talentFilterSections = [
  {
    title: "Expertise",
    options: [
      { id: "blockchain", label: "Blockchain Development" },
      { id: "smartContract", label: "Smart Contract" },
      { id: "frontend", label: "Frontend Development" },
      { id: "backend", label: "Backend Development" },
      { id: "design", label: "UI/UX Design" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  },
  {
    title: "Experience Level",
    options: [
      { id: "entry", label: "Entry Level" },
      { id: "intermediate", label: "Intermediate" },
      { id: "expert", label: "Expert" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  },
  {
    title: "Hourly Rate",
    options: [
      {
        id: "hourlyRate",
        label: "Hourly Rate (USDC)",
        type: 'range' as const,
        min: 0,
        max: 500,
      }
    ]
  },
  {
    title: "Skills",
    options: [
      { id: "solidity", label: "Solidity" },
      { id: "react", label: "React" },
      { id: "nodejs", label: "Node.js" },
      { id: "rust", label: "Rust" },
      { id: "golang", label: "Golang" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  }
]

export function TalentsTab() {
  const [profiles, setProfiles] = useState<Profile[]>(testProfiles)
  const [showFilters, setShowFilters] = useState(false)
  const [showMatchPopup, setShowMatchPopup] = useState(false)
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSwipe = (direction: 'left' | 'right', id: number) => {
    console.log(`Swiped ${direction} on profile ${id}`)
    const swipedProfile = profiles.find(profile => profile.id === id)

    setProfiles(prevProfiles => {
      const updatedProfiles = prevProfiles.filter(profile => profile.id !== id)
      if (updatedProfiles.length < prevProfiles.length) {
        const newProfile: Profile = {
          id: Math.max(...prevProfiles.map(p => p.id)) + 1,
          name: `New Profile ${updatedProfiles.length + 1}`,
          title: "Web3 Developer",
          location: "Decentraland",
          price: "0.1 ETH/hour",
          description: "Experienced in building decentralized applications.",
          image: `/placeholder.svg?height=300&width=300&text=Profile${updatedProfiles.length + 1}`,
          skills: ["Solidity", "React", "Node.js"],
          isMatch: Math.random() > 0.5
        }
        updatedProfiles.push(newProfile)
      }
      return updatedProfiles
    })

    if (direction === 'right' && swipedProfile) {
      setMatchedProfile(swipedProfile)
      setShowMatchPopup(true)
    }
  }

  const handleApplyFilters = (filters: any) => {
    console.log('Applying filters:', filters)
    // Implement filter logic here
  }

  const handleResetFilters = () => {
    console.log('Resetting filters')
    // Implement reset logic here
  }

  const handleStartChat = () => {
    if (matchedProfile) {
      // Navigate to chat page
      console.log(`Navigating to chat with ${matchedProfile.name}`)
    }
    setShowMatchPopup(false)
  }

  const handleSaveToOpportunities = () => {
    console.log(`Saved ${matchedProfile?.name} to opportunities`)
    setShowMatchPopup(false)
  }

  const handleNameClick = (profile: Profile) => {
    setSelectedProfile(profile)
    setShowProfileModal(true)
  }

  return (
    <div>
      <div className="flex flex-col mb-8">
        <p className="text-[#E0E0E0] text-base sm:text-lg mb-6">
          Discover and connect with skilled professionals in the Web3 space.
        </p>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
          <Input
            placeholder="Search talents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#1E1A29] border-[#333333] text-[#F5F5F5] placeholder:text-[#999999] h-12 text-lg"
          />
        </div>
        <Button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden bg-[#2A2533] text-[#F5F5F5] mb-4"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="hidden md:block">
            <FilterPanel
              filterSections={talentFilterSections}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          </div>
          {showFilters && (
            <div className="md:hidden mb-4">
              <FilterPanel
                filterSections={talentFilterSections}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
              />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {profiles.map((profile) => (
              <OfferCard key={profile.id} offer={profile} onSwipe={handleSwipe} onNameClick={handleNameClick} />
            ))}
          </div>
        </div>
      </div>

      <SwipeActionPopup
        isOpen={showMatchPopup}
        onClose={() => setShowMatchPopup(false)}
        onStartChat={handleStartChat}
        onSaveToOpportunities={handleSaveToOpportunities}
        profile={matchedProfile as Profile}
      />
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={{
          ...selectedProfile,
          avatar: selectedProfile?.image || '',
          rating: 0,
          bio: selectedProfile?.description || '',
          name: "Alice Blockchain",
          title: "DApp Development",
          location: "Decentraland",
          skills: ["Solidity", "React", "Node.js"],
        }}
      />
    </div>
  )
}

