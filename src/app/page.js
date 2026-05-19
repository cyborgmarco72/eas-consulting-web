export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-white -z-10 opacity-70"></div>
      
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Texto */}
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[#005596] text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005596] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005596]"></span>
              </span>
              Socio Estratégico SAP
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Transformamos <br/>
              <span className="text-[#005596]">tu negocio </span> 
              con SAP.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Consultoría experta en SAP, transformación digital y automatización de procesos para empresas que buscan el siguiente nivel de eficiencia empresarial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
              <button className="bg-[#005596] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-100 hover:shadow-2xl hover:bg-blue-800 transition-all active:scale-95 text-sm uppercase tracking-widest">
                Nuestros Servicios
              </button>
              <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest">
                Conocer Más
              </button>
            </div>
          </div>

          {/* Columna Visual / Banner */}
          <div className="relative w-full h-[450px] md:h-[550px] bg-slate-50 rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,85,150,0.1)] border-[12px] border-white ring-1 ring-slate-100">
             <div className="absolute inset-0 bg-gradient-to-br from-[#005596] to-blue-500 opacity-90 flex items-center justify-center">
                <div className="text-white text-[120px] font-black opacity-10 select-none tracking-tighter">EAS</div>
             </div>
             
             {/* Card Flotante de Performance */}
             <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-xl p-7 rounded-3xl shadow-2xl border border-white/50 ring-1 ring-black/5 animate-bounce-slow">
                <div className="text-[#005596] font-black text-4xl mb-1">+20 años</div>
                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Experiencia Regional</div>
             </div>
          </div>

        </div>
      </section>
    </div>
  )
}
