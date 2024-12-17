import { CreditCard, Bitcoin } from 'lucide-react'

export function PaymentOptions() {
  return (
    <div className="bg-[#2A2533] rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <CreditCard className="w-8 h-8 text-[#F5F5F5]" />
        <span className="text-[#F5F5F5] text-lg">Carte bancaire</span>
      </div>
      <div className="flex items-center space-x-4">
        <Bitcoin className="w-8 h-8 text-[#F5F5F5]" />
        <span className="text-[#F5F5F5] text-lg">Crypto-monnaie</span>
      </div>
      <p className="text-[#999999] mt-4">
        Les prix sont affichés en USD. La conversion en crypto-monnaie sera effectuée au moment de l'achat.
      </p>
      <p className="text-[#999999] mt-2">
        En effectuant un achat, vous acceptez nos conditions générales de vente.
      </p>
    </div>
  )
}

