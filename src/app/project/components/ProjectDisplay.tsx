"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, MapPin, Shield, Clock, DollarSign, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Example project data
const projectData = {
  id: 1,
  title: "DeFi Lending Platform Development",
  budget: "$30-250 USD",
  status: "Open",
  timePosted: "Posted 7 days ago",
  timeLeft: "Ends in 16 hours",
  description: `I need a skilled developer who can build a decentralized lending platform with the following features:
  - Integration with multiple blockchain networks
  - Smart contract development for lending pools
  - User-friendly frontend interface`,
  keyRequirements: [
    "Proficiency in Solidity and experience with DeFi protocols",
    "Deep understanding of lending mechanisms and yield farming",
    "Ability to implement secure smart contracts with proper testing"
  ],
  tags: ["Solidity", "DeFi", "Smart Contracts", "React"],
  proposalCount: 12,
  projectType: "Remote project",
  activity: "Active 6 days ago",
  client: {
    location: "Stockholm, Sweden",
    rating: 0.0,
    reviewCount: 0,
    memberSince: "Jan 24, 2021",
    verified: true
  }
}

type ProjectDisplayProps = {
  projectId: string
}

export function ProjectDisplay({ projectId }: ProjectDisplayProps) {
  const [bidAmount, setBidAmount] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmitBid = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Bid submitted:", { bidAmount, email })
  }

  return (
    <div className="min-h-screen bg-[#1E1A29] p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#F5F5F5] mb-6">Project Details</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#2D2640] rounded-lg p-6 shadow-lg">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">Project Title</h1>
                  <p className="text-gray-400 mt-1">Posted 2 days ago</p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  Open for Bids
                </Badge>
              </div>

              <Separator className="my-6" />

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-5 w-5" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Shield className="h-5 w-5" />
                    <span>Verified Client</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-5 w-5" />
                    <span>2-4 weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <DollarSign className="h-5 w-5" />
                    <span>$1,000 - $2,000</span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Project Description</h2>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Requirements Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {['Requirement 1', 'Requirement 2', 'Requirement 3'].map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-6" />

              {/* Bid Form */}
              <form onSubmit={handleSubmitBid} className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Submit Your Bid</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="bidAmount" className="block text-sm font-medium text-gray-300 mb-2">
                      Bid Amount (USD)
                    </label>
                    <Input
                      id="bidAmount"
                      type="number"
                      placeholder="Enter your bid amount"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="bg-[#1E1A29] border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#1E1A29] border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Submit Bid
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}