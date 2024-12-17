import { useState, useRef, useEffect } from 'react'
import { Paperclip, Send } from 'lucide-react'

interface MessageInputProps {
  onSendMessage: (content: string) => void
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex items-center space-x-2">
      <button
        type="button"
        className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
        aria-label="Attach file"
      >
        <Paperclip className="h-6 w-6" />
      </button>
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-[#1E1A29] text-[#E0E0E0] placeholder-[#999999] border border-[#333333] rounded-lg p-2 min-h-[44px] max-h-[120px] resize-none"
        style={{ overflow: 'hidden' }}
      />
      <button
        type="submit"
        className={`text-[#00BCD4] hover:text-[#B2EBF2] transition-colors ${
          !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!message.trim()}
        aria-label="Send message"
      >
        <Send className="h-6 w-6" />
      </button>
    </form>
  )
}

