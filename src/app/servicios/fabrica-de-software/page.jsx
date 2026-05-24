"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, 
  Smartphone, 
  Blocks, 
  Kanban, 
  Cpu, 
  Layout, 
  CheckCircle2,
  Workflow,
  Sparkles
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";

const alcancesSoftware = [
  {
    title: "Desarrollo a Medida (Custom Dev)",
    description:
      "Plataformas corporativas, CRMs y ERPs ligeros diseñados desde cero (Tailor-made) para adaptarse 100% a flujos de negocio únicos.",
    icon: Code2,
  },
  {
    title: "Sitios y Portales Web (B2B/B2C)",
    description:
      "Construcción de portales transaccionales, e-commerce y sitios web corporativos de alto tráfico utilizando frameworks modernos (React, Angular).",
    icon: Blocks,
  },
  {
    title: "Aplicaciones Móviles Nativas/Híbridas",
    description:
      "Desarrollo de apps iOS y Android centradas en el usuario, optimizadas para alta conversión y reteniendo estándares de seguridad Enterprise.",
    icon: Smartphone,
  },
  {
    title: "Integraciones y APIs (Middlewares)",
    description:
      "Creamos puentes de comunicación (Web Services, REST, SOAP) para conectar sus aplicaciones Legacy con sistemas modernos de forma transparente.",
    icon: Cpu,
  },
  {
    title: "Gestión Ágil de Proyectos",
    description:
      "Garantizamos entregas modulares, funcionales y en tiempo real usando metodologías Scrum, DevOps y tableros Kanban interactivos.",
    icon: Kanban,
  },
  {
    title: "Diseño UI/UX (Experiencia de Usuario)",
    description:
      "Conceptualización visual, wireframes y maquetado hiper-realista para asegurar interfaces intuitivas, modernas y de fácil adopción.",
    icon: Layout,
  },
];

const beneficiosSoftware = [
  {
    title: "Calidad Certificada",
    description:
      "Nuestros procesos de desarrollo y pruebas QA están basados en las mejores prácticas de la industria de ingeniería de software.",
    icon: CheckCircle2,
  },
  {
    title: "Código Escalable (Clean Code)",
    description:
      "Arquitecturas bien documentadas y modulares que permiten agregar nuevas funcionalidades en el futuro sin reescribir la base.",
    icon: Workflow,
  },
  {
    title: "Ventaja Competitiva",
    description:
      "Transforme ideas disruptivas en software funcional más rápido que su competencia, digitalizando tareas que antes eran manuales.",
    icon: Sparkles,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function FabricaSoftwarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: Imagen de fondo representativa de Desarrollo Ágil, Código y UI/UX */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
            alt="Fábrica de Software EAS" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Capa 2: Degradado EAS translúcido premium */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#103268]/95 via-[#103268]/85 to-[#00BEFE]/80 mix-blend-multiply" />

        {/* Capa 3: Micro-orbes de iluminación */}
        <div className="absolute inset-0 z-20 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BEFE] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#76BC21] rounded-full blur-2xl" />
        </div>

        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1.5 mb-6 text-2xs md:text-sm font-bold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-[#00BEFE] backdrop-blur-md">
              Quality Software Factory
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Fábrica de{" "}
            <span className="bg-gradient-to-r from-[#00BEFE] to-[#76BC21] bg-clip-text text-transparent">
              Software
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Transformamos su visión corporativa en plataformas digitales tangibles. Desarrollamos aplicaciones móviles, sistemas a la medida y portales web apoyados bajo un estricto modelo de ingeniería de calidad y metodologías ágiles.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#00BEFE] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Cotizar Desarrollo a Medida
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CAPACIDADES DEL SERVICIO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#00BEFE] mb-3 font-montserrat">
            Ecosistema Digital
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Verticales de Desarrollo e Innovación
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
            Contamos con *Squads* de desarrollo Full-Stack expertos en construir software robusto, escalable e hiper-conectado, listo para la operación diaria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alcancesSoftware.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#00BEFE]/30 hover:shadow-xl hover:shadow-slate-100/85 transition-all duration-300 ease-out cursor-default"
              >
                <div className="mb-6 flex">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-[#103268]/5 border border-[#103268]/10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#00BEFE]/10 group-hover:border-[#00BEFE]/30">
                    <IconComponent className="w-7 h-7 stroke-[2] text-[#103268] transition-colors duration-300 group-hover:text-[#00BEFE]" />
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-[#103268] mb-3 group-hover:text-[#00BEFE] transition-colors font-montserrat uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-poppins">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN COMPLEMENTARIA DE BENEFICIOS */}
      <section className="px-6 py-24 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[14px] font-black uppercase tracking-[0.35em] text-[#103268] mb-3 font-montserrat block">
              Garantía EAS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              ¿Por qué elegir nuestra Factory?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
              A diferencia de las agencias tradicionales, nosotros construimos tecnología corporativa asumiendo el rol complejo del cumplimiento empresarial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosSoftware.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -8 }}>
                  <div className="group h-full p-[1px] rounded-3xl bg-[#103268]/5 border border-[#103268]/10 hover:border-[#76BC21]/30 transition duration-300">
                    <div className="h-full rounded-[23px] bg-white p-8 group-hover:shadow-xl group-hover:shadow-slate-100/90 transition shadow-sm">
                      <div className="mb-6 flex">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#103268]/5 border border-[#103268]/10 group-hover:bg-[#76BC21]/10 group-hover:border-[#76BC21]/30 transition duration-300">
                          <IconComponent className="w-6 h-6 text-[#103268] group-hover:text-[#76BC21] transition-colors" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#103268] mb-2 font-montserrat uppercase tracking-wide text-sm">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-poppins">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER MODULAR Y COMPARTIDO */}
      <CtaBanner />

    </main>
  );
}