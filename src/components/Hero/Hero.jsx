import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Hero = () => {
const {lang} = useContext(LangContext)
return(
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm uppercase tracking-wide text-slate-500">{lang === 'us'? 'Hello, Im Marcus': "Olá, eu sou Marcus"}</p>
<h2 className="mt-2 text-4xl font-bold leading-tight">{lang === 'us'? 'Fullstack Developer crafting clean, scalable apps': "Desenvolvedor Fullstack. Crio aplicações limpas e escaláveis"}</h2>
<p className="mt-4 text-slate-600">{lang === 'us'? 'I specialize in React frontends and Node backends with databases and APIs. Passionate about performance, accessibility, and impactful projects.': "Sou especialista em frontend React e backend NodeJS com bancos de dados e APIs. Apaixonado por desempenho, acessibilidade e projetos impactantes."}</p>
<div className="mt-6 flex gap-3">
<a href="#projects" className="rounded-lg border px-4 py-2 text-sm">{lang === 'us'? 'View Projects': "Ver Projetos."}</a>
<a href="#contact" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">{lang === 'us'? 'Hire me': "Me contrate."}</a>
</div>
</div>
<div className="order-first md:order-last">
<div className="aspect-[4/3] w-full rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm flex items-center justify-center text-slate-400">
<img src="fotoboa2.png" alt="" />
</div>
</div>
</section>)

}

export default Hero