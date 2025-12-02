import { ProjectGrid } from '@/components/ProjectGrid'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/Section'
import { ProjectsHeader } from '@/components/ProjectsHeader'

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <Section>
        <ProjectsHeader />
        <ProjectGrid showAll />
      </Section>
      <Footer />
    </main>
  )
}
