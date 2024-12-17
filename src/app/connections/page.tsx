"use client"

import { useState } from 'react'
import { OpportunityCard } from '@/components/OpportunityCard'
import { FilterBar } from '@/components/navigation/FilterBar'
import { FilterPanel } from '@/components/navigation/FilterPanel'
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from "@/components/ui/input"

// Example connection data
const connections = [
  {
    id: 1,
    name: "Alice Blockchain",
    title: "DApp Development",
    image: "/placeholder.svg?height=80&width=80",
    isNew: true,
    hasToken: true,
    lastMessage: "I'd be happy to discuss your DApp project further.",
    timestamp: new Date(),
  },
  {
    id: 2,
    name: "Bob Crypto",
    title: "NFT Design",
    image: "/placeholder.svg?height=80&width=80",
    isNew: false,
    hasToken: false,
    lastMessage: "Here's the initial concept for your NFT collection.",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 3,
    name: "Charlie DeFi",
    title: "Smart Contract Audit",
    image: "/placeholder.svg?height=80&width=80",
    isNew: true,
    hasToken: true,
    lastMessage: "I've completed the initial audit of your smart contract.",
    timestamp: new Date(Date.now() - 86400000),
  },
]

export default function ConnectionsPage() {
  const [filter, setFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleApplyFilters = (filters: any) => {
    console.log('Applying filters:', filters)
    // Implement filter logic here
  }

  const handleResetFilters = () => {
    console.log('Resetting filters')
    // Implement reset logic here
  }

  return (
    <div className="min-h-screen bg-[#1E1A29] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-8">
          <h2 className="text-[#F5F5F5] text-2xl sm:text-3xl font-semibold mb-4">My Connections</h2>
          <p className="text-[#E0E0E0] text-base sm:text-lg mb-6">
            Manage and track your potential collaborations and projects.
          </p>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
            <Input
              placeholder="Search connections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#1E1A29] border-[#333333] text-[#F5F5F5] placeholder:text-[#999999] h-12 text-lg"
            />
          </div>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-[#2A2533] text-[#F5F5F5] mb-4"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* <div className="md:w-1/4">
            <div className="hidden md:block">
              <FilterPanel onApplyFilters={handleApplyFilters} onResetFilters={handleResetFilters} />
            </div>
            {showFilters && (
              <div className="md:hidden mb-4">
                <FilterPanel onApplyFilters={handleApplyFilters} onResetFilters={handleResetFilters} />
              </div>
            )}
          </div> */}

          <div className="flex-1">
            <FilterBar currentFilter={filter} onFilterChange={setFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              {connections?.map((connection) => (
                <OpportunityCard key={connection.id} opportunity={connection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

