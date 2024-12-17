"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Wallet } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Logo } from "@/components/Logo"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally add logic to register the user
    console.log("Registration with:", email, password)
    // Redirect to profile page
    router.push('/profile')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#1E1A29] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Logo className="w-8 h-8 mr-4" />
          <h2 className="text-[#F5F5F5] text-2xl font-semibold">
            Sign Up
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#E0E0E0] text-sm">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#E0E0E0] text-sm">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA] pr-10"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#AAAAAA]"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">
            Sign Up
          </Button>
        </form>

        <div className="mt-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white border-none"
                >
                  <Wallet className="w-5 h-5 mr-2" />
                  Sign Up with Wallet
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-[#2A2533] text-[#F5F5F5] border-[#333333]">
                <p>Secure sign up via your crypto wallet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/auth"
            className="text-[#999999] text-sm hover:text-[#E0E0E0] transition-colors"
          >
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

