import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

const Education = () => {
  const { lang } = useContext(LangContext)

  const studies = [
    {
      id: 1,
      course: `${lang === 'us'?'Systems Analysis and Development':'Análise e Desenvolvimento de Sistemas'}`,
      school: "UNINASSAU - EAD",
      period: "2024 - 2026"
    },
    {
      id: 2,
      course:`${lang === 'us'?"Fullstack Web Development Bootcamps":'Bootcamps Fullstack Development'}` ,
      school: "DIO - Digital Inovation One",
      period: `${lang === 'us'? '2023 - Present day': '2023 - dias Atuais'}`,
      link : 'https://www.dio.me/users/pavlolins'
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
              {study.link && (
  <p>
    {lang === 'us' ? (
      <>See more at: <a className='text-blue-800' href={study.link} target="_blank">My DIO profile</a></>
    ) : (
      <>Veja mais em: <a className='text-blue-800' href={study.link} target="_blank">Meu perfil DIO</a></>
    )}
  </p>
)}

            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
