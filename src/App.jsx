import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[860px] mx-auto px-5 sm:px-7">
        <Hero />
        <Journey />
        <Skills />
        <Languages />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
