"use client"

import * as React from "react"
import { ChevronDown, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

interface FilterOption {
  id: string
  label: string
  type: 'checkbox' | 'range' | 'select'
  options?: { value: string; label: string }[]
  min?: number
  max?: number
}

interface FilterSection {
  title: string
  options: FilterOption[]
}

interface FilterPanelProps {
  filterSections: FilterSection[]
  onApplyFilters: (filters: any) => void
  onResetFilters: () => void
}

export function FilterPanel({ filterSections, onApplyFilters, onResetFilters }: FilterPanelProps) {
  const [selectedFilters, setSelectedFilters] = React.useState<Set<string>>(new Set())
  const [rangeValues, setRangeValues] = React.useState<{ [key: string]: [number, number] }>({})

  const handleFilterChange = (filterId: string) => {
    const newFilters = new Set(selectedFilters)
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId)
    } else {
      newFilters.add(filterId)
    }
    setSelectedFilters(newFilters)
  }

  const handleRangeChange = (filterId: string, values: [number, number]) => {
    setRangeValues(prev => ({ ...prev, [filterId]: values }))
  }

  const handleApplyFilters = () => {
    const filters = {
      selectedFilters: Array.from(selectedFilters),
      rangeValues: rangeValues
    }
    onApplyFilters(filters)
  }

  const handleResetFilters = () => {
    setSelectedFilters(new Set())
    setRangeValues({})
    onResetFilters()
  }

  return (
    <div className="w-full max-w-xs bg-[#2A2533] rounded-lg p-4 space-y-6">
      {/* Filter Sections */}
      <div className="space-y-4">
        {filterSections.map((section) => (
          <Collapsible key={section.title} defaultOpen className="space-y-2">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-[#F5F5F5] hover:text-[#00BCD4] transition-colors">
              <span className="text-sm font-medium">{section.title}</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              {section.options.map((option) => (
                <div key={option.id} className="flex items-center">
                  {option.type === 'checkbox' ? (
                    <label className="flex items-center space-x-2 text-sm text-[#E0E0E0] cursor-pointer hover:text-[#F5F5F5]">
                      <div
                        className={cn(
                          "h-4 w-4 rounded border border-[#333333] flex items-center justify-center transition-colors",
                          selectedFilters.has(option.id) && "bg-[#9C27B0] border-[#9C27B0]"
                        )}
                        onClick={() => handleFilterChange(option.id)}
                      >
                        {selectedFilters.has(option.id) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span>{option.label}</span>
                    </label>
                  ) : option.type === 'range' ? (
                    <div className="w-full space-y-2">
                      <Label className="text-sm text-[#E0E0E0]">{option.label}</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min={option.min}
                          max={option.max}
                          value={rangeValues[option.id]?.[0] ?? option.min}
                          onChange={(e) => handleRangeChange(option.id, [+e.target.value, rangeValues[option.id]?.[1] ?? option.max!])}
                          className="w-20 bg-[#1E1A29] border-[#333333] text-[#F5F5F5]"
                        />
                        <span className="text-[#999999]">to</span>
                        <Input
                          type="number"
                          min={option.min}
                          max={option.max}
                          value={rangeValues[option.id]?.[1] ?? option.max}
                          onChange={(e) => handleRangeChange(option.id, [rangeValues[option.id]?.[0] ?? option.min!, +e.target.value])}
                          className="w-20 bg-[#1E1A29] border-[#333333] text-[#F5F5F5]"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4 border-t border-[#333333]">
        <Button 
          className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-[#333333] text-[#999999] hover:text-[#F5F5F5] hover:border-[#F5F5F5]"
          onClick={handleResetFilters}
        >
          Reset All
        </Button>
      </div>
    </div>
  )
}

