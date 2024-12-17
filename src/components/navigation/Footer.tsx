"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, MessageSquare, ShoppingBag, User } from 'lucide-react'

const tabs = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Browse', icon: Search, path: '/swipe' },
    { name: 'Connections', icon: MessageSquare, path: '/connections' },
    { name: 'Shop', icon: ShoppingBag, path: '/shop' },
    { name: 'Profile', icon: User, path: '/profile' },
]

export function Footer() {
    const [activeTab, setActiveTab] = useState('')
    const pathname = usePathname()

    useEffect(() => {
        setActiveTab(pathname)
    }, [pathname])

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1E1A29] h-16 flex items-center justify-around px-2 border-t border-[#2A2533]">
            {tabs.map((tab) => (
                <Link
                    key={tab.name}
                    href={tab.path}
                    className={`flex flex-col items-center justify-center w-16 h-full ${activeTab === tab.path ? 'text-[#9C27B0]' : 'text-[#999999]'
                        }`}
                    aria-label={tab.name}
                >
                    <tab.icon className="w-5 h-5 mb-1" />
                    <span className="text-xs truncate">{tab.name}</span>
                </Link>
            ))}
        </nav>
    )
}

