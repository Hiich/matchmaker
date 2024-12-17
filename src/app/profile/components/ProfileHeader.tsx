import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ProfileHeaderProps {
  name: string
}

export function ProfileHeader({ name }: ProfileHeaderProps) {
  return (
    <header className="bg-[#1E1A29] h-16 px-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
      <Link href="/swipe" className="text-[#F5F5F5] hover:text-[#9C27B0] transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <h2 className="text-[#F5F5F5] text-xl font-semibold">{name}</h2>
      <div className="w-6"></div> {/* Placeholder for right-side alignment */}
    </header>
  )
}

