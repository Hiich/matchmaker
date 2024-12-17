"use client"

import { useState } from 'react'
import { ArrowLeft, MapPin, Clock, DollarSign, Calendar, Star, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { OfferDetails } from "../components/offer-details"
import { SkillBadges } from "@/components/skill-badges"
import { ReviewStars } from "@/components/review-stars"

// Exemple de données d'offre
const offerData = {
  id: 1,
  name: "Développement DApp Ethereum",
  provider: "Alice Blockchain",
  image: "/placeholder.svg?height=400&width=800",
  location: "Basé dans la DeFi",
  experience: "5 ans d'expérience",
  price: "0.5 ETH/heure",
  availability: "Disponible dès maintenant",
  description: "Spécialisée dans le développement de smart contracts et d'interfaces utilisateur pour applications décentralisées sur Ethereum. Expérience approfondie avec Solidity, Web3.js, et les frameworks front-end modernes comme React et Vue.js. Capable de concevoir et d'implémenter des systèmes DeFi complexes, des marketplaces NFT, et des DAO.",
  skills: ["Solidity", "Ethereum", "Smart Contracts", "React", "Web3.js", "DeFi"],
  rating: 4.8,
  reviewCount: 24
}

export default function OfferDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen bg-[#1E1A29] text-[#F5F5F5] pb-8">
      {/* Header */}
      <header className="sticky top-0 bg-[#2A2533] p-4 flex items-center z-10">
        <Button variant="ghost" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-semibold truncate">{offerData.provider}</h2>
      </header>

      {/* Main content */}
      <main className="px-4">
        {/* Image */}
        <div className="w-full h-56 md:h-80 relative mb-4 mt-4">
          <img
            src={offerData.image}
            alt={offerData.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Offer details */}
        <OfferDetails offer={offerData} />

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Compétences</h3>
          <SkillBadges skills={offerData.skills} />
        </section>

        {/* Reviews */}
        <section className="mb-8">
          <div className="flex items-center mb-2">
            <ReviewStars rating={offerData.rating} />
            <span className="ml-2">{offerData.rating.toFixed(1)}</span>
            <span className="ml-2 text-[#999999]">({offerData.reviewCount} avis)</span>
          </div>
        </section>

        {/* CTA Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#2A2533] p-4 flex justify-between">
          <Button
            variant="outline"
            className="flex-1 mr-2 bg-white text-[#1E1A29] hover:bg-[#E0E0E0]"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-[#9C27B0]' : ''}`} />
            {isFavorite ? 'Favori' : 'Ajouter aux favoris'}
          </Button>
          <Button className="flex-1 ml-2 bg-[#9C27B0] hover:bg-[#7B1FA2]">
            Contacter
          </Button>
        </div>
      </main>
    </div>
  )
}

