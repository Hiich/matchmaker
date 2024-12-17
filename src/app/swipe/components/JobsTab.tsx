"use client"

import { useState } from 'react'
import { ProjectCard } from '@/app/project/components/ProjectCard'
import { ProjectModal } from '@/app/project/components/ProjectModal'
import { FilterPanel } from '@/components/navigation/FilterPanel'
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from "@/components/ui/input"

const jobFilterSections = [
  {
    title: "Project Type",
    options: [
      { id: "defi", label: "DeFi" },
      { id: "nft", label: "NFT" },
      { id: "dao", label: "DAO" },
      { id: "smartContract", label: "Smart Contract" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  },
  {
    title: "Budget Range",
    options: [
      {
        id: "budgetRange",
        label: "Project Budget (USDC)",
        type: 'range' as const,
        min: 0,
        max: 50000,
      }
    ]
  },
  {
    title: "Project Duration",
    options: [
      { id: "lessThanMonth", label: "Less than a month" },
      { id: "oneToThreeMonths", label: "1-3 months" },
      { id: "threeToSixMonths", label: "3-6 months" },
      { id: "moreThanSixMonths", label: "More than 6 months" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  },
  {
    title: "Skills Required",
    options: [
      { id: "solidity", label: "Solidity" },
      { id: "react", label: "React" },
      { id: "web3js", label: "Web3.js" },
      { id: "ethereum", label: "Ethereum" },
      { id: "ipfs", label: "IPFS" },
    ].map(opt => ({ ...opt, type: 'checkbox' as const }))
  }
]

// Example project data
const projectsData = [
  {
    id: 1,
    name: "DeFi Lending Platform",
    publishDate: new Date('2023-06-15'),
    skills: ["Solidity", "React", "Web3.js"],
    description: "We're looking for a skilled developer to build a decentralized lending platform. The project involves smart contract development and a user-friendly frontend.",
    budget: "10,000 - 15,000 USDC",
    duration: "2-3 months",
  },
  {
    id: 2,
    name: "NFT Marketplace",
    publishDate: new Date('2023-06-14'),
    skills: ["ERC721", "Next.js", "IPFS"],
    description: "Create a unique NFT marketplace with advanced features like auctions, lazy minting, and social interactions.",
    budget: "20,000 - 30,000 USDC",
    duration: "3-4 months",
  },
  {
    id: 3,
    name: "DAO Governance Tool",
    publishDate: new Date('2023-06-13'),
    skills: ["Solidity", "TypeScript", "Graph Protocol"],
    description: "Develop a comprehensive DAO governance tool with proposal creation, voting mechanisms, and analytics dashboard.",
    budget: "15,000 - 25,000 USDC",
    duration: "2-3 months",
  },
  // Add more projects as needed
]

const filterProjects = (projects: typeof projectsData, filters: any) => {
  return projects.filter(project => {
    if (filters.selectedFilters.length > 0) {
      const projectType = filters.selectedFilters.find((filter: string) =>
        ["defi", "nft", "dao", "smartContract"].includes(filter)
      );
      if (projectType && !project.name.toLowerCase().includes(projectType)) {
        return false;
      }

      const duration = filters.selectedFilters.find((filter: string) =>
        ["lessThanMonth", "oneToThreeMonths", "threeToSixMonths", "moreThanSixMonths"].includes(filter)
      );
      if (duration) {
        const [min, max] = getDurationRange(duration);
        const projectDuration = parseInt(project.duration);
        if (projectDuration < min || projectDuration > max) {
          return false;
        }
      }

      const requiredSkills = filters.selectedFilters.filter((filter: string) =>
        ["solidity", "react", "web3js", "ethereum", "ipfs"].includes(filter)
      );
      if (requiredSkills.length > 0 && !requiredSkills.every((skill: string) => project.skills.includes(skill))) {
        return false;
      }
    }

    if (filters.rangeValues.budgetRange) {
      const [min, max] = filters.rangeValues.budgetRange;
      const projectBudget = parseInt(project.budget.replace(/[^0-9]/g, ''));
      if (projectBudget < min || projectBudget > max) {
        return false;
      }
    }

    return true;
  });
};

const getDurationRange = (duration: string): [number, number] => {
  switch (duration) {
    case "lessThanMonth": return [0, 1];
    case "oneToThreeMonths": return [1, 3];
    case "threeToSixMonths": return [3, 6];
    case "moreThanSixMonths": return [6, Infinity];
    default: return [0, Infinity];
  }
};

export function JobsTab() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleApplyFilters = (filters: any) => {
    const filtered = filterProjects(projectsData, filters);
    setFilteredProjects(filtered);
  };

  const handleResetFilters = () => {
    setFilteredProjects(projectsData);
  }

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
    setShowProjectModal(true)
  }

  return (
    <div>
      <div className="flex flex-col mb-8">
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
        <div className="md:w-1/4">
          <div className="hidden md:block">
            <FilterPanel
              filterSections={jobFilterSections}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
          </div>
          {showFilters && (
            <div className="md:hidden mb-4">
              <FilterPanel
                filterSections={jobFilterSections}
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
              />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onNameClick={handleProjectClick} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        project={selectedProject}
      />
    </div>
  )
}

