import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Languages />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
