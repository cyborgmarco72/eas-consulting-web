const partners = [
  {
    name: "SAP Silver Partner",
    logo: "/images/logo-sap-silver.png",
    desc: "Certificación oficial que avala nuestra expertise en implementación de soluciones SAP."
  },
  {
    name: "VOQUZ Labs",
    logo: "/images/logo-voquz.png",
    desc: "Alianza estratégica para gestión de licencias SAP y optimización de costos."
  },
  {
    name: "Accountfy",
    logo: "/images/logo-accountfy.png",
    desc: "Plataforma líder en consolidación financiera y reporteo corporativo enterprise."
  }
]

export default function Partners() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">
            Respaldo Global
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Partners & Alianzas
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-[#005596] to-emerald-500 rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-xl text-lg leading-relaxed">
            Trabajamos con los líderes tecnológicos globales para ofrecerte soluciones certificadas y de alto impacto.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-[32px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl border border-slate-100 hover:border-[#005596]/20 transition-all duration-500"
            >
              {/* Logo */}
              <div className="h-20 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-16 max-w-[180px] object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-[#005596] to-emerald-500 rounded-full mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Texto */}
              <h3 className="font-black text-slate-900 text-lg mb-3">{p.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}