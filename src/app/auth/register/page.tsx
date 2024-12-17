"use client"

import { createUser } from "@/actions/user/write"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import { Wallet } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function RegisterPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    wallet: "",
    name: "",
    title: "",
    location: "",
    price: "",
    description: "",
    image: "" // You might want to handle this separately with file upload
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Wallet address validation
    if (!formData.wallet) {
      newErrors.wallet = "Wallet address is required"
    } else if (!/^0x[a-fA-F0-9]{40}$/.test(formData.wallet)) {
      newErrors.wallet = "Invalid Ethereum wallet address"
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "Professional title is required"
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required"
    }

    // Price validation
    if (!formData.price) {
      newErrors.price = "Price is required"
    } else if (isNaN(Number(formData.price)) || Number(formData.price) < 0) {
      newErrors.price = "Price must be a valid positive number"
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 20) {
      newErrors.description = "Description must be at least 20 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        className: "bg-red-500 text-white border-none",
      })
      return
    }

    try {
      const user = await createUser(formData)
      toast({
        title: "User created",
        description: "User created successfully",
        className: "bg-green-500 text-white border-none",
      })
      console.log(user)
      router.push('/profile')
    } catch (error) {
      toast({
        title: "Error",
        description: "Error creating user",
        className: "bg-red-500 text-white border-none",
      })
    }
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

        {/* Updated Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="wallet" className="text-[#E0E0E0] text-sm">
              Wallet Address
            </Label>
            <Input
              id="wallet"
              name="wallet"
              type="text"
              required
              value={formData.wallet}
              onChange={handleChange}
              className={`bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA] ${
                errors.wallet ? 'border-red-500' : ''
              }`}
            />
            {errors.wallet && (
              <p className="text-red-500 text-sm mt-1">{errors.wallet}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#E0E0E0] text-sm">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-[#E0E0E0] text-sm">
              Professional Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-[#E0E0E0] text-sm">
              Location
            </Label>
            <Input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-[#E0E0E0] text-sm">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              type="text"
              required
              value={formData.price}
              onChange={handleChange}
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-[#E0E0E0] text-sm">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              type="text"
              required
              value={formData.description}
              onChange={handleChange}
              className="bg-[#2A2533] border-[#333333] text-[#F5F5F5] placeholder-[#AAAAAA]"
            />
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

