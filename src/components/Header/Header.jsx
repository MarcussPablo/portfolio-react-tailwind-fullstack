import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Header = () => {
const {lang, setLang} = useContext(LangContext)
const translateToPortugese = () => setLang('pt')
const translateToEnglish = () => setLang('us')
return(
<header className="max-w-6xl mx-auto p-6">
<nav className="flex items-center justify-between" aria-label="Main navigation">
<h1 className="text-lg font-medium">{lang === 'us'? 'Marcus • Fullstack Developer': "Marcus • Desenvolvedor Fullstack "}</h1>
<div className="flex gap-6">
    <button className="hover:underline"
    onClick={translateToPortugese}
    >PT</button>
    <button className="hover:underline"
    onClick={translateToEnglish}
    >US</button>
</div>
<ul className="flex gap-6 text-sm">
<li><a href="#skills" className="hover:underline">{lang === 'us'? 'Skills': "Habilidades"}</a></li>
<li><a href="#projects" className="hover:underline">{lang === 'us'? 'Projects': "Projetos"}</a></li>
<li><a href="#experience" className="hover:underline">{lang === 'us'? 'Experience': "Experiencia"}</a></li>
<li><a href="#blog" className="hover:underline">{lang === 'us'? 'Blog': "Blog"}</a></li>
<li><a href="#contact" className="hover:underline">{lang === 'us'? 'Contact': "Contato"}</a></li>
</ul>
</nav>
</header>
)

}

export default Header