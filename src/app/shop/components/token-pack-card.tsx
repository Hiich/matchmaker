import { Hexagon } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TokenPack {
  id: number
  name: string
  tokens: number
  price: number
  currency: string
}

interface TokenPackCardProps {
  pack: TokenPack
  onPurchase: (pack: TokenPack) => void
}

export function TokenPackCard({ pack, onPurchase }: TokenPackCardProps) {
  return (
    <div className="bg-[#2A2533] rounded-lg p-6 flex flex-col items-center">
      <Hexagon className="w-16 h-16 text-[#9C27B0] mb-4" />
      <h3 className="text-[#F5F5F5] text-xl font-semibold mb-2">{pack.name}</h3>
      <p className="text-[#E0E0E0] text-2xl font-bold mb-4">{pack.tokens} tokens</p>
      <p className="text-[#00BCD4] text-3xl font-bold mb-6">
        ${pack.price.toFixed(2)}
      </p>
      <Button 
        className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
        onClick={() => onPurchase(pack)}
      >
        Acheter
      </Button>
    </div>
  )
}

