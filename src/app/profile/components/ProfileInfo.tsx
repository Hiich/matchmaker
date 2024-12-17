import { MapPin, CheckCircle } from 'lucide-react'

interface ProfileInfoProps {
  profile: {
    name: string
    title: string
    location: string
    isVerified: boolean
    bio: string
  }
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="text-center mb-8 pt-16">
      <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">{profile.name}</h1>
      <p className="text-[#00BCD4] mb-2">{profile.title}</p>
      <div className="flex items-center justify-center text-[#E0E0E0] mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{profile.location}</span>
        {profile.isVerified && (
          <CheckCircle className="w-4 h-4 ml-2 text-[#00BCD4]" />
        )}
      </div>
      <p className="text-[#E0E0E0] text-sm">{profile.bio}</p>
    </div>
  )
}

