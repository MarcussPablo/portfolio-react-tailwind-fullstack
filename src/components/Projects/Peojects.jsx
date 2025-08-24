import { useContext } from "react"
import { LangContext } from "../../context/langContext"
import { ExternalLink, Github } from "lucide-react" // Ícones

const Projects = () => {
  const { lang } = useContext(LangContext)

  return (
    <section id="projects" className="border-t py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">
          {lang === "us" ? "Projects" : "Projetos"}
        </h3>
        <p className="mt-2 text-slate-600">
          {lang === "us"
            ? "A selection of my fullstack and frontend projects."
            : "Uma seleção dos meus projetos Fullstack e Frontend"}
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {[1, 2].map((id) => (
            <li
              key={id}
              className="rounded-lg border p-5 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-medium">Project Title {id}</h4>
              <p className="mt-1 text-slate-600">
                Short description of project {id} and what tech it uses.
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                <a
                  className="flex items-center gap-1 underline hover:text-blue-600"
                  href="#"
                >
                  <ExternalLink size={16} />{" "}
                  {lang === "us" ? "View online" : "Ver online"}
                </a>
                <a
                  className="flex items-center gap-1 underline hover:text-gray-700"
                  href="#"
                >
                  <Github size={16} />{" "}
                  {lang === "us" ? "View in Github" : "Ver no Github"}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
