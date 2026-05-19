export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-slate-50">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-100 max-w-3xl border border-blue-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
          Bienvenido a la nueva <br/>
          <span className="text-[#005596]">EAS Consulting</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
          Estamos construyendo este sitio módulo por módulo bajo una arquitectura <b>Headless</b>. 
          El Header superior ya es funcional y el despliegue es automático desde GitHub.
        </p>
        <div className="flex gap-4 justify-center">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            Módulo Status: Online
          </span>
        </div>
      </div>
    </div>
  )
}
