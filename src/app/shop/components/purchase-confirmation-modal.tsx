import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TokenPack {
  id: number
  name: string
  tokens: number
  price: number
  currency: string
}

interface PurchaseConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  pack: TokenPack | null
}

export function PurchaseConfirmationModal({ isOpen, onClose, pack }: PurchaseConfirmationModalProps) {
  if (!pack) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2A2533] text-[#F5F5F5]">
        <DialogHeader>
          <DialogTitle>Confirmation d'achat</DialogTitle>
          <DialogDescription>
            Vous avez acheté le pack suivant :
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-lg font-semibold">{pack.name}</p>
          <p className="text-[#00BCD4]">{pack.tokens} tokens</p>
          <p className="text-xl font-bold mt-2">
            ${pack.price.toFixed(2)}
          </p>
        </div>
        <p className="text-[#999999] text-sm">
          Les tokens seront ajoutés à votre compte dans les prochaines minutes.
        </p>
        <Button onClick={onClose} className="w-full mt-4 bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">
          Fermer
        </Button>
      </DialogContent>
    </Dialog>
  )
}

