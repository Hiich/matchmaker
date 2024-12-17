import { Hexagon } from 'lucide-react'

interface SkillsSectionProps {
  skills: string[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h3 className="text-[#F5F5F5] text-lg font-semibold mb-4 flex items-center">
        <Hexagon className="w-5 h-5 mr-2 text-[#00BCD4]" />
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#2A2533] text-[#F5F5F5] px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

