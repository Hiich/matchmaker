import { useState } from 'react'
import Image from 'next/image'
import { Folder, X } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  image: string
}

interface PortfolioSectionProps {
  portfolio: PortfolioItem[]
}

export function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  return (
    <section className="mb-12">
      <h3 className="text-[#F5F5F5] text-xl font-semibold mb-6 flex items-center">
        <Folder className="w-6 h-6 mr-2 text-[#00BCD4]" />
        Portfolio
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {portfolio.map((item) => (
          <div key={item.id} className="relative" onClick={() => setSelectedItem(item)}>
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="rounded-lg object-cover cursor-pointer w-full h-40"
            />
            <p className="text-[#E0E0E0] text-sm mt-2">{item.title}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1E1A29] p-6 rounded-lg max-w-3xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[#F5F5F5] font-semibold text-xl">{selectedItem.title}</h4>
              <button onClick={() => setSelectedItem(null)} className="text-[#F5F5F5] hover:text-[#9C27B0] transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={800}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

