import { MapPin, Clock, DollarSign, Calendar } from 'lucide-react'

interface OfferDetailsProps {
  offer: {
    name: string
    location: string
    experience: string
    price: string
    availability: string
    description: string
  }
}

export function OfferDetails({ offer }: OfferDetailsProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-2">{offer.name}</h1>
      <div className="flex items-center text-[#999999] mb-2">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{offer.location}</span>
      </div>
      <div className="flex items-center text-[#999999] mb-4">
        <Clock className="w-4 h-4 mr-1" />
        <span>{offer.experience}</span>
      </div>
      <div className="flex items-center mb-2">
        <DollarSign className="w-4 h-4 mr-1 text-[#00BCD4]" />
        <span className="font-semibold">{offer.price}</span>
      </div>
      <div className="flex items-center mb-4">
        <Calendar className="w-4 h-4 mr-1 text-[#00BCD4]" />
        <span>{offer.availability}</span>
      </div>
      <p className="text-[#E0E0E0]">{offer.description}</p>
    </div>
  )
}

