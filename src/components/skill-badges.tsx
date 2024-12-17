interface SkillBadgesProps {
  skills: string[]
}

export function SkillBadges({ skills }: SkillBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-[#2A2533] text-[#F5F5F5] px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

