"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isAuthPage = pathname.startsWith('/auth')
    const isHomePage = pathname === '/'

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Browse', path: '/swipe' },
        { name: 'Connections', path: '/connections' },
        { name: 'Shop', path: '/shop' },
    ]

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#1E1A29] shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    {!isHomePage && (
                        <Link href="/" className="mr-4 md:hidden">
                            <ArrowLeft className="h-6 w-6 text-[#F5F5F5]" />
                        </Link>
                    )}
                    <Link href="/" className="flex items-center">
                        <Logo className="w-8 h-8 mr-2" />
                        <span className="text-xl font-semibold text-[#F5F5F5]">MatchMaker</span>
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`text-[#F5F5F5] hover:text-[#9C27B0] transition-colors ${pathname === item.path ? 'text-[#9C27B0]' : ''
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                {!isAuthPage && (
                    <div className="hidden md:flex space-x-4">
                        <Link href="/auth">
                            <Button variant="ghost" className="text-[#F5F5F5] hover:text-[#9C27B0]">Login</Button>
                        </Link>
                        <Link href="/auth/register">
                            <Button className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">Sign Up</Button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

