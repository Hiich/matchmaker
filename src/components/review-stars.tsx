import { Star } from 'lucide-react'

interface ReviewStarsProps {
  rating: number
}

export function ReviewStars({ rating }: ReviewStarsProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-[#FFC107] fill-[#FFC107]' : 'text-[#999999]'
          }`}
        />
      ))}
    </div>
  )
}

