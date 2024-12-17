"use client"

import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Zap, Shield, Smartphone, ArrowRight } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import { Logo } from '@/components/Logo'

const advantages = [
  { icon: Zap, title: "Intelligent Matching", description: "Based on your specific skills and needs" },
  { icon: Shield, title: "Verified Community", description: "A secure and trusted Web3 environment" },
  { icon: Smartphone, title: "Intuitive Interface", description: "A simple-to-use futuristic experience" },
]

const steps = [
  { title: "Create Your Profile", description: "Showcase your skills and needs" },
  { title: "Browse Offers", description: "Match with services that suit you" },
  { title: "Exchange and Collaborate", description: "Discuss and plan your collaboration" },
]

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 80, friction: 26 },
  })

  const AnimatedDiv = animated('div')
  return (
    <div className="min-h-screen bg-[#1E1A29] text-[#F5F5F5] overflow-hidden">
      <HeroSection />

      <AnimatedDiv ref={ref} style={fadeIn}>
        <section className="py-20 bg-[#2A2533]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-[#1E1A29] p-6 rounded-lg text-center">
                  <advantage.icon className="w-12 h-12 text-[#00BCD4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-[#E0E0E0]">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#9C27B0] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#E0E0E0]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#2A2533]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-[#E0E0E0]">Join our community of Web3 professionals today.</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/auth/register">
                <Button size="lg" className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white text-lg px-8 py-3">
                  Sign Up
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0]/10 text-lg px-8 py-3">
                  Log In
                </Button>
              </Link>
              <Link href="/swipe">
                <Button size="lg" variant="ghost" className="text-[#00BCD4] hover:text-[#B2EBF2] text-lg px-8 py-3">
                  Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedDiv>

      <footer className="bg-[#1E1A29] py-8">
        <div className="container mx-auto px-4 text-center">
          <Logo className="w-12 h-12 mx-auto mb-4" />
          <p className="text-[#E0E0E0] mb-4">MatchMaker - Connect with the best Web3 talents</p>
          <p className="text-sm text-[#999999]">© {new Date().getFullYear()} MatchMaker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

