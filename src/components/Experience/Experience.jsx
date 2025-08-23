import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Experience = () => {

const {lang} = useContext(LangContext)

const jobs =[
    {
        id:1,
        title:'Topografo',
        responsabilities:'jkhfgjsdfhshfjsahfadjsfhlj',
        data:'2001 - 2005'
    },
    {
        id:2,
        title:'Policial',
        responsabilities:'gdfahsgjkdsh',
        data:'2005 - NowDays'
    }
]

return(
<section id="experience" className="border-t py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-semibold">{lang === 'us'? 'Experience':"Experiência"}</h3>
<ul className="mt-6 space-y-6">
{jobs.map(j => (
<li key={j.id}>
<h4 className="text-lg font-medium">{j.id} — {j.title}</h4>
<p className="text-slate-600">{j.responsabilities}.</p>
<p className="text-xs text-slate-500">{j.data}</p>
</li>
))}
</ul>
</div>
</section>  
)

}

export default Experience