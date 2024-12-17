import { CalendarDays, Clock, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  name: string
  publishDate: Date
  skills: string[]
  description: string
  budget: string
  duration: string
}

interface ProjectCardProps {
  project: Project
  onNameClick: (project: Project) => void
}

export function ProjectCard({ project, onNameClick }: ProjectCardProps) {
  const router = useRouter()

  const handleBidClick = () => {
    router.push(`/project/${project.id}`)
  }

  return (
    <div className="bg-[#2A2533] rounded-lg overflow-hidden w-full h-[380px] flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-3 overflow-hidden flex-grow">
          <h3 
            className="text-white text-lg font-semibold truncate cursor-pointer hover:text-[#9C27B0] transition-colors"
            onClick={() => onNameClick(project)}
          >
            {project.name}
          </h3>
          <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
            <span className="flex items-center">
              <CalendarDays className="w-3 h-3 mr-1" />
              {project.publishDate.toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 h-6 overflow-hidden">
            {project.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-[#1E1A29] text-[#F5F5F5] px-2 py-1 rounded-full whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-[#E0E0E0] text-xs line-clamp-3">
            {project.description}
          </p>
          <div className="flex items-center justify-between text-xs text-[#E0E0E0]">
            <span className="flex items-center">
              <DollarSign className="w-3 h-3 mr-1" />
              {project.budget}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {project.duration}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <Button
            className="w-full bg-[#9C27B0] hover:bg-[#7B1FA2] text-white"
            onClick={handleBidClick}
          >
            Bid
          </Button>
        </div>
      </div>
    </div>
  )
}

