"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-tr from-easLightBlue/10 via-white to-easGreen/5 -z-10 opacity-80"></div>
      
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-10 md:pt-16 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="flex flex-col space-y-9 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-easGreen/10 border border-easGreen/20 rounded-full text-easGreen text-[10px] font-black uppercase tracking-[0.2em] font-montserrat">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-easGreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-easGreen"></span>
              </span>
              Socio Estratégico SAP
            </div>
            
            {/* Título original sin el 'uppercase' que rompía la línea */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight font-exo">
              Transformación <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-easNavy to-easLightBlue">
                Líder en SAP
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium font-poppins">
              Elevamos la competitividad de tu empresa mediante consultoría experta en SAP y soluciones digitales innovadoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto font-montserrat">
              <Link href="/servicios">
                <button className="bg-easNavy text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-easNavy/20 hover:bg-easLightBlue transition-all text-[12px] uppercase tracking-widest w-full sm:w-auto">
                  Nuestros Servicios
                </button>
              </Link>
              <Link href="/#contacto">
                <button className="bg-white text-easGreen border-2 border-easGreen/20 px-10 py-4 rounded-full font-bold hover:bg-easGreen/10 transition-all text-[12px] uppercase tracking-widest w-full sm:w-auto">
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
              {/* Fotografía mantenida */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')" }}
              />
              {/* Overlay corporativo de marca actualizado con colores EAS */}
              <div className="absolute inset-0 bg-gradient-to-br from-easNavy/60 to-easLightBlue/30 mix-blend-multiply" />
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
                <div className="w-10 h-10 bg-easLightBlue/10 rounded-xl flex items-center justify-center text-easLightBlue text-xl">📈</div>
                <div className="text-easNavy font-black text-2xl font-exo">+20 años</div>
              </div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest font-montserrat">Experiencia Regional</p>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}