export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decorativo con toque Verde */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-tr from-blue-50 via-white to-emerald-50 -z-10 opacity-80"></div>
      
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Texto */}
          <div className="flex flex-col space-y-9 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              Socio Estratégico SAP
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Transformación <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#005596] to-emerald-500">
                Líder en SAP
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Elevamos la competitividad de tu empresa mediante consultoría experta en SAP y soluciones digitales innovadoras que fusionan eficiencia y crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
              <button className="bg-[#005596] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-100 hover:bg-blue-800 transition-all active:scale-95 text-sm uppercase tracking-widest text-[12px]">
                Nuestros Servicios
              </button>
              <button className="bg-white text-emerald-600 border-2 border-emerald-100 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all text-sm uppercase tracking-widest text-[12px]">
                Hablemos de tu Proyecto
              </button>
            </div>
          </div>

          {/* Columna Visual - Inspirado en el HTML aprobado */}
          <div className="relative w-full h-[450px] md:h-[600px]">
             {/* Marco Principal con gradiente Azul-Verde */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#005596] via-[#004a82] to-emerald-500 rounded-[50px] shadow-[0_40px_80px_-15px_rgba(0,85,150,0.25)] border-[12px] border-white ring-1 ring-slate-100 overflow-hidden transform rotate-2">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[150px] font-black opacity-10 select-none tracking-tighter">EAS</div>
             </div>
             
             {/* Tarjeta Flotante (Inspirada en el HTML aprobado) */}
             <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-8 bg-white/95 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/50 ring-1 ring-black/5 animate-bounce-slow max-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl">
                    📈
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Crecimiento</div>
                    <div className="text-[#005596] font-black text-2xl">+20 años</div>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  Optimizando procesos críticos para empresas líderes en México y Latinoamérica.
                </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  )
}
