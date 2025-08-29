const ServicosOnline = () =>{
    return(
<section id="servicosOnline" className="border-t py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-12">
        Seviços online gratúitos:
    </h3>
    <a
    href="/qrcode" target="_blank"
    className="sm:px-2 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
  >
    Gerador de QrCode estático para pix
  </a>
  </div>
</section>
    )
}
export default ServicosOnline