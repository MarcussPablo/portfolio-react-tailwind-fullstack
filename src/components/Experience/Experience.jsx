import { useContext, useState } from "react"
import { LangContext } from "../../context/LangContext"

const Experience = () => {
  const { lang } = useContext(LangContext)
  
  

  const jobs = [
    {
      id: 1,
      title: `${lang === 'us'? 'Topographer':'Topógrafo'}`,
      responsabilities: `${lang === 'us'?'Various topographic survey and earthmoving works carried out at the Abreu e Lima refinery in Pernambuco.':"Diversos trabalhos realizados de levantamento topográfico e terraplanagem na refinaria Abreu e Lima em Pernambuco."}`,
      data: "2007 - 2009",
    },
    {
      id: 2,
      title: `${lang === 'us' ? 'Police Officer':'Policial Militar'}`,
      responsabilities: `${lang === 'us'?'I work as a Police Corporal, quickly analyzing complex situations and making strategic decisions under pressure, while leading teams with discipline — skills I apply in development to debug issues and create efficient solutions':'Trabalho como cabo de polícia, analisando rapidamente situações complexas e tomando decisões estratégicas sob pressão, enquanto lidero equipes com disciplina — habilidades que aplico no desenvolvimento para depurar problemas e criar soluções eficientes'}`,
      data: `2013 - ${lang === 'us'? 'Present Day': 'Dias atuais'}`,
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
