import { useContext, useState } from "react"
import { LangContext } from "../../context/LangContext"
import Flag from "react-world-flags"
import { Menu, X } from "lucide-react"

const Header = () => {
  const { lang, setLang } = useContext(LangContext)
  const [isOpen, setIsOpen] = useState(false)

  const translateToPortugese = () => setLang("pt")
  const translateToEnglish = () => setLang("us")

  return (
    <>
      <header className="max-w-6xl mx-auto p-6">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo / Nome */}
          <h1 className="text-lg font-medium">
            {lang === "us"
              ? "Marcus • Fullstack Developer"
              : "Marcus • Desenvolvedor Fullstack"}
          </h1>

          {/* Menu desktop */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#skills" className="hover:underline">{lang === "us" ? "Skills" : "Habilidades"}</a></li>
            <li><a href="#projects" className="hover:underline">{lang === "us" ? "Projects" : "Projetos"}</a></li>
            <li><a href="#experience" className="hover:underline">{lang === "us" ? "Experience" : "Experiência"}</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#contact" className="hover:underline">{lang === "us" ? "Contact" : "Contato"}</a></li>
          </ul>

          {/* Botão mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              <li><a href="#skills" onClick={() => setIsOpen(false)}>{lang === "us" ? "Skills" : "Habilidades"}</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>{lang === "us" ? "Projects" : "Projetos"}</a></li>
              <li><a href="#experience" onClick={() => setIsOpen(false)}>{lang === "us" ? "Experience" : "Experiência"}</a></li>
              <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>{lang === "us" ? "Contact" : "Contato"}</a></li>
            </ul>


          </div>
        )}
      </header>
                  {/* Seletor de idioma dentro do mobile menu */}
            <div className="flex items-center justify-center gap-x-4 mt-3">
              <p className="text-sm">{lang === "us" ? "Set language:" : "Selecione o idioma:"}</p>
              <button onClick={translateToPortugese}>
                <Flag code="BR" className="w-10 h-10 rounded shadow" />
              </button>
              <button onClick={translateToEnglish}>
                <Flag code="US" className="w-10 h-10 rounded shadow" />
              </button>
            </div>
    </>
  )
}

export default Header
