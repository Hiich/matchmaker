import { Briefcase } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="mb-12">
      <h3 className="text-[#F5F5F5] text-xl font-semibold mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-[#00BCD4]" />
        Experience
      </h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#2A2533] p-6 rounded-lg">
            <h4 className="text-[#F5F5F5] font-semibold text-lg">{exp.title}</h4>
            <p className="text-[#00BCD4] text-sm mb-2">{exp.company}</p>
            <p className="text-[#999999] text-sm">{exp.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

