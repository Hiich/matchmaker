"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, MapPin, Shield, Clock, DollarSign, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type PageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

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

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
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
          <div className="lg:w-2/3">
            <div className="bg-[#2A2533] rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
                    {projectData.title}
                  </h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-[#9C27B0] text-white">
                      {projectData.status}
                    </Badge>
                    <span className="text-[#E0E0E0] text-sm">
                      {projectData.timePosted} • {projectData.timeLeft}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#00BCD4] text-xl font-semibold">
                    {projectData.budget}
                  </div>
                  <div className="text-[#E0E0E0] text-sm">
                    Paid on delivery
                  </div>
                </div>
              </div>

              <Separator className="my-4 bg-[#333333]" />

              <div className="space-y-4">
                <div className="text-[#E0E0E0]">
                  {projectData.description}
                </div>

                <div className="space-y-2">
                  <h3 className="text-[#F5F5F5] font-semibold">Key Requirements:</h3>
                  <ul className="list-disc list-inside text-[#E0E0E0] space-y-1">
                    {projectData.keyRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projectData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#1E1A29] text-[#F5F5F5] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-[#E0E0E0]">
                  <span>{projectData.proposalCount} proposals</span>
                  <span>{projectData.projectType}</span>
                  <span>{projectData.activity}</span>
                </div>
              </div>
            </div>

            {/* Place Bid Section */}
            <div className="bg-[#2A2533] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">
                Place your bid
              </h2>
              <form onSubmit={handleSubmitBid} className="space-y-4">
                <div>
                  <label className="text-sm text-[#E0E0E0] mb-2 block">
                    Bid amount
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="50"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="pl-8 bg-[#1E1A29] border-[#333333] text-[#F5F5F5]"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]">
                      $
                    </span>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]">
                      USD
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#E0E0E0] mb-2 block">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1E1A29] border-[#333333] text-[#F5F5F5]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
                >
                  Bid on the project
                </Button>
              </form>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-6">
            {/* Sidebar */}
            {/* About the client */}
            <div className="bg-[#2A2533] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">
                About the client
              </h2>
              <div className="space-y-3">
                <div className="flex items-center text-[#E0E0E0]">
                  <MapPin className="w-4 h-4 mr-2" />
                  {projectData.client.location}
                </div>
                <div className="flex items-center text-[#E0E0E0]">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#999999]">★</span>
                    ))}
                  </div>
                  <span className="ml-2">{projectData.client.rating.toFixed(1)}</span>
                  <span className="ml-2">({projectData.client.reviewCount})</span>
                </div>
                <div className="flex items-center text-[#E0E0E0]">
                  <Clock className="w-4 h-4 mr-2" />
                  Member since {projectData.client.memberSince}
                </div>
                {projectData.client.verified && (
                  <div className="flex items-center text-[#00BCD4]">
                    <Shield className="w-4 h-4 mr-2" />
                    Payment method verified
                  </div>
                )}
              </div>
            </div>

            {/* Benefits section */}
            <div className="bg-[#2A2533] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">
                Benefits of bidding on MatchMaker
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center text-[#E0E0E0]">
                  <Check className="w-4 h-4 mr-2 text-[#00BCD4]" />
                  Set your budget and timeframe
                </li>
                <li className="flex items-center text-[#E0E0E0]">
                  <Check className="w-4 h-4 mr-2 text-[#00BCD4]" />
                  Get paid for your work
                </li>
                <li className="flex items-center text-[#E0E0E0]">
                  <Check className="w-4 h-4 mr-2 text-[#00BCD4]" />
                  Outline your proposal
                </li>
                <li className="flex items-center text-[#E0E0E0]">
                  <Check className="w-4 h-4 mr-2 text-[#00BCD4]" />
                  It's free to sign up and bid on jobs
                </li>
              </ul>
            </div>

            {/* Similar Jobs */}
            <div className="bg-[#2A2533] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">
                Other jobs from this client
              </h2>
              <div className="space-y-3">
                <div className="hover:bg-[#1E1A29] p-3 rounded-lg transition-colors">
                  <h3 className="text-[#F5F5F5] font-medium">Smart Contract Development</h3>
                  <p className="text-[#00BCD4] text-sm">$10-30 USD</p>
                </div>
                <div className="hover:bg-[#1E1A29] p-3 rounded-lg transition-colors">
                  <h3 className="text-[#F5F5F5] font-medium">DeFi Protocol Integration</h3>
                  <p className="text-[#00BCD4] text-sm">$250-750 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

