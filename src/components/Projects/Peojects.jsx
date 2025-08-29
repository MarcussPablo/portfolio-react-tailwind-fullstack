import { useContext } from "react"
import { LangContext } from "../../context/LangContext"
import { ExternalLink, Github } from "lucide-react" // Ícones

const Projects = () => {
  const { lang } = useContext(LangContext)
  const projects = [{
    id:1,
    name:`${lang === 'us'?"Static QRcode Pix generator(you need a brasilian banc service)" : 'Gerador de QrCode estático para pix'}`,
    description:'Gera e imprime ou baixa gratuitamente um Qrcode estático para suas chaves pix.',
    image:'/imgGeradorPix.png'
  }]

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
          {projects.map((p) => (
            <li
              key={p.id}
              className="rounded-lg border p-5 shadow-sm hover:shadow-md transition"
            >
              <img src={p.image} alt="" className="shadow" />
              <h4 className="text-lg font-medium"> {p.name}</h4>
              <p className="mt-1 text-slate-600">
                {p.description}.
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                <a
                  className="flex items-center gap-1 underline hover:text-blue-600"
                  href="/qrcode" target="_blank"
                >
                  <ExternalLink size={16} />{" "}
                  {lang === "us" ? "View online" : "Ver online"}
                </a>
                <a
                  className="flex items-center gap-1 underline hover:text-gray-700"
                  href="https://github.com/MarcussPablo/portfolio-react-tailwind-fullstack"
                  target="_blank"
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
