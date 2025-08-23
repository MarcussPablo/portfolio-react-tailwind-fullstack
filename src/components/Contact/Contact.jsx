import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Contact = () => {
const handleSubmit = (e) => {
e.preventDefault()
alert('Message sent! (hook up backend here)')
}
const {lang} = useContext(LangContext)
return (
<section id="contact" className="border-t py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-semibold">{lang === 'us'?"Contact":'Contato'}</h3>
<form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-lg">
<input name="name" placeholder={lang === 'us'? 'your Name': 'Seu nome'} className="rounded-lg border px-3 py-2" required />
<input name="email" type="email" placeholder={lang === 'us'? 'you@domain.com': 'seuemail@email.com'} className="rounded-lg border px-3 py-2" required />
<textarea name="message" rows={5} placeholder={lang === 'us'? 'Message': 'Mensagem'} className="rounded-lg border px-3 py-2" required></textarea>
<button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-white">Send Message</button>
</form>
</div>
</section>
)
}

export default Contact