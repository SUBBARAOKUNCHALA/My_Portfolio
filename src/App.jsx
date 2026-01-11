import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AIWork from './components/AIWork'
import Contact from './components/Contact'
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AIWork />
      <Contact />
      <ScrollToTopButton/>
    </div>
  )
}
