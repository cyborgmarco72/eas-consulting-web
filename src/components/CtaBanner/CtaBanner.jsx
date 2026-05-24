// src/components/CtaBanner.jsx
"use client"
import Link from "next/link"

export default function CtaBanner() {
  return (
    <div className="max-w-6xl mx-auto px-6 my-20">
      <div className="bg-gradient-to-r from-[#103268] to-[#00BEFE] rounded-[30px] p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
        {/* Elemento decorativo sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Hablemos y diseñemos juntos la mejor estrategia tecnológica para tu empresa.
          </p>
          <div className="pt-4">
            <Link 
              href="/#contacto" 
              className="inline-block py-4 px-10 bg-white hover:bg-neutral-100 text-[#103268] font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:scale-105"
            >
              Contactar a EAS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}