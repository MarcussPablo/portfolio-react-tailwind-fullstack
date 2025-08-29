
import { useContext } from "react"


import { LangContext } from "../../context/LangContext"
import Header from "../../components/Header/Header"
import WhatsAppButton from "../../components/wtp/wtp"
import Hero from "../../components/Hero/Hero"
import Skills from "../../components/Skill/Skills"
import Projects from "../../components/Projects/Peojects"
import Experience from "../../components/Experience/Experience"
import Education from "../../components/Education/Education"

import Footer from "../../components/Footer/Footer"
import ServicosOnline from "../../components/ServicosOnline/ServicosOnline"
import Contact from "../../components/Contact/Contact"



const Home= ()=>{
  const {lang} = useContext(LangContext)
  return(
    <div>
      <Header/>
      <WhatsAppButton/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <ServicosOnline/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home