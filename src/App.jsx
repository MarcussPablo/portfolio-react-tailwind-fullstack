

import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Peojects"
import Skills from "./components/Skill/Skills"

const App = ()=>{
  return(
    <div>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App