import { Metadata } from 'next'
import ChatClient from '../components/ChatClient'

type PageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  title: 'Chat | MatchMaker',
  description: 'Chat with your matches',
}

export default async function ChatPage({ params }: PageProps) {
  // Wait for the params to resolve
  const { id } = await params

  return <ChatClient chatId={id} />
}