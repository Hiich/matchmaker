"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Confetti from 'react-confetti'
import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function CelebrationPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showConfetti, setShowConfetti] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000)

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  const handleExplore = () => {
    router.push('/swipe')
  }

  return (
    <div className="min-h-screen bg-[#1E1A29] flex flex-col items-center justify-center p-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={['#9C27B0', '#00BCD4', '#E1BEE7', '#B2EBF2']}
          numberOfPieces={200}
          recycle={false}
        />
      )}
      <div className="text-center z-10">
        <h2 className="text-[#F5F5F5] text-3xl font-semibold mb-4 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 mr-2 text-[#00BCD4]" />
          Félicitations ! 🎉
        </h2>
        <p className="text-[#E0E0E0] text-lg mb-8 max-w-md">
          Votre inscription est terminée. Vous êtes prêt à découvrir les meilleurs services Web3 !
        </p>
        <Button 
          onClick={handleExplore}
          className="w-4/5 max-w-sm bg-[#9C27B0] hover:bg-[#7B1FA2] text-[#F5F5F5] text-lg py-3 rounded-lg"
        >
          Commencer à explorer
        </Button>
      </div>
    </div>
  )
}

