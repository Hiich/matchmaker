import { MessageSquare, Star, Clock } from 'lucide-react'

interface FilterBarProps {
    currentFilter: string
    onFilterChange: (filter: string) => void
}

export function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
    const filters = [
        { id: 'all', icon: MessageSquare, label: 'All' },
        { id: 'favorites', icon: Star, label: 'Favorites' },
        { id: 'recent', icon: Clock, label: 'Recent' },
    ]

    return (
        <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={`flex items-center space-x-1 sm:space-x-2 p-2 rounded-lg transition-colors whitespace-nowrap ${currentFilter === filter.id
                            ? 'bg-[#9C27B0] text-white'
                            : 'text-[#999999] hover:bg-[#2A2533]'
                        }`}
                >
                    <filter.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">{filter.label}</span>
                </button>
            ))}
        </div>
    )
}

