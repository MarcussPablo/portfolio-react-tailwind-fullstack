

import { useContext } from "react"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Peojects"
import Skills from "./components/Skill/Skills"

import { LangContext } from "./context/LangContext"
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton.jsx"

const App = ()=>{
  const {lang} = useContext(LangContext)
  return(
    <div>
      <Header/>
      <WhatsAppButton phoneNumber="5581986236056" message={lang === 'us'?'Hello, I want a website.':'Olá, eu quero um site'} />
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App