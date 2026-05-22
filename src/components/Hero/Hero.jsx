"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-tr from-blue-50 via-white to-emerald-50 -z-10 opacity-80"></div>
      
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-10 md:pt-16 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
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
              Elevamos la competitividad de tu empresa mediante consultoría experta en SAP y soluciones digitales innovadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
              <Link href="/servicios">
                <button className="bg-[#005596] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-100 hover:bg-blue-800 transition-all text-[12px] uppercase tracking-widest w-full sm:w-auto">
                  Nuestros Servicios
                </button>
              </Link>
              <Link href="/contacto">
                <button className="bg-white text-emerald-600 border-2 border-emerald-100 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all text-[12px] uppercase tracking-widest w-full sm:w-auto">
                  Hablemos
                </button>
              </Link>
            </div>
          </div>

          {/* LADO DERECHO: COMPONENTE VISUAL CON ANIMACIÓN */}
          <div className="relative w-full h-[350px] md:h-[480px] group">
            
            {/* Foto Real con rotación interactiva en Hover */}
            <motion.div 
              initial={{ rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.01 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 rounded-[50px] shadow-2xl border-[12px] border-white overflow-hidden bg-slate-100 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
              />
              {/* Overlay corporativo de marca */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#005596]/50 to-emerald-500/40 mix-blend-multiply" />
            </motion.div>

            {/* Tarjeta Flotante con Levitación Suave Continua (Animate-y) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/50 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">📈</div>
                <div className="text-[#005596] font-black text-2xl">+20 años</div>
              </div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Experiencia Regional</p>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}