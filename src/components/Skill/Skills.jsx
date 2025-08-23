import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Skills = () => {
const {lang} = useContext(LangContext)
return(
<section id="skills" className="border-t py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-semibold">{lang === 'us'? 'Skills':"Habilidades"}</h3>
<ul className="mt-6 flex flex-wrap gap-3 text-sm">
{['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap','Stiled-Components', 'Sass', 'Node', 'Postgres', 'Git'].map(skill => (
<li key={skill} className="rounded-lg border px-3 py-1">{skill}</li>
))}
</ul>
</div>
</section>
)

}

export default Skills