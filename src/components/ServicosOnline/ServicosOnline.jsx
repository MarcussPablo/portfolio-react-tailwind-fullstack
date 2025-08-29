const ServicosOnline = () => {
    return (
        <section id="servicosOnline" className="border-t py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-12">
                    Seviços online gratúitos:
                </h3>
                <div className="border border-gray-500 rounded p-3 ">

                    <h3 className="py-2 mt-3 text-2xl font-semibold">Gerador de QrCode estático para pix.</h3>
                    <h4 className="mt-3 text-2xl font-normal">Gere e imprima ou baixe gratuitamente um Qrcode estático para suas chaves pix.</h4>
                    <p>Muito útil para você que tem um comércio e precisa agilizar os recebimentos via pix.</p>
                    <a
                        href="/qrcode" target="_blank"
                        className="inline-block sm:px-2 py-2 mt-3 rounded bg-blue-600 text-white  sm:text-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                    >
                        Confira
                    </a>
                </div>
            </div>
        </section>
    )
}
export default ServicosOnline