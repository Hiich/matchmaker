import { Inter } from 'next/font/google'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/navigation/Footer'
import { DesktopFooter } from '@/components/navigation/DesktopFooter'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MatchMaker',
  description: 'Find the best tailored Web3 services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1E1A29] text-[#F5F5F5] flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-16 pb-20 md:pb-0 mx-auto container">
          {children}
        </main>
        <Footer />
        <DesktopFooter />
      </body>
    </html>
  )
}

