"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransformacionSAPLanding() {
  // Configuración de animaciones de Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    whileInView: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative font-poppins text-slate-800">
      
      {/* 1. Minimal Header (Exclusivo de Landing) */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black text-[#103268] tracking-tighter font-exo">
            EAS<span className="text-[#76BC21]">.</span>
          </Link>
          <a href="#contacto" className="text-sm font-bold text-slate-600 hover:text-[#00BEFE] transition-colors font-montserrat uppercase">
            Solicitar Assessment
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-80 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div 
            initial="hidden" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full text-[#76BC21] text-xs font-black uppercase tracking-widest font-montserrat">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76BC21] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76BC21]"></span>
              </span>
              Programas de Transformación SAP
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-[#103268] leading-tight tracking-tight font-exo">
              Maximiza el valor de tu Landscape SAP <br className="hidden lg:block"/> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#103268] to-[#00BEFE]">
                minimizando el riesgo.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Migración, actualización técnica y upgrades a S/4HANA ejecutados con metodologías probadas (SAP Activate, DMO) para garantizar un <strong className="text-[#00BEFE]">Near-Zero Downtime</strong>.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-4 w-full sm:w-auto">
              <a href="#contacto" className="inline-block w-full sm:w-auto text-center bg-[#103268] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-900/20 hover:bg-[#00BEFE] hover:shadow-cyan-500/30 transition-all text-sm uppercase tracking-widest font-montserrat">
                Agendar Assessment Técnico
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl shadow-2xl border-8 border-white overflow-hidden bg-slate-100">
              {/* Aquí puedes reemplazar por un componente <Image /> de Next.js si prefieres */}
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Equipo SAP consultoría EAS" className="w-full h-full object-cover opacity-90"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#103268]/60 to-[#00BEFE]/30 mix-blend-multiply"></div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-[250px]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#76BC21] font-bold font-montserrat">100%</div>
                <div className="text-[#103268] font-black text-xl font-exo">Éxito</div>
              </div>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest font-montserrat">En migraciones complejas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center md:text-left font-montserrat">Metodologías avaladas</h3>
          <div className="flex gap-10 items-center justify-center flex-wrap font-exo">
            <div className="text-2xl font-black text-slate-800">SAP <span className="font-light">Silver Partner</span></div>
            <div className="text-xl font-bold text-slate-800">SAP <span className="text-[#76BC21]">Activate</span></div>
            <div className="text-xl font-bold text-slate-800">DMO <span className="font-light">Expertise</span></div>
          </div>
        </div>
      </section>

      {/* 4. Pain Points */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">
            ¿Tu infraestructura SAP está frenando tu innovación?
          </motion.h2>
          <motion.p initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            Mantener sistemas desactualizados o en hardware obsoleto expone a tu empresa a vulnerabilidades de seguridad y pérdida de rendimiento.
          </motion.p>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { icon: "⚠️", title: "Fin de Vida de Hardware", desc: "Incrementa drásticamente los costos de mantenimiento y el riesgo de caída del sistema." },
              { icon: "🔒", title: "Vulnerabilidades", desc: "Ignorar las notas críticas abre brechas de cumplimiento normativo y exposición de datos." },
              { icon: "☁️", title: "Retraso en Estrategia Cloud", desc: "Sistemas legacy impiden aprovechar la agilidad de los entornos Cloud modernos." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#00BEFE] transition-all duration-300">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm border border-slate-100">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#103268] mb-3 font-exo">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA & Form */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-4xl font-extrabold text-[#103268] mb-6 leading-tight font-exo">
              ¿Listo para transformar tu landscape SAP?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8">
              Déjanos tus datos y un arquitecto SAP de EAS Consulting diseñará tu hoja de ruta personalizada.
            </motion.p>
            
            <motion.ul variants={staggerContainer} className="space-y-4 font-montserrat text-sm">
              {['Evaluación sin compromiso', 'Validación técnica de dependencias', 'Estimación clara de tiempos (Downtime)'].map((bullet, i) => (
                <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-slate-700 font-medium my-2">
                  <div className="w-6 h-6 rounded-full bg-green-50 text-[#76BC21] flex justify-center items-center font-bold text-xs">✓</div>
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <h3 className="text-2xl font-bold text-[#103268] mb-6 font-exo">Solicitar Hoja de Ruta</h3>
            
            <form action="https://formspree.io/f/TU_FORMSPREE_ID" method="POST" className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Ej. Juan Pérez" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Correo Corporativo</label>
                <input type="email" name="email" placeholder="juan@tuempresa.com" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Empresa</label>
                <input type="text" name="empresa" placeholder="Tu Compañía S.A." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all" />
              </div>
              
              <button type="submit" className="w-full bg-[#76BC21] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:bg-[#65a31a] hover:-translate-y-1 transition-all mt-4 text-sm uppercase tracking-widest font-montserrat">
                Enviar Solicitud
              </button>
            </form>
            <p className="text-center text-xs text-slate-400 mt-6 font-poppins">Tus datos están protegidos. No enviamos spam.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}