"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SeguridadSAPLanding() {
  // Configuración de animaciones generales
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
    <div className="min-h-screen bg-slate-50 relative font-poppins text-slate-800 selection:bg-[#00BEFE] selection:text-[#103268]">
      
      {/* 1. Minimal Header */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black text-[#103268] tracking-tighter font-exo">
            EAS<span className="text-[#00BEFE]">.</span>
          </Link>
          <a href="#contacto" className="text-sm font-bold text-slate-600 hover:text-[#103268] transition-colors font-montserrat uppercase">
            Solicitar Check-Up
          </a>
        </div>
      </header>

      {/* 2. Hero Section (Security Focus / Dark) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#103268] text-white">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#00BEFE] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[300px] bg-[#76BC21] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div 
            initial="hidden" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00BEFE]/10 border border-[#00BEFE]/30 rounded-full text-[#00BEFE] text-xs font-black uppercase tracking-widest font-montserrat">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BEFE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BEFE]"></span>
              </span>
              Seguridad SAP Empresarial
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-exo">
              La seguridad no es un gasto. <br className="hidden lg:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BEFE] to-white">
                Es continuidad operativa.
              </span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                La operación más vulnerable es la que cree estar protegida. Cuando los accesos no están gobernados, la organización queda expuesta a interrupciones críticas.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="pt-4 w-full sm:w-auto">
              <a href="#contacto" className="inline-block w-full sm:w-auto text-center bg-[#00BEFE] text-[#103268] px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/20 hover:bg-white transition-all text-sm uppercase tracking-widest font-montserrat">
                Solicitar Security Check-Up
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Mockup with Scanline Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden bg-slate-900 border border-white/10 group">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" alt="Ciberseguridad SAP" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"/>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#103268]/90"></div>
              
              {/* Scanline Animation (Framer Motion) */}
              <motion.div 
                animate={{ y: ["-10%", "500%"], opacity: [0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#00BEFE]/40 to-transparent shadow-[0_0_30px_rgba(0,190,254,0.5)]"
              ></motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-[#103268]/70 backdrop-blur-md p-6 rounded-2xl max-w-[280px] border border-[#00BEFE]/20 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 font-bold text-2xl">⚠</div>
                  <div className="text-white font-black text-xl font-exo">Cero Brechas</div>
                </div>
                <p className="text-blue-200 text-xs uppercase font-bold tracking-widest font-montserrat">Protección de procesos críticos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Trust Bar (Métricas) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8 font-montserrat">Confianza construida donde el riesgo es real</h3>
          <motion.div 
            initial="hidden" whileInView="whileInView" variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100"
          >
            {[
              { metric: "+1,500", label: "Proyectos SAP\nAlta exigencia", color: "text-[#103268]" },
              { metric: "+18 Años", label: "Protegiendo entornos\nEmpresariales", color: "text-[#00BEFE]" },
              { metric: "+30,000", label: "Usuarios\nAdministrados", color: "text-[#76BC21]" },
              { metric: "SOX", label: "Cumplimiento y\nAuditoría", color: "text-slate-800" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="px-4">
                <div className={`text-4xl font-black ${item.color} font-exo mb-2`}>{item.metric}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider font-montserrat whitespace-pre-line">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Pain Points (El Costo) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">El costo de una falla no es tecnológico. Es empresarial.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Una falla en SAP expone datos críticos y frena la operación. Muchas empresas detectan brechas solo en auditorías o, peor aún, tras un incidente.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm border-t-4 border-t-red-500 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#103268] mb-4 font-exo">Cumplimiento Reactivo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Las vulnerabilidades no detectadas a tiempo resultan en pesadas sanciones regulatorias y pérdida de confianza del mercado.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm border-t-4 border-t-orange-500 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#103268] mb-4 font-exo">Interrupciones Críticas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Accesos no autorizados o mal gobernados pueden paralizar la cadena de suministro o los procesos financieros centrales de la compañía.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm border-t-4 border-t-yellow-500 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#103268] mb-4 font-exo">Auditorías Sorpresa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Descubrir problemas de gestión de identidades durante una auditoría genera desgaste operativo y costos imprevistos de mitigación urgente.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Solución & Resultados */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-block bg-[#00BEFE]/10 text-[#103268] font-bold px-4 py-2 rounded-lg text-sm mb-6 border border-[#00BEFE]/20 font-montserrat">
                Identifique su nivel de riesgo antes
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-6 font-exo">Nuestro Security Check-Up</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8 leading-relaxed">
                No se protege lo que no se mide. Evaluamos la exposición real de su entorno SAP a amenazas, accesos no autorizados e interrupciones críticas para cerrar las brechas antes de que se conviertan en incidentes.
              </motion.p>
              
              <motion.h4 variants={fadeIn} className="text-sm font-bold text-[#103268] uppercase tracking-widest mb-4 font-montserrat">Resultados Tangibles:</motion.h4>
              <motion.ul variants={staggerContainer} className="space-y-4 text-slate-700 font-medium text-sm">
                {[
                  'Mitigación proactiva de brechas de seguridad.',
                  'Cumplimiento continuo (Compliance).',
                  'Gestión sólida de identidades y accesos (IAM).',
                  'Seguridad alineada 100% a la estrategia del negocio.'
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#76BC21] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#103268] rounded-[3rem] transform rotate-3 scale-105 opacity-10"></div>
              <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 relative shadow-2xl text-center">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-100 mb-8">
                  <span className="text-6xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#103268] mb-4 font-exo">La seguridad no son solo controles</h3>
                <p className="text-slate-600 text-sm">Es proteger la capacidad de operar. Integramos diagnóstico, gobierno y monitoreo para fortalecer tu negocio.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Escenarios de Criticidad */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">Escenarios donde la seguridad no es opcional</h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "📋", title: "Auditorías\nPróximas", colClass: "col-span-2" },
              { icon: "📈", title: "Crecimiento\nAcelerado", colClass: "col-span-2" },
              { icon: "🌐", title: "Ecosistemas SAP\nComplejos", colClass: "col-span-2" },
              { icon: "⚖️", title: "Regulación\nCreciente", colClass: "col-span-2 lg:col-start-2" },
              { icon: "🚨", title: "Riesgos de\nFraude", colClass: "col-span-2" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className={`${item.colClass} bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center hover:border-[#00BEFE] hover:shadow-lg transition-all`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#103268] text-sm font-exo whitespace-pre-line">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Diferenciadores (Dark Section) */}
      <section className="py-24 bg-[#103268] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 font-exo">Lo que nos hace diferentes</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Fortalecemos la seguridad en entornos críticos garantizando agilidad.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-sm text-blue-100 font-medium">No tratamos la seguridad como un proyecto aislado.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-sm text-blue-100 font-medium">La integramos profundamente en la gobernanza tecnológica.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 border-l-4 border-l-[#00BEFE]">
              <p className="text-sm text-blue-100 font-medium">No reaccionamos ante incidentes. Diseñamos entornos resilientes.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#00BEFE]/10 p-8 rounded-2xl border border-[#00BEFE]/30 hover:bg-[#00BEFE]/20 transition-colors">
              <p className="text-sm text-[#00BEFE] font-bold">No complicamos la operación. La fortalecemos.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA & Form */}
      <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-4xl font-extrabold text-[#103268] mb-6 leading-tight font-exo">
              Las compañías sólidas no reaccionan, <span className="text-[#00BEFE]">se anticipan.</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8">
              Contáctenos para reducir el riesgo, asegurar la operación y facilitar el cumplimiento normativo sin frenar la agilidad de su negocio.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#103268] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">🛡️</div>
            <h3 className="text-2xl font-bold text-[#103268] mb-6 font-exo">Agendar Security Check-Up</h3>
            
            <form action="https://formspree.io/f/TU_FORMSPREE_ID" method="POST" className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Tu nombre" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all font-poppins" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Correo Corporativo</label>
                <input type="email" name="email" placeholder="email@tuempresa.com" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all font-poppins" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Empresa</label>
                <input type="text" name="empresa" placeholder="Tu Empresa" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00BEFE] focus:ring-1 focus:ring-[#00BEFE] transition-all font-poppins" />
              </div>
              <button type="submit" className="w-full bg-[#103268] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all mt-4 text-sm uppercase tracking-widest font-montserrat">
                Evaluar Mi Riesgo
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}