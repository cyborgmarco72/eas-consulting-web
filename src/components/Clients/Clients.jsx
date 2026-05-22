export default function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">
            Confianza que respalda
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Clientes & Partners
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-[#005596] to-emerald-500 rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-xl text-lg leading-relaxed">
            Empresas líderes en México y Latinoamérica confían en EAS Consulting para transformar sus operaciones con SAP.
          </p>
        </div>

        {/* Imagen */}
        <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-slate-200">
          <img
            src="/images/clientes-aliados.png"
            alt="Clientes y Partners EAS Consulting"
            className="w-full block object-cover"
          />
        </div>

      </div>
    </section>
  )
}