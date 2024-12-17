import { X, Check, Star } from 'lucide-react'

interface SwipeActionsProps {
  onSwipe: (direction: 'left' | 'right') => void
}

export function SwipeActions({ onSwipe }: SwipeActionsProps) {
  return (
    <div className="flex justify-center items-center space-x-8">
      <button
        onClick={() => onSwipe('left')}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Passer"
      >
        <X className="w-8 h-8 text-red-500" />
      </button>
      <button
        onClick={() => onSwipe('right')}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Accepter"
      >
        <Check className="w-8 h-8 text-green-500" />
      </button>
    </div>
  )
}

