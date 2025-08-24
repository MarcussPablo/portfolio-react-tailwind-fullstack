import { useContext } from "react"
import { LangContext } from "../../context/LangContext"

const Hero = () => {
  const { lang } = useContext(LangContext)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          {lang === "us" ? "Hello, I'm Marcus" : "Olá, eu sou Marcus"}
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {lang === "us"
            ? "Fullstack Developer crafting clean, scalable apps"
            : "Desenvolvedor Fullstack. Crio aplicações limpas e escaláveis"}
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          {lang === "us"
            ? "I specialize in React frontends and Node backends with databases and APIs. Passionate about performance, accessibility, and impactful projects."
            : "Sou especialista em frontend React e backend NodeJS com bancos de dados e APIs. Apaixonado por desempenho, acessibilidade e projetos impactantes."}
        </p>

        {/* Botões */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100 transition"
          >
            {lang === "us" ? "View Projects" : "Ver Projetos"}
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700 transition"
          >
            {lang === "us" ? "Hire me" : "Me contrate"}
          </a>
        </div>
      </div>

      {/* Imagem */}
      <div className="order-first md:order-last">
        <div className="aspect-[4/3] w-full rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm flex items-center justify-center overflow-hidden">
          <img
            src="fotoboa2.png"
            alt="Marcus foto"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
