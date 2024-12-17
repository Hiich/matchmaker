"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TalentsTab } from './components/TalentsTab'
import { JobsTab } from './components/JobsTab'

export default function SwipeScreen() {
  const [activeTab, setActiveTab] = useState("talents")

  return (
    <div className="min-h-screen bg-[#1E1A29] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#F5F5F5] text-2xl sm:text-3xl font-semibold mb-6">Browse Connections</h2>
        
        <div className="mb-8">
          <div className="flex bg-[#2A2533] rounded-lg p-1">
            <TabButton 
              isActive={activeTab === "talents"} 
              onClick={() => setActiveTab("talents")}
            >
              Talents
            </TabButton>
            <TabButton 
              isActive={activeTab === "jobs"} 
              onClick={() => setActiveTab("jobs")}
            >
              Jobs
            </TabButton>
          </div>
        </div>

        {activeTab === "talents" && <TalentsTab />}
        {activeTab === "jobs" && <JobsTab />}
      </div>
    </div>
  )
}

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

function TabButton({ isActive, onClick, children }: TabButtonProps) {
  return (
    <button
      className={`relative flex-1 py-2 text-center text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-[#F5F5F5]' : 'text-[#999999] hover:text-[#E0E0E0]'
      }`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9C27B0]"
          layoutId="activeTab"
        />
      )}
    </button>
  )
}

