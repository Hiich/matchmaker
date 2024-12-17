import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, BookmarkPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Profile } from '@/data/test-profiles'
import Image from 'next/image'

interface SwipeActionPopupProps {
  isOpen: boolean
  onClose: () => void
  onStartChat: () => void
  onSaveToOpportunities: () => void
  profile: Profile
}

export function SwipeActionPopup({ isOpen, onClose, onStartChat, onSaveToOpportunities, profile }: SwipeActionPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#1E1A29] p-6 rounded-lg shadow-lg max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#F5F5F5]">It's a match!</h2>
              <button onClick={onClose} className="text-[#999999] hover:text-[#F5F5F5]">
                <X size={24} />
              </button>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-[#F5F5F5] text-lg font-semibold">
                  {profile.name}
                </h3>
                <p className="text-[#00BCD4]">{profile.title}</p>
              </div>
            </div>
            <p className="text-[#E0E0E0] mb-6">
              You've matched with {profile.name}. What would you like to do?
            </p>
            <div className="space-y-4 mt-6">
              <Button
                onClick={onStartChat}
                className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start chatting
              </Button>
              <Button
                onClick={() => {
                  onSaveToOpportunities();
                  onClose();
                }}
                variant="outline"
                className="w-full border-[#9C27B0] text-[#9C27B0] hover:bg-[#9C27B0] hover:text-white"
              >
                <BookmarkPlus className="w-5 h-5 mr-2" />
                Save & Continue swiping
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

