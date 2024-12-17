"use client"

import { useState } from 'react'
import { TokenPackCard } from './components/token-pack-card'
import { PaymentOptions } from './components/payment-options'
import { PurchaseConfirmationModal } from './components/purchase-confirmation-modal'

// Example token pack data
const tokenPacks = [
  {
    id: 1,
    name: "Starter Pack",
    tokens: 100,
    price: 9.99,
    currency: "USD"
  },
  {
    id: 2,
    name: "Standard Pack",
    tokens: 500,
    price: 39.99,
    currency: "USD"
  },
  {
    id: 3,
    name: "Premium Pack",
    tokens: 1000,
    price: 69.99,
    currency: "USD"
  }
]

export default function ShopPage() {
  const [selectedPack, setSelectedPack] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePurchase = (pack: any) => {
    setSelectedPack(pack)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#1E1A29] p-4">
      <h2 className="text-[#F5F5F5] text-2xl font-semibold mb-6">Shop</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokenPacks.map((pack) => (
          <TokenPackCard key={pack.id} pack={pack} onPurchase={handlePurchase} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-[#F5F5F5] text-xl font-semibold mb-4">Payment Options</h3>
        <PaymentOptions />
      </div>

      <PurchaseConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pack={selectedPack}
      />
    </div>
  )
}

