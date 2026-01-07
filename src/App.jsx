import Navbar from './components/Navbar'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App