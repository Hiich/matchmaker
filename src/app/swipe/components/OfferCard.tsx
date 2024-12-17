import Image from 'next/image'
import { ThumbsUp, ThumbsDown, MapPin, Star } from 'lucide-react'
import { Profile } from '@/data/test-profiles'
import { Button } from "@/components/ui/button"

interface OfferCardProps {
  offer: Profile
  onSwipe: (direction: 'left' | 'right', id: number) => void
  onNameClick: (profile: Profile) => void
}

export function OfferCard({ offer, onSwipe, onNameClick }: OfferCardProps) {
  return (
    <div className="bg-[#2A2533] rounded-lg overflow-hidden w-full h-[380px] flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={offer.image}
          alt={offer.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="space-y-2 overflow-hidden">
          <h3 
            className="text-white text-lg font-semibold truncate cursor-pointer hover:text-[#9C27B0] transition-colors"
            onClick={() => onNameClick(offer)}
          >
            {offer.name}
          </h3>
          <h4 className="text-[#00BCD4] text-sm truncate">{offer.title}</h4>
          <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {offer.location}
            </span>
            <span className="flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-400" />
              {offer.reviews ? offer.reviews.average.toFixed(1) : 'N/A'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 h-6 overflow-hidden">
            {offer.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-[#1E1A29] text-[#F5F5F5] px-2 py-1 rounded-full whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-[#E0E0E0] text-xs line-clamp-2">
            {offer.description}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 mr-2 bg-white hover:bg-red-100"
            onClick={() => onSwipe('left', offer.id)}
          >
            <ThumbsDown className="h-5 w-5 text-red-500" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 ml-2 bg-white hover:bg-green-100"
            onClick={() => onSwipe('right', offer.id)}
          >
            <ThumbsUp className="h-5 w-5 text-green-500" />
          </Button>
        </div>
      </div>
    </div>
  )
}

