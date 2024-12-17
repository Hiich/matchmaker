"use client"

import { useState, useEffect, useRef } from 'react'
import { ChatHeader } from '../components/ChatHeader'
import { MessageList } from '../components/MessageList'
import { MessageInput } from '../components/MessageInput'
import { ChatSidebar } from '../components/ChatSidebar'
import { ContractCreationModal } from '../components/ContractCreationModal'
import { ProfileModal } from '../components/ProfileModal'
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'

interface Message {
    id: string;
    content: string;
    sender: 'user' | 'contact';
    timestamp: Date;
}

interface Contact {
    name: string;
    avatar: string;
    title: string;
    location: string;
    rating: number;
    bio: string;
    skills: string[];
}

type ChatClientProps = {
    chatId: string
}

export default function ChatClient({ chatId }: ChatClientProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [contact, setContact] = useState<Contact>({
        name: 'Alice Blockchain',
        avatar: '/placeholder.svg?height=32&width=32',
        title: 'Développeuse Blockchain Senior',
        location: 'Paris, France',
        rating: 4.8,
        bio: 'Spécialisée dans le développement de smart contracts et d\'applications décentralisées.',
        skills: ['Solidity', 'Ethereum', 'React', 'Node.js']
    })
    const [isContractModalOpen, setIsContractModalOpen] = useState(false)
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Load messages for this chat
        const loadMessages = async () => {
            try {
                // In a real app, this would be an API call
                setMessages([
                    {
                        id: '1',
                        content: "Hello! I saw your profile and I'm interested in your services.",
                        sender: 'user',
                        timestamp: new Date(2023, 5, 10, 9, 30)
                    },
                    {
                        id: '2',
                        content: "Hi! I'm glad you're interested in my services. How can I help you?",
                        sender: 'contact',
                        timestamp: new Date(2023, 5, 10, 9, 32)
                    },
                ])
            } catch (error) {
                console.error('Failed to load messages:', error)
                // Handle error appropriately
            }
        }

        // Load contact information
        const loadContact = async () => {
            try {
                // In a real app, this would be an API call
                // For now, we're using the default state
            } catch (error) {
                console.error('Failed to load contact:', error)
                // Handle error appropriately
            }
        }

        loadMessages()
        loadContact()
    }, [chatId])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const handleSendMessage = async (content: string) => {
        try {
            const newMessage: Message = {
                id: Date.now().toString(),
                content,
                sender: 'user',
                timestamp: new Date()
            }

            // In a real app, you would send the message to your backend first
            // const response = await sendMessage(chatId, content)

            setMessages(prevMessages => [...prevMessages, newMessage])

            // Simulate a response from the contact after 1 second
            setTimeout(() => {
                const responseMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    content: "Thank you for your message. I'll get back to you soon!",
                    sender: 'contact',
                    timestamp: new Date()
                }
                setMessages(prevMessages => [...prevMessages, responseMessage])
            }, 1000)
        } catch (error) {
            console.error('Failed to send message:', error)
            // Handle error appropriately
        }
    }

    const handleCreateContract = () => {
        setIsContractModalOpen(true)
    }

    const handleProfileClick = () => {
        setIsProfileModalOpen(true)
    }

    const handleCloseContractModal = () => {
        setIsContractModalOpen(false)
    }

    const handleCloseProfileModal = () => {
        setIsProfileModalOpen(false)
    }

    return (
        <div className="h-screen flex bg-[#1E1A29] pt-16 w-full overflow-x-hidden">
            <ChatSidebar />
            <div className="flex-1 flex flex-col w-full">
                <ChatHeader
                    contact={contact}
                    onProfileClick={handleProfileClick}
                />
                <div className="flex-1 overflow-y-auto px-4 py-4">
                    <MessageList messages={messages} />
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-[#2A2533] flex items-center">
                    <Button
                        onClick={handleCreateContract}
                        variant="outline"
                        className="mr-4 bg-[#2A2533] text-[#F5F5F5] hover:bg-[#3A3543] hover:text-[#00BCD4]"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        Créer un contrat
                    </Button>
                    <MessageInput onSendMessage={handleSendMessage} />
                </div>
            </div>
            <ContractCreationModal
                isOpen={isContractModalOpen}
                onClose={handleCloseContractModal}
                contactName={contact.name}
            />
            <ProfileModal
                isOpen={isProfileModalOpen}
                onClose={handleCloseProfileModal}
                profile={contact}
            />
        </div>
    )
}