"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  RefreshCw, 
  ArrowUpCircle, 
  Search, 
  Database, 
  Settings, 
  ShieldAlert, 
  Radio, 
  Users, 
  ClipboardList,
  Rocket,
  Globe2,
  Lightbulb,
  BarChart3
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";;

const scopeTecnico = [
  {
    title: "Migración",
    description:
      "Analice y desarrolle una estrategia tecnológica y operativa de migración de sistemas SAP a través de nuestra metodología y mejores prácticas.",
    icon: RefreshCw,
  },
  {
    title: "Update y Upgrade",
    description:
      "Estrategia tecnológica y operativa de actualización de sistemas SAP a través de nuestra experiencia y metodologías.",
    icon: ArrowUpCircle,
  },
  {
    title: "Assessment",
    description:
      "Detecte áreas de oportunidad e innovación en la infraestructura sobre la cual operan sus sistemas SAP día con día.",
    icon: Search,
  },
  {
    title: "Archiving",
    description:
      "Analice, archive, depure y consulte información histórica de sus soluciones SAP. Optimice procesos mientras reduce inversión en almacenamiento.",
    icon: Database,
  },
  {
    title: "Instalación",
    description:
      "Implemente soluciones SAP con nuestra experiencia y certificación SAP Silver Partner, asegurando calidad y excelencia.",
    icon: Settings,
  },
  {
    title: "Seguridad",
    description:
      "Desarrolle una estrategia que blinde la operación de sus sistemas SAP desde una perspectiva tecnológica y operativa.",
    icon: ShieldAlert,
  },
  {
    title: "Monitoreo y Alertamiento",
    description:
      "Servicio de monitoreo preventivo y gestión de su aplicativo basado en las mejores prácticas de SAP.",
    icon: Radio,
  },
  {
    title: "Recursos Especializados",
    description:
      "Soluciones a la medida de su negocio. Alineamos juntos su estrategia tecnológica con nuestro equipo de especialistas.",
    icon: Users,
  },
  {
    title: "Consultoría y Proyectos",
    description:
      "Creamos y ejecutamos el plan estratégico para su organización. Una de nuestras principales áreas de especialización.",
    icon: ClipboardList,
  },
];

const scopeFuncional = [
  {
    title: "Assessment",
    description:
      "Detecte áreas de oportunidad e innovación en los procesos de su negocio. Presentamos un plan de acción que se adecua a la criticidad detectada.",
    icon: Search,
  },
  {
    title: "Implementación",
    description:
      "Implemente soluciones SAP identificando y programando de forma precisa los requerimientos, equipos y actividades necesarios.",
    icon: Rocket,
  },
  {
    title: "Roll Out",
    description:
      "Integre la evolución estratégica de su negocio a través de nuestro modelo de Roll Out de sistemas SAP.",
    icon: Globe2,
  },
  {
    title: "Innovación de Procesos",
    description:
      "Como SAP Silver Partner, identificamos, resolvemos, optimizamos y automatizamos los procesos de su negocio.",
    icon: Lightbulb,
  },
  {
    title: "Administración de Proyectos",
    description:
      "A través de metodologías ITIL aseguramos el éxito de sus proyectos SAP con acompañamiento continuo.",
    icon: BarChart3,
  },
  {
    title: "Seguridad",
    description:
      "Desarrolle una estrategia que blinde sus sistemas y procesos SAP desde una perspectiva de negocio.",
    icon: ShieldAlert,
  },
];

const subservicios = [
  {
    title: "Seguridad SAP",
    description: "Protección y control de accesos en entornos SAP.",
    href: "/servicios/seguridad-sap",
    color: "from-[#103268] to-[#00BEFE]",
  },
  {
    title: "SAP S/4HANA",
    description: "Migración y adopción de nueva generación SAP.",
    href: "/servicios/sap-s4-hana",
    color: "from-[#00BEFE] to-[#76BC21]",
  },
  {
    title: "SAP RISE",
    description: "Transformación digital con SAP en la nube.",
    href: "/servicios/sap-rise",
    color: "from-[#76BC21] to-[#103268]",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ConsultoriaSAPPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: La imagen de fondo del servicio real en alta resolución */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" 
            alt="Consultoría SAP Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Capa 2: Degradado EAS translúcido premium que corre de Verde a Azul Marino con opacidad balanceada */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#103268]/95 via-[#103268]/85 to-[#76BC21]/80 mix-blend-multiply" />

        {/* Capa 3: Micro-orbes de iluminación para aportar suavidad y dinamismo */}
        <div className="absolute inset-0 z-20 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BEFE] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#76BC21] rounded-full blur-2xl" />
        </div>

        {/* Capa 4: Contenido textual de alto impacto */}
        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1.5 mb-6 text-2xs md:text-sm font-bold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-[#00BEFE] backdrop-blur-md">
              SAP Silver Partner
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Consultoría y Proyectos SAP{" "}
            <span className="bg-gradient-to-r from-[#00BEFE] to-[#76BC21] bg-clip-text text-transparent">
              Técnico y Funcional
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            ¿Tienes retos SAP de carácter Técnico o Funcional? Te apoyamos con adaptaciones,
            nuevas funcionalidades, normativas de ley, actualización de versiones, optimizaciones de código y más.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#00BEFE] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Cotizar ahora
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SCOPE TÉCNICO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#00BEFE] mb-3 font-montserrat">
            Alcance Técnico
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Nuestra Especialidad Basis e Infraestructura
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Detecta, analiza y evoluciona la arquitectura y el performance tecnológico de tus sistemas SAP día con día de la mano de expertos certificados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scopeTecnico.map((item, i) => {
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

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* SCOPE FUNCIONAL */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#76BC21] mb-3 font-montserrat">
            Alcance Funcional
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Consultoría de Procesos y Operación
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Identifica, diseña y optimiza los flujos clave de tu operación empresarial para maximizar la productividad de tu organización utilizando las mejores prácticas de la industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scopeFuncional.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#76BC21]/30 hover:shadow-xl hover:shadow-slate-100/85 transition-all duration-300 ease-out cursor-default"
              >
                <div className="mb-6 flex">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-[#103268]/5 border border-[#103268]/10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#76BC21]/10 group-hover:border-[#76BC21]/30">
                    <IconComponent className="w-7 h-7 stroke-[2] text-[#103268] transition-colors duration-300 group-hover:text-[#76BC21]" />
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-[#103268] mb-3 group-hover:text-[#76BC21] transition-colors font-montserrat uppercase tracking-wide">
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

      {/* SUBSERVICIOS */}
      <section className="px-6 py-24 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[14px] font-black uppercase tracking-[0.35em] text-[#103268] mb-3 font-montserrat block">
              Especialidades
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              Soluciones SAP Especializadas
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Profundiza en cada área tecnológica de vanguardia que EAS Consulting tiene lista para implementar en tu ecosistema.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {subservicios.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -8 }}>
                <Link href={s.href}>
                  <div className="group h-full p-[1px] rounded-3xl bg-[#103268]/5 border border-[#103268]/10 hover:border-[#00BEFE]/30 transition duration-300">
                    <div className="h-full rounded-[23px] bg-white p-8 group-hover:shadow-xl group-hover:shadow-slate-100/90 transition shadow-sm">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${s.color} mb-6`} />
                      <h3 className="text-xl font-bold text-[#103268] mb-2 font-montserrat">{s.title}</h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed font-poppins">{s.description}</p>
                      <span className="inline-flex text-xs font-bold text-[#00BEFE] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                        Saber más →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER MODULAR Y COMPARTIDO */}
      <CtaBanner />

    </main>
  );
}