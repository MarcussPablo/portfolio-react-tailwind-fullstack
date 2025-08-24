import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent! (hook up backend here)")
  }

  const { lang } = useContext(LangContext)

  return (
    <section id="contact" className="border-t py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          {lang === "us" ? "Contact" : "Contato"}
        </h3>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 max-w-lg mx-auto sm:mx-0"
        >
          <input
            name="name"
            placeholder={lang === "us" ? "Your Name" : "Seu nome"}
            className="rounded-lg border px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />

          <input
            name="email"
            type="email"
            placeholder={lang === "us" ? "you@domain.com" : "seuemail@email.com"}
            className="rounded-lg border px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder={lang === "us" ? "Message" : "Mensagem"}
            className="rounded-lg border px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          ></textarea>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-white font-medium hover:bg-slate-800 focus:ring-2 focus:ring-blue-500 transition"
          >
            {lang === "us" ? "Send Message" : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
