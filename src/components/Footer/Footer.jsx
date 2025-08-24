const Footer = () => (
  <footer className="border-t py-6 mt-12 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600 gap-4">
      {/* Texto */}
      <p className="text-center sm:text-left">
        © {new Date().getFullYear()} Marcus — Fullstack Developer Portfolio
      </p>

      {/* Links sociais (exemplo) */}
      <div className="flex gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
