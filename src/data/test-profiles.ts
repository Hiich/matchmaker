export interface Profile {
  id: number;
  name: string;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  skills: string[];
  isMatch: boolean;
  experiences?: Array<{ title: string; company: string; period: string }>;
  portfolio?: Array<{ id: string; title: string; image: string }>;
  pricing?: { hourlyRate: string; availability: string };
  reviews?: { average: number; count: number; comments: Array<{ id: string; author: string; rating: number; comment: string }> };
}

export const testProfiles: Profile[] = [
  {
    id: 1,
    name: "Alice Blockchain",
    title: "Développeuse DApp Ethereum",
    location: "Paris, France",
    price: "0.5 ETH/heure",
    description: "Spécialisée dans le développement de smart contracts et d'interfaces utilisateur pour applications décentralisées sur Ethereum.",
    image: "/placeholder.svg?height=400&width=400&text=Alice",
    skills: ["Solidity", "React", "Web3.js", "Truffle"],
    isMatch: true,
    experiences: [
      { title: "Développeuse Senior", company: "BlockChain Inc.", period: "2020 - Présent" },
      { title: "Développeuse Solidity", company: "DeFi Solutions", period: "2018 - 2020" }
    ],
    portfolio: [
      { id: "1", title: "DeFi Lending Platform", image: "/placeholder.svg?height=150&width=150" },
      { id: "2", title: "NFT Marketplace", image: "/placeholder.svg?height=150&width=150" },
      { id: "3", title: "DAO Governance Tool", image: "/placeholder.svg?height=150&width=150" }
    ],
    pricing: {
      hourlyRate: "0.5 ETH",
      availability: "Disponible 20h/semaine"
    },
    reviews: {
      average: 4.8,
      count: 27,
      comments: [
        { id: "1", author: "John D.", rating: 5, comment: "Excellent travail, très professionnelle!" },
        { id: "2", author: "Sarah M.", rating: 4, comment: "Bonne communication et livrables de qualité." }
      ]
    }
  },
  {
    id: 2,
    name: "Bob NFT",
    title: "Designer NFT",
    location: "New York, USA",
    price: "2500 USDC/projet",
    description: "Créateur d'art numérique unique pour collections NFT avec une expérience dans les mondes virtuels.",
    image: "/placeholder.svg?height=400&width=400&text=Bob",
    skills: ["Illustrator", "Blender", "After Effects", "Unity"],
    isMatch: false
  },
  {
    id: 3,
    name: "Charlie DeFi",
    title: "Expert en Finance Décentralisée",
    location: "Londres, UK",
    price: "300 DAI/heure",
    description: "Consultant en stratégies DeFi, spécialisé dans l'optimisation des rendements et la gestion des risques.",
    image: "/placeholder.svg?height=400&width=400&text=Charlie",
    skills: ["Yield Farming", "Tokenomics", "Smart Contract Auditing"],
    isMatch: true
  },
  {
    id: 4,
    name: "Diana Crypto",
    title: "Analyste en Cryptomonnaies",
    location: "Singapour",
    price: "200 USDT/heure",
    description: "Analyse technique et fondamentale des cryptomonnaies, prévisions de marché et conseils d'investissement.",
    image: "/placeholder.svg?height=400&width=400&text=Diana",
    skills: ["Technical Analysis", "Fundamental Analysis", "Market Research"],
    isMatch: false
  },
  {
    id: 5,
    name: "Ethan Metaverse",
    title: "Architecte de Mondes Virtuels",
    location: "Tokyo, Japon",
    price: "3000 MANA/semaine",
    description: "Création d'expériences immersives et d'environnements interactifs pour le métaverse.",
    image: "/placeholder.svg?height=400&width=400&text=Ethan",
    skills: ["3D Modeling", "VR Development", "Unreal Engine", "Decentraland"],
    isMatch: true
  }
];

