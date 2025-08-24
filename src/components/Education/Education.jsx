import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Education = () => {
  const { lang } = useContext(LangContext)

  const studies = [
    {
      id: 1,
      course: "Computer Science",
      school: "University XYZ",
      period: "2000 - 2004"
    },
    {
      id: 2,
      course: "Fullstack Web Development Bootcamp",
      school: "Some Coding Bootcamp",
      period: "2022 - 2023"
    }
  ]

  return (
    <section id="education" className="border-t py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">
          {lang === "us" ? "Education" : "Educação"}
        </h3>

        <ul className="mt-6 space-y-6">
          {studies.map((study) => (
            <li key={study.id} className="border-l-4 border-slate-900 pl-4">
              <h4 className="text-lg font-medium">{study.course}</h4>
              <p className="text-slate-600">{study.school}</p>
              <p className="text-xs text-slate-500">{study.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
