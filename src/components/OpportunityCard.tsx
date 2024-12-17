import Image from 'next/image'
import { Coins, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface Connection {
    id: number
    name: string
    title: string
    image: string
    isNew: boolean
    hasToken: boolean
    lastMessage: string
    timestamp: Date
}

interface OpportunityCardProps {
    opportunity: Connection
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
    const router = useRouter()

    return (
        <div className="bg-[#2A2533] rounded-lg p-4 flex flex-col hover:bg-[#332E3D] transition-colors h-full">
            <div className="flex items-center space-x-3 mb-3">
                <Image
                    src={opportunity.image}
                    alt={opportunity.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div>
                    <h3
                        className="text-[#F5F5F5] text-base font-semibold cursor-pointer hover:text-[#9C27B0] transition-colors truncate"
                        onClick={() => router.push(`/profile/${opportunity.id}`)}
                    >
                        {opportunity.name}
                    </h3>
                    <p className="text-[#00BCD4] text-xs">{opportunity.title}</p>
                </div>
            </div>
            <p className="text-[#E0E0E0] text-sm mb-3 line-clamp-2">{opportunity.lastMessage}</p>
            <div className="flex items-center justify-between text-xs text-[#999999] mb-3">
                <span>
                    {opportunity.timestamp.toLocaleDateString()} {opportunity.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <div className="flex items-center space-x-2">
                    {opportunity.isNew && (
                        <span className="bg-[#00BCD4] text-[#1E1A29] px-2 py-1 rounded-full text-xs">
                            New
                        </span>
                    )}
                    {opportunity.hasToken && (
                        <Coins className="w-4 h-4 text-[#00BCD4]" />
                    )}
                </div>
            </div>
            <Button
                className="mt-auto w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white text-sm"
                onClick={() => router.push(`/chat/${opportunity.id}`)}
            >
                <MessageSquare className="w-4 h-4 mr-2" />
                Continue Chat
            </Button>
        </div>
    )
}


