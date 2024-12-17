"use client"

import { useState } from 'react'
import { FilterBar } from '@/components/navigation/FilterBar'
import { FilterPanel } from '@/components/navigation/FilterPanel'
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ProjectCard } from '../project/components/ProjectCard'

// Example project data
const projects = [
  {
    id: 1,
    name: "DeFi Lending Platform",
    publishDate: new Date('2023-06-15'),
    skills: ["Solidity", "React", "Web3.js"],
    description: "We're looking for a skilled developer to build a decentralized lending platform. The project involves smart contract development and a user-friendly frontend.",
    budget: "10,000 - 15,000 USDC",
    duration: "2-3 months",
    clientRating: 4.8
  },
  {
    id: 2,
    name: "NFT Marketplace",
    publishDate: new Date('2023-06-14'),
    skills: ["ERC721", "Next.js", "IPFS"],
    description: "Create a unique NFT marketplace with advanced features like auctions, lazy minting, and social interactions.",
    budget: "20,000 - 30,000 USDC",
    duration: "3-4 months",
    clientRating: 4.5
  },
  {
    id: 3,
    name: "DAO Governance Tool",
    publishDate: new Date('2023-06-13'),
    skills: ["Solidity", "TypeScript", "Graph Protocol"],
    description: "Develop a comprehensive DAO governance tool with proposal creation, voting mechanisms, and analytics dashboard.",
    budget: "15,000 - 25,000 USDC",
    duration: "2-3 months",
    clientRating: 4.9
  },
  // Add more projects as needed
]

export default function JobsPage() {
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
          <h2 className="text-[#F5F5F5] text-2xl sm:text-3xl font-semibold mb-4">Web3 Projects</h2>
          <p className="text-[#E0E0E0] text-base sm:text-lg mb-6">
            Discover exciting blockchain and Web3 projects to work on.
          </p>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
            <Input
              placeholder="Search projects..."
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onNameClick={() => {
                  console.log('clicked')
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

