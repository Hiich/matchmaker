"use client"

import { useState } from "react"
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

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h2 className="text-[#F5F5F5] text-2xl font-semibold mb-8 text-center">
          Log In
        </h2>

        {/* Form */}
        <form className="space-y-6">
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

          <a
            href="#"
            className="text-[#999999] text-sm hover:text-[#E0E0E0] transition-colors"
          >
            Forgot password?
          </a>

          <Button type="submit" className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">
            Log In
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
                  Connect Wallet
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-[#2A2533] text-[#F5F5F5] border-[#333333]">
                <p>Secure login via your crypto wallet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/auth/register"
            className="text-[#999999] text-sm hover:text-[#E0E0E0] transition-colors"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

