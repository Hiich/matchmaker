import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContractCreationModalProps {
  isOpen: boolean
  onClose: () => void
  contactName: string
}

export function ContractCreationModal({ isOpen, onClose, contactName }: ContractCreationModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [deadline, setDeadline] = useState('')

  const handleCreateContract = () => {
    // Here you would typically send the contract data to your backend
    console.log('Contract created:', { title, description, amount, deadline })
    // For now, we'll just close the modal
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2A2533] text-[#F5F5F5] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Créer un contrat avec {contactName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Titre
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3 bg-[#1E1A29] border-[#3A3543] text-[#F5F5F5]"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3 bg-[#1E1A29] border-[#3A3543] text-[#F5F5F5]"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Montant
            </Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="col-span-3 bg-[#1E1A29] border-[#3A3543] text-[#F5F5F5]"
              type="number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Échéance
            </Label>
            <Input
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="col-span-3 bg-[#1E1A29] border-[#3A3543] text-[#F5F5F5]"
              type="date"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateContract} className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">
            Créer le contrat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

