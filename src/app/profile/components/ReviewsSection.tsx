import { Star } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  comment: string
}

interface ReviewsSectionProps {
  reviews: {
    average: number
    count: number
    comments: Review[]
  }
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="mb-12">
      <h3 className="text-[#F5F5F5] text-xl font-semibold mb-6 flex items-center">
        <Star className="w-6 h-6 mr-2 text-[#00BCD4]" />
        Reviews ({reviews.count})
      </h3>
      <div className="flex items-center mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 ${
                star <= Math.round(reviews.average)
                  ? 'text-[#FFC107] fill-[#FFC107]'
                  : 'text-[#999999]'
              }`}
            />
          ))}
        </div>
        <span className="text-[#F5F5F5] ml-2 text-lg">{reviews.average.toFixed(1)}</span>
      </div>
      <div className="space-y-6">
        {reviews.comments.map((review) => (
          <div key={review.id} className="bg-[#2A2533] p-6 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-[#F5F5F5] font-semibold mr-2">{review.author}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating ? 'text-[#FFC107] fill-[#FFC107]' : 'text-[#999999]'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[#E0E0E0] text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

