import { ProjectDisplay } from '../components/ProjectDisplay'

type PageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params

  
  return <ProjectDisplay projectId={id} />
}

