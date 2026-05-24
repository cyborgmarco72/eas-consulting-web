"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FabricaSoftwareLanding() {
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

  // Logos para el Carrusel Infinito
  const logos = [
    { name: "FEMSA", isText: true, style: "text-2xl font-black text-slate-800" },
    { name: "DANONE", isText: true, style: "text-2xl font-black text-slate-800" },
    { name: "Volaris *", isText: true, style: "text-2xl font-black text-slate-800", highlight: true },
    { name: "Smurfit Kappa", isText: true, style: "text-2xl font-black text-slate-800" },
    { name: "ABInBev", isText: true, style: "text-2xl font-black text-slate-800" },
    { name: "L'ORÉAL", isText: true, style: "text-2xl font-black text-slate-800" },
    { name: "Jose Cuervo", isText: true, style: "text-2xl font-black text-slate-800 italic" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative font-poppins text-[#103268] selection:bg-[#00BEFE] selection:text-white">
      
      {/* Estilos Inline para el scroll infinito de logos */}
      <style dangerouslySetInnerHTML={{__html: `
        .logo-scroll {
          display: flex;
          width: calc(250px * 14);
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 7)); }
        }
        .logo-slide {
          width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}} />

      {/* 1. Minimal Header (Con Logo Real) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <Link href="/" className="no-underline">
            <img
              src="/images/LogoEAS-Color.png"
              alt="EAS Consulting"
              className="h-[50px] md:h-[65px] w-auto object-contain transition-all duration-300"
            />
          </Link>
          <a href="#contacto" className="text-[11px] font-black text-slate-600 hover:text-[#00BEFE] transition-colors font-montserrat uppercase tracking-[0.2em]">
            Agendar Consultoría
          </a>
        </div>
      </header>

      {/* 2. Hero Section (C-Level Focus) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#103268]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy */}
          <motion.div 
            initial="hidden" whileInView="whileInView" variants={staggerContainer} viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#103268]/5 border border-[#103268]/10 rounded-full text-[#103268] text-xs font-black uppercase tracking-widest font-montserrat">
              <span className="w-2 h-2 rounded-full bg-[#00BEFE]"></span>
              Socio Estratégico SAP
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-[#103268] leading-tight tracking-tight font-exo">
              Protegemos la operación. <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#103268] to-[#00BEFE]">
                Habilitamos el crecimiento.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Tu plataforma SAP no debería ser una fuente de incertidumbre. Ayudamos a empresas de misión crítica a fortalecer, transformar y operar sus sistemas sin exponer el negocio a decisiones improvisadas.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a href="#contacto" className="text-center bg-[#103268] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-[#103268]/20 hover:bg-slate-800 transition-all text-sm uppercase tracking-widest hover:-translate-y-0.5 font-montserrat">
                Contactar a un Partner
              </a>
            </motion.div>
          </motion.div>

          {/* Visual / Stats Board */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative w-full mt-10 lg:mt-0"
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 font-montserrat">Resultados de nuestro enfoque</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-[#00BEFE] font-exo font-black text-4xl mb-1">+18</div>
                  <div className="text-[#103268] font-bold text-sm font-montserrat">Años liderando entornos SAP críticos</div>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <div className="text-[#76BC21] font-exo font-black text-4xl mb-1">+1,500</div>
                  <div className="text-[#103268] font-bold text-sm font-montserrat">Proyectos ejecutados con éxito</div>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <div className="text-[#103268] font-exo font-black text-2xl mb-1 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#00BEFE]"></span> Cero
                  </div>
                  <div className="text-slate-500 text-sm font-montserrat">Margen de error en decisiones críticas</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Logo Wall (Social Proof / Partners) */}
      <section className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center font-montserrat">Confianza construida en entornos reales por socios estratégicos</h3>
        </div>
        
        {/* Infinite Scroll Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-scroll opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Render 2 sets for perfect infinite loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-slide">
                {logo.highlight ? (
                  <div className={logo.style}>Volaris <span className="text-purple-500 text-3xl leading-none">*</span></div>
                ) : (
                  <div className={logo.style}>{logo.name}</div>
                )}
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* 4. Diagnóstico de Continuidad */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00BEFE]/5 pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-6 font-exo max-w-4xl mx-auto">
            Postergar decisiones tecnológicas críticas amenaza la continuidad de tu negocio
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            El crecimiento, la presión regulatoria y la necesidad de información confiable exigen plataformas SAP estables y seguras. Operar sobre entornos que no evolucionan transforma la tecnología que hoy soporta la operación en el <strong className="text-[#103268]">mayor factor de riesgo del negocio.</strong>
          </p>
        </motion.div>
      </section>

      {/* 5. Impacto Directo para Alta Dirección */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h3 initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-xl font-black text-[#103268] text-center mb-16 font-exo">
            Impacto directo para la Alta Dirección
          </motion.h3>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: "🔄", title: "Continuidad\nOperativa" },
              { icon: "⚖️", title: "Gobierno y\nControl" },
              { icon: "🛡️", title: "Reducción\nde Riesgos" },
              { icon: "📈", title: "Escalabilidad\nTecnológica" },
              { icon: "📊", title: "Previsibilidad\nFinanciera" },
              { icon: "🏢", title: "Resiliencia\nEmpresarial" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 hover:shadow-md hover:border-[#00BEFE]/30 transition-all cursor-default">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-bold text-[#103268] text-sm font-exo whitespace-pre-line">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Nuestro Enfoque (Los 3 Pilares Chevron) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#103268] mb-4 font-exo">Nuestro Enfoque de 360°</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Integramos estrategia, arquitectura y ejecución para que cada decisión tecnológica responda a un objetivo empresarial claro.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Proteger */}
            <motion.div variants={fadeIn} className="bg-[#103268] p-12 text-white relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-2xl font-black mb-2 font-exo tracking-widest text-[#00BEFE]">PROTEGER</h3>
                <p className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-montserrat">Seguridad SAP</p>
                <p className="text-slate-400 text-xs uppercase">Cumplimiento y Gobierno</p>
              </div>
            </motion.div>
            
            {/* Transformar */}
            <motion.div variants={fadeIn} className="bg-[#00BEFE] p-12 text-[#103268] relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
              {/* Chevron cutout illusion */}
              <div className="hidden md:block absolute top-0 -left-6 w-12 h-full bg-[#103268]" style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)', zIndex: 5 }}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-2xl font-black mb-2 font-exo tracking-widest text-white">TRANSFORMAR</h3>
                <p className="text-[#103268] text-sm font-bold uppercase tracking-wider mb-4 font-montserrat">Upgrades & Migraciones</p>
                <p className="text-blue-900/70 text-xs uppercase font-bold">Evolución Tecnológica</p>
              </div>
            </motion.div>
            
            {/* Operar */}
            <motion.div variants={fadeIn} className="bg-[#76BC21] p-12 text-[#103268] relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
              {/* Chevron cutout illusion */}
              <div className="hidden md:block absolute top-0 -left-6 w-12 h-full bg-[#00BEFE]" style={{ clipPath: 'polygon(100% 50%, 0 0, 0 100%)', zIndex: 5 }}></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">⚙️</div>
                <h3 className="text-2xl font-black mb-2 font-exo tracking-widest text-white">OPERAR</h3>
                <p className="text-[#103268] text-sm font-bold uppercase tracking-wider mb-4 font-montserrat">AMS & MDS</p>
                <p className="text-green-900/70 text-xs uppercase font-bold">Soporte orientado a estabilidad</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Diferenciadores / Manifiesto (Dark Section) */}
      <section className="py-24 bg-[#103268] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="whileInView" variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 font-exo">Lo que nos hace diferentes</h2>
            <p className="text-[#00BEFE] max-w-2xl mx-auto text-lg">Aseguramos continuidad operativa sin exponer el negocio a decisiones improvisadas.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
              <p className="text-sm text-blue-100 font-medium">No aceleramos proyectos sacrificando estabilidad operativa.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
              <p className="text-sm text-blue-100 font-medium">Decisiones tecnológicas con impacto operativo y financiero controlado.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#76BC21]/10 p-8 rounded-2xl border border-[#76BC21]/30 flex flex-col justify-center text-center hover:bg-[#76BC21]/20 transition-colors">
              <p className="text-sm text-[#76BC21] font-bold">Actuamos como socios estratégicos, no proveedores transaccionales.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-center text-center border-b-4 border-b-[#00BEFE] hover:bg-white/10 transition-colors">
              <p className="text-sm text-white font-black uppercase tracking-wider">Cuando SAP sostiene el negocio, no hay margen de error.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA & Form (Executive Level) */}
      <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* CTA Copy */}
          <motion.div initial="hidden" whileInView="whileInView" variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-4xl font-extrabold text-[#103268] mb-6 leading-tight font-exo">
              Conversemos antes de que la tecnología se convierta en una limitante.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-slate-600 mb-8">
              En entornos donde SAP sostiene el negocio, la tecnología no puede dejarse al azar. Se requiere experiencia, criterio y una visión clara del impacto empresarial.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#00BEFE]/10 rounded-full flex items-center justify-center text-[#00BEFE] shrink-0">🏢</div>
              <p className="text-sm text-[#103268] font-bold">Hagamos que tu plataforma SAP sea un habilitador de crecimiento, no un factor de incertidumbre.</p>
            </motion.div>
          </motion.div>

          {/* Form Visual Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00BEFE] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">🤝</div>
            <h3 className="text-2xl font-bold text-[#103268] mb-6 font-exo">Agendar Consultoría Ejecutiva</h3>
            
            <form action="https://formspree.io/f/TU_FORMSPREE_ID" method="POST" className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Tu nombre" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#103268] focus:ring-1 focus:ring-[#103268] transition-all font-poppins" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Correo Corporativo</label>
                <input type="email" name="email" placeholder="email@tuempresa.com" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#103268] focus:ring-1 focus:ring-[#103268] transition-all font-poppins" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Empresa</label>
                  <input type="text" name="empresa" placeholder="Tu Empresa" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#103268] focus:ring-1 focus:ring-[#103268] transition-all font-poppins" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-montserrat">Cargo</label>
                  <input type="text" name="cargo" placeholder="Ej. CIO / CFO" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#103268] focus:ring-1 focus:ring-[#103268] transition-all font-poppins" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#103268] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#00BEFE] hover:-translate-y-1 transition-all mt-6 text-sm uppercase tracking-widest font-montserrat">
                Contactar a un Partner
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}