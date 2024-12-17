import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, DollarSign } from 'lucide-react'

interface Project {
  id: number
  name: string
  publishDate: Date
  skills: string[]
  description: string
  budget: string
  duration: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2A2533] text-[#F5F5F5] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-[#E0E0E0]">
              <span className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                Published: {project.publishDate.toLocaleDateString()}
              </span>
            </div>
            <div>
              <h4 className="text-[#00BCD4] font-semibold mb-2">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <p key={index} className="text-xs bg-[#1E1A29] text-[#F5F5F5] px-2 py-1 rounded-full">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#00BCD4] font-semibold mb-2">Project Description:</h4>
              <p className="text-[#E0E0E0] text-sm">{project.description}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-[#E0E0E0]">
              <span className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Budget: {project.budget}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Duration: {project.duration}
              </span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

