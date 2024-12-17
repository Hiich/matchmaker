import { DollarSign, Clock } from 'lucide-react'

interface PricingSectionProps {
  pricing: {
    hourlyRate: string
    availability: string
  }
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="mb-8">
      <h3 className="text-[#F5F5F5] text-lg font-semibold mb-4 flex items-center">
        <DollarSign className="w-5 h-5 mr-2 text-[#00BCD4]" />
        Pricing and Availability
      </h3>
      <div className="bg-[#2A2533] p-4 rounded-lg">
        <p className="text-[#F5F5F5] flex items-center mb-2">
          <DollarSign className="w-4 h-4 mr-2 text-[#00BCD4]" />
          {pricing.hourlyRate} / hour
        </p>
        <p className="text-[#E0E0E0] flex items-center">
          <Clock className="w-4 h-4 mr-2 text-[#00BCD4]" />
          {pricing.availability}
        </p>
      </div>
    </section>
  )
}

