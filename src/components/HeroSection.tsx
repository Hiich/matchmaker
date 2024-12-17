"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { animated, useSpring } from 'react-spring'

const AnimatedDiv = animated('div')

export default function HeroSection() {
    const animation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { mass: 1, tension: 80, friction: 26 },
    })

    return (
        <AnimatedDiv
            style={animation}
            className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_7u4ynvje_1734144256926_raw.jpg-MNC70vBC3Uc3NHLEFZlJPgtezw8q3C.jpeg")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A29] via-[#1E1A29]/80 to-transparent" />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00BCD4] to-[#9C27B0]">
                    Find the Best Tailored Web3 Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-[#E0E0E0]">
                    MatchMaker connects you with the Web3 talent you need to succeed in your projects
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Link href="/auth/register">
                        <Button
                            size="lg"
                            className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white text-lg px-8 py-3 w-full md:w-auto"
                        >
                            Get Started for Free
                        </Button>
                    </Link>
                    <Link href="/swipe">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0]/10 text-lg px-8 py-3 w-full md:w-auto"
                        >
                            Explore Talents
                        </Button>
                    </Link>
                </div>
            </div>
        </AnimatedDiv>
    )
}

