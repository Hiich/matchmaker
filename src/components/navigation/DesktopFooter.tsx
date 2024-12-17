import Link from 'next/link'
import { Twitter, Linkedin, Github, MessageCircle } from 'lucide-react'

const footerLinks = [
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  {
    title: "About",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Support", href: "/support" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "For Talent", href: "/talent" },
      { name: "For Clients", href: "/clients" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/enterprise" },
    ]
  }
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/matchmaker" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/matchmaker" },
  { name: "GitHub", icon: Github, href: "https://github.com/matchmaker" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.gg/matchmaker" },
]

export function DesktopFooter() {
  return (
    <footer className="hidden md:block bg-[#1E1A29] text-[#E0E0E0] py-12 border-t border-[#2A2533]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#F5F5F5] font-semibold text-base mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-[#F5F5F5] hover:underline transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[#F5F5F5] font-semibold text-base mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E0E0E0] hover:text-[#9C27B0] transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#2A2533] pt-8 mt-8 text-center">
          <p className="text-sm text-[#999999]">
            © {new Date().getFullYear()} MatchMaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

