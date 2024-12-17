import { ArrowLeft, Info } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ChatHeaderProps {
  contact: {
    name: string;
    avatar: string;
  };
  onProfileClick: () => void;
}

export function ChatHeader({ contact, onProfileClick }: ChatHeaderProps) {
  return (
    <header className="bg-[#2A2533] h-16 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <Link href="/opportunities" className="mr-4 md:hidden">
          <ArrowLeft className="h-6 w-6 text-[#F5F5F5]" />
        </Link>
        <Image
          src={contact.avatar}
          alt={contact.name}
          width={32}
          height={32}
          className="rounded-full mr-3"
        />
        <button
          onClick={onProfileClick}
          className="text-[#F5F5F5] font-semibold hover:text-[#9C27B0] transition-colors"
        >
          {contact.name}
        </button>
      </div>
      <button aria-label="Contact Information" onClick={onProfileClick}>
        <Info className="h-6 w-6 text-[#F5F5F5]" />
      </button>
    </header>
  )
}

