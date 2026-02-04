import Hero from './components/Hero'
import AboutMe from '@/app/components/AboutMe'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import ProblemSolving from './components/ProblemSolving'
import LeadershipExperience from './components/LeadershipExperience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'


export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <ProblemSolving />
      <Education />
      <Certifications />
      <Contact />
    </>
  )
}