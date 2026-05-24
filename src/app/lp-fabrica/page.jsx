"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FabricaSoftwareLanding() {
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
      
      {/* 1. Minimal Header (Con el Logo Real) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <Link href="/" className="no-underline">
            <img
              src="/images/LogoEAS-Color.png"
              alt="EAS Consulting"
              className="h-[50px] md:h-[65px] w-auto object-contain transition-all duration-300"
            />
          </Link>
          <a href="#contacto" className="text-[11px] font-black text-slate-500 hover:text-[#00BEFE] transition-colors font-montserrat uppercase tracking-[0.2em]">
            Agendar Sesión
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00BEFE]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div 
            initial="hidden" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-[#76BC21]/20 rounded-full text-[#76BC21] text-xs font-black uppercase tracking-widest font-montserrat">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76BC21] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76BC21]"></span>
              </span>
              Fábrica de Software Inteligente
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-[#103268] leading-tight tracking-tight font-exo">
              Industrializa la innovación. <br className="hidden lg:block"/> 
              <span className="text-[#00BEFE]">
                Acelera tu crecimiento.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Las organizaciones que escalan hoy no desarrollan software de forma artesanal. Transformamos tus requerimientos en soluciones funcionales y escalables reduciendo tiempos, riesgos y costos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-4 w-full sm:w-auto">
              <a href="#contacto" className="inline-block w-full sm:w-auto text-center bg-[#76BC21] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#76BC21]/30 hover:bg-[#65a31a] hover:shadow-green-500/40 transition-all text-sm uppercase tracking-widest font-montserrat">
                Sesión de Descubrimiento
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl shadow-2xl border-8 border-white overflow-hidden bg-[#103268]">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Desarrollo de Software EAS" className="w-full h-full object-cover opacity-80 mix-blend-overlay"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#103268] via-[#103268]/50 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white z-10">
                <div className="font-exo font-black text-4xl mb-1">Time-to-Market</div>
                <div className="font-montserrat text-[#00BEFE] font-bold tracking-widest uppercase text-sm">Optimizado con metodologías Ágiles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Pain Points */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">
            ¿El desarrollo tradicional está frenando a tu empresa?
          </motion.h2>
          <motion.p initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            La falta de estandarización en tecnología se traduce en pérdida de competitividad.
          </motion.p>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚙️", title: "Procesos Manuales", desc: "Dinero y tiempo operativo perdido en tareas repetitivas de bajo valor.", bg: "bg-red-50", color: "text-red-500" },
              { icon: "🔗", title: "Sistemas Desconectados", desc: "Silos de información que provocan decisiones lentas y desalineadas del mercado.", bg: "bg-orange-50", color: "text-orange-500" },
              { icon: "⏳", title: "Desarrollo Tradicional", desc: "Proyectos largos, costosos y con una pesada deuda técnica difícil de mantener.", bg: "bg-blue-50", color: "text-[#00BEFE]" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#00BEFE] transition-all duration-300">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-slate-100`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-[#103268] mb-3 font-exo">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Propuesta de Valor (Bento Box) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">Nuestra Propuesta de Valor</h2>
            <p className="text-lg text-slate-600 max-w-2xl">Desarrollamos, implementamos y optimizamos soluciones bajo un enfoque industrializado.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
            
            {/* Columna Izquierda */}
            <motion.div variants={fadeIn} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
              <h3 className="text-xl font-black text-[#103268] mb-6 flex items-center gap-3 font-exo">
                <span className="w-8 h-8 rounded-full bg-[#00BEFE] text-white flex items-center justify-center text-sm font-montserrat">1</span>
                Desarrollo e Innovación
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium text-sm">
                {[
                  'Desarrollo ABAP y soluciones SAP',
                  'Apps Móviles y Web Empresariales',
                  'Automatización de Procesos (RPA)',
                  'BI, Analítica e Integraciones ERP',
                  'Internet of Things (IoT) & Ad-hoc'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50 hover:border-[#76BC21] transition-colors">
                    <span className="text-[#76BC21] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Columna Derecha (Dark) */}
            <motion.div variants={fadeIn} className="bg-[#103268] rounded-[2rem] p-10 shadow-2xl relative overflow-hidden text-white">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00BEFE] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 relative z-10 font-exo">
                <span className="w-8 h-8 rounded-full bg-[#76BC21] text-[#103268] flex items-center justify-center text-sm font-montserrat">2</span>
                Servicios Estratégicos
              </h3>
              <ul className="space-y-4 text-slate-300 font-medium text-sm relative z-10">
                {[
                  'Implementación y migración SAP S/4HANA',
                  'Migración a Nube (SAP y no SAP)',
                  'Modelos de Soporte Operativo',
                  'Consultoría Especializada en ERP'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-[#00BEFE] transition-colors">
                    <span className="text-[#76BC21] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. Proceso End to End (Timeline) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">Proceso End-To-End</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Procesos estandarizados y metodologías SCRUM que garantizan calidad y control continuo.</p>
          </motion.div>
          
          <div className="relative">
            {/* Linea conectora para Desktop */}
            <div className="hidden md:block absolute top-[24px] left-[5%] right-[5%] h-[4px] bg-gradient-to-r from-[#00BEFE] to-[#76BC21] opacity-30 z-0"></div>
            
            <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
              {[
                { step: "1", title: "Diagnóstico", bg: "bg-[#00BEFE]", shadow: "shadow-cyan-200" },
                { step: "2", title: "Alineación", bg: "bg-[#00a8e0]", shadow: "shadow-cyan-200" },
                { step: "3", title: "Desarrollo", bg: "bg-[#45bd9b]", shadow: "shadow-emerald-200" },
                { step: "4", title: "Testing/QA", bg: "bg-[#5ec85e]", shadow: "shadow-green-200" },
                { step: "5", title: "Capacitación", bg: "bg-[#76BC21]", shadow: "shadow-[#76BC21]/30" },
                { step: "6", title: "Mejora Continua", bg: "bg-[#103268]", shadow: "shadow-blue-200" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className="text-center group">
                  <div className={`w-12 h-12 rounded-full ${item.bg} text-white flex justify-center items-center font-bold text-xl mx-auto shadow-lg ${item.shadow} border-4 border-slate-50 mb-4 font-montserrat group-hover:-translate-y-2 transition-transform`}>
                    {item.step}
                  </div>
                  <h4 className="font-bold text-[#103268] text-sm md:text-xs lg:text-sm font-exo">{item.title}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Diferenciadores (Dark Section) */}
      <section className="py-24 bg-[#103268] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 font-exo text-white">Convierte tus procesos en ventajas reales</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">Un equipo multidisciplinario enfocado en KPIs, control de riesgos y entrega continua de valor.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Time-to-Market Rápido", desc: "Metodologías ágiles centradas en el cliente." },
              { title: "Seguridad Integrada", desc: "Visibilidad total del desarrollo y errores reducidos." },
              { title: "Escalabilidad", desc: "Tecnología preparada para el crecimiento futuro." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#76BC21]/20 text-[#76BC21] flex justify-center items-center text-xl shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg font-exo text-white">{item.title}</h4>
                  <p className="text-xs text-blue-200 font-poppins">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Talent badges */}
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="border-t border-white/10 pt-12 flex flex-wrap justify-center gap-4 lg:gap-8 text-xs lg:text-sm font-bold text-[#00BEFE] uppercase tracking-widest font-montserrat text-center">
            <span>Arquitectos de Solución</span>
            <span className="hidden md:inline">•</span>
            <span>Desarrolladores Expertos</span>
            <span className="hidden md:inline">•</span>
            <span>Scrum Masters / PM</span>
            <span className="hidden md:inline">•</span>
            <span>QA & Documentación</span>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA & Form */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-4xl font-extrabold text-[#103268] mb-6 leading-tight font-exo">
              ¿Listo para acelerar tu negocio?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8">
              Déjanos tus datos. Evaluaremos cómo nuestra Fábrica de Software puede industrializar la innovación de tu empresa reduciendo riesgos y costos.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#76BC21] rounded-full flex items-center justify-center text-[#103268] font-bold text-xl shadow-lg shadow-green-200">🚀</div>
            <h3 className="text-2xl font-bold text-[#103268] mb-6 font-exo">Agendar Descubrimiento</h3>
            
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
              <button type="submit" className="w-full bg-[#76BC21] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:bg-[#65a31a] hover:-translate-y-1 transition-all mt-4 text-sm uppercase tracking-widest font-montserrat">
                Solicitar Propuesta
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}