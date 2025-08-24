import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

const Experience = () => {
  const { lang } = useContext(LangContext)

  const jobs = [
    {
      id: 1,
      title: "Topógrafo",
      responsabilities: "jkhfgjsdfhshfjsahfadjsfhlj",
      data: "2001 - 2005",
    },
    {
      id: 2,
      title: "Policial",
      responsabilities: "gdfahsgjkdsh",
      data: "2005 - Nowadays",
    },
  ]

  return (
    <section id="experience" className="border-t py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          {lang === "us" ? "Experience" : "Experiência"}
        </h3>

        {/* Lista de experiências */}
        <ul className="mt-10 space-y-10 relative border-l border-slate-300">
          {jobs.map((j) => (
            <li key={j.id} className="pl-6 relative">
              {/* bolinha da timeline */}
              <span className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-blue-600"></span>

              <h4 className="text-lg sm:text-xl font-medium">
                {j.title}
              </h4>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                {j.responsabilities}.
              </p>
              <p className="mt-1 text-xs text-slate-500">{j.data}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience

//comita essa porra
