import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  content: string
  sender: 'user' | 'contact'
  timestamp: Date
}

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {}
    messages.forEach(message => {
      const date = message.timestamp.toDateString()
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(message)
    })
    return groups
  }

  const messageGroups = groupMessagesByDate(messages)

  return (
    <div className="space-y-4 w-full">
      <AnimatePresence>
        {Object.entries(messageGroups).map(([date, msgs]) => (
          <div key={date}>
            <div className="text-center my-4">
              <span className="text-[#999999] text-xs bg-[#1E1A29] px-2 py-1 rounded-full">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            {msgs.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[85%] break-words ${
                    message.sender === 'user'
                      ? 'bg-[#9C27B0] text-white'
                      : 'bg-[#2F2A3A] text-[#F5F5F5]'
                  }`}
                >
                  <p className="text-sm md:text-base">{message.content}</p>
                  <span className="text-xs opacity-75 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}

