import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    avatar: string;
    title: string;
    location: string;
    rating: number;
    bio: string;
    skills: string[];
  };
}

export function ProfileModal({ isOpen, onClose, profile }: ProfileModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2A2533] text-[#F5F5F5] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profil de {profile.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center mt-4">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
          <p className="text-[#00BCD4] mb-2">{profile.title}</p>
          <div className="flex items-center text-[#E0E0E0] mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < profile.rating ? 'text-[#FFC107] fill-[#FFC107]' : 'text-[#999999]'
                }`}
              />
            ))}
            <span className="ml-2 text-[#E0E0E0]">{profile.rating.toFixed(1)}</span>
          </div>
          <p className="text-center text-[#E0E0E0] mb-4">{profile.bio}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#1E1A29] text-[#F5F5F5] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <Button
            onClick={onClose}
            className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

