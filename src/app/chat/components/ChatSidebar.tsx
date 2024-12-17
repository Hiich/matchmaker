import { useState } from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'

interface ChatContact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: Date
}

const dummyContacts: ChatContact[] = [
  { id: '1', name: 'Alice Blockchain', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Sure, I can help with that!', timestamp: new Date() },
  { id: '2', name: 'Bob Crypto', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'When can we schedule a call?', timestamp: new Date(Date.now() - 3600000) },
  { id: '3', name: 'Charlie DeFi', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'The smart contract is ready for review.', timestamp: new Date(Date.now() - 86400000) },
]

export function ChatSidebar() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = dummyContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-1/4 max-w-xs bg-[#2A2533] border-r border-[#333333] hidden md:flex flex-col">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1E1A29] text-[#E0E0E0] placeholder-[#999999] border border-[#333333] rounded-lg p-2 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#999999]" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="p-4 hover:bg-[#1E1A29] cursor-pointer overflow-hidden">
            <div className="flex items-center">
              <Image
                src={contact.avatar}
                alt={contact.name}
                width={40}
                height={40}
                className="rounded-full mr-3 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-[#F5F5F5] font-semibold truncate">{contact.name}</h4>
                <p className="text-[#999999] text-sm truncate">{contact.lastMessage}</p>
              </div>
              <span className="text-[#999999] text-xs whitespace-nowrap ml-2">
                {contact.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

