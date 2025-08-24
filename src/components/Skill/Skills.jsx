import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

const Skills = () => {
  const { lang } = useContext(LangContext)

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Bootstrap",
    "Styled-Components",
    "Sass",
    "Node",
    "Postgres",
    "Git",
  ]

  return (
    <section id="skills" className="border-t py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          {lang === "us" ? "Skills" : "Habilidades"}
        </h3>

        <ul className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          {skills.map((skill, index) => (
            <li
              key={skill}
              className={`rounded-lg px-3 py-1 text-sm font-medium border transition-colors duration-200 cursor-default
                ${index % 3 === 0 ? "bg-blue-100 text-blue-800 border-blue-200" : ""}
                ${index % 3 === 1 ? "bg-green-100 text-green-800 border-green-200" : ""}
                ${index % 3 === 2 ? "bg-purple-100 text-purple-800 border-purple-200" : ""}
                hover:scale-105`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
