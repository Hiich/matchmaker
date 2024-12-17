"use client"

import { Button } from "@/components/ui/button"
import { Profile, testProfiles } from '@/data/test-profiles'
import { Bookmark, Check, MessageSquare, Star, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ExperienceSection } from '../components/ExperienceSection'
import { NeonPattern } from '../components/NeonPattern'
import { PortfolioSection } from '../components/PortfolioSection'
import { PricingSection } from '../components/PricingSection'
import { ProfileHeader } from '../components/ProfileHeader'
import { ProfileInfo } from '../components/ProfileInfo'
import { ReviewsSection } from '../components/ReviewsSection'
import { SkillsSection } from '../components/SkillsSection'

type PageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function UserProfilePage({ params }: PageProps) {
  const { id } = await params
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true)
      const fetchedProfile = testProfiles.find(p => p.id.toString() === id)
      if (fetchedProfile) {
        setProfile(fetchedProfile)
      } else {
        console.error('Profile not found')
      }
      setIsLoading(false)
    }

    fetchProfileData()
  }, [id])

  const handleLike = () => {
    console.log('Profile liked:', id)
    router.push('/swipe')
  }

  const handlePass = () => {
    console.log('Profile passed:', id)
    router.push('/swipe')
  }

  const handleSuperLike = () => {
    console.log('Super like!', id)
    router.push('/swipe')
  }

  const handleMessage = () => {
    console.log('Message sent to:', id)
    router.push(`/chat/${id}`)
  }

  const handleSaveProfile = () => {
    console.log('Profile saved:', id)
    // Implement save profile functionality
  }

  if (isLoading) {
    return <div className="min-h-screen bg-[#1E1A29] flex items-center justify-center">
      <p className="text-[#F5F5F5] text-xl">Loading profile...</p>
    </div>
  }

  if (!profile) {
    return <div className="min-h-screen bg-[#1E1A29] flex items-center justify-center">
      <p className="text-[#F5F5F5] text-xl">Profile not found</p>
    </div>
  }

  return (
    <div className="min-h-screen bg-[#1E1A29] pb-20 md:pb-0">
      <ProfileHeader name={profile.name} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 pt-16"> {/* Updated padding */}
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="relative mb-20"> {/* Updated margin */}
                <NeonPattern />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-[#1E1A29]"
                  />
                </div>
              </div>
              <ProfileInfo profile={{
                ...profile,
                isVerified: true,
                bio: 'Spécialisée dans le développement de smart contracts et d\'applications décentralisées.',
              }} />
              <SkillsSection skills={profile.skills} />
              <PricingSection pricing={{
                hourlyRate: '100€',
                availability: 'Disponible 24/7'
              }} />
              <div className="mt-6 space-y-3">
                <Button onClick={handleMessage} className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2]">
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
                <Button onClick={handleSaveProfile} variant="outline" className="w-full border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white">
                  <Bookmark className="mr-2 h-4 w-4" /> Save Profile
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0">
            <ExperienceSection experiences={profile.experiences || []} />
            <PortfolioSection portfolio={profile.portfolio || []} />
            <ReviewsSection reviews={profile.reviews || {
              average: 0,
              count: 0,
              comments: []
            }} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#1E1A29] p-4 flex justify-between items-center shadow-lg md:hidden">
        <Button onClick={handlePass} variant="outline" className="w-1/3">
          <X className="mr-2 h-4 w-4" /> Pass
        </Button>
        <Button onClick={handleSuperLike} variant="outline" className="w-1/4">
          <Star className="h-4 w-4 text-[#00BCD4]" />
        </Button>
        <Button onClick={handleLike} className="w-1/3 bg-[#9C27B0] hover:bg-[#7B1FA2]">
          <Check className="mr-2 h-4 w-4" /> Like
        </Button>
      </div>
    </div>
  )
}

