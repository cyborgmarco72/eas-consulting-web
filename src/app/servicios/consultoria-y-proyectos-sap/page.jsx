"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const scopeTecnico = [
  {
    title: "Migración",
    description:
      "Analice y desarrolle una estrategia tecnológica y operativa de migración de sistemas SAP a través de nuestra metodología y mejores prácticas.",
    icon: "🔄",
  },
  {
    title: "Update y Upgrade",
    description:
      "Estrategia tecnológica y operativa de actualización de sistemas SAP a través de nuestra experiencia y metodologías.",
    icon: "⬆️",
  },
  {
    title: "Assessment",
    description:
      "Detecte áreas de oportunidad e innovación en la infraestructura sobre la cual operan sus sistemas SAP día con día.",
    icon: "🔍",
  },
  {
    title: "Archiving",
    description:
      "Analice, archive, depure y consulte información histórica de sus soluciones SAP. Optimice procesos mientras reduce inversión en almacenamiento.",
    icon: "🗄️",
  },
  {
    title: "Instalación",
    description:
      "Implemente soluciones SAP con nuestra experiencia y certificación SAP Silver Partner, asegurando calidad y excelencia.",
    icon: "⚙️",
  },
  {
    title: "Seguridad",
    description:
      "Desarrolle una estrategia que blinde la operación de sus sistemas SAP desde una perspectiva tecnológica y operativa.",
    icon: "🔒",
  },
  {
    title: "Monitoreo y Alertamiento",
    description:
      "Servicio de monitoreo preventivo y gestión de su aplicativo basado en las mejores prácticas de SAP.",
    icon: "📡",
  },
  {
    title: "Recursos Especializados",
    description:
      "Soluciones a la medida de su negocio. Alineamos juntos su estrategia tecnológica con nuestro equipo de especialistas.",
    icon: "👥",
  },
  {
    title: "Consultoría y Proyectos",
    description:
      "Creamos y ejecutamos el plan estratégico para su organización. Una de nuestras principales áreas de especialización.",
    icon: "📋",
  },
];

const scopeFuncional = [
  {
    title: "Assessment",
    description:
      "Detecte áreas de oportunidad e innovación en los procesos de su negocio. Presentamos un plan de acción que se adecua a la criticidad detectada.",
    icon: "🔍",
  },
  {
    title: "Implementación",
    description:
      "Implemente soluciones SAP identificando y programando de forma precisa los requerimientos, equipos y actividades necesarios.",
    icon: "🚀",
  },
  {
    title: "Roll Out",
    description:
      "Integre la evolución estratégica de su negocio a través de nuestro modelo de Roll Out de sistemas SAP.",
    icon: "🌐",
  },
  {
    title: "Innovación de Procesos",
    description:
      "Como SAP Silver Partner, identificamos, resolvemos, optimizamos y automatizamos los procesos de su negocio.",
    icon: "💡",
  },
  {
    title: "Administración de Proyectos",
    description:
      "A través de metodologías ITIL aseguramos el éxito de sus proyectos SAP con acompañamiento continuo.",
    icon: "📊",
  },
  {
    title: "Seguridad",
    description:
      "Desarrolle una estrategia que blinde sus sistemas y procesos SAP desde una perspectiva de negocio.",
    icon: "🔒",
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
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#103268] to-[#0a1f4e]">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#00BEFE] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#76BC21] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-white/10 border border-white/20 text-[#00BEFE]">
              SAP Silver Partner
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Consultoría y Proyectos SAP{" "}
            <span className="bg-gradient-to-r from-[#00BEFE] to-[#76BC21] bg-clip-text text-transparent">
              Técnico y Funcional
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            ¿Tienes retos SAP Técnicos o Funcionales? Te ayudamos con adaptaciones,
            nuevas funcionalidades, normativas de ley, actualización de versiones y más.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/contacto">
              <button className="px-8 py-4 rounded-xl bg-[#00BEFE] text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#00BEFE]/30 transition">
                Cotiza ahora
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SCOPE TÉCNICO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-sm font-semibold text-[#00BEFE] uppercase tracking-widest">
            Alcance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#103268] mt-2">
            Scope Técnico
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Herramientas para detectar áreas de oportunidad e innovación sobre sus sistemas SAP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeTecnico.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#00BEFE]/30 transition cursor-default"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#103268] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* SCOPE FUNCIONAL */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-sm font-semibold text-[#76BC21] uppercase tracking-widest">
            Alcance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#103268] mt-2">
            Scope Funcional
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Detecte áreas de oportunidad e innovación en los procesos de su negocio y operación continua.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeFuncional.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-[#76BC21]/30 transition cursor-default"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#103268] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUBSERVICIOS */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-sm font-semibold text-[#103268] uppercase tracking-widest">
              Especialidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#103268] mt-2">
              Soluciones SAP Especializadas
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Profundiza en cada área de especialización de EAS Consulting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {subservicios.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -8 }}>
                <Link href={s.href}>
                  <div className="group h-full p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 hover:from-[#00BEFE]/40 hover:to-[#76BC21]/40 transition">
                    <div className="h-full rounded-2xl bg-white p-8 border border-gray-200 group-hover:border-[#00BEFE]/30 transition shadow-sm">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} mb-6`} />
                      <h3 className="text-xl font-bold text-[#103268] mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-500 mb-6">{s.description}</p>
                      <span className="text-sm font-medium text-[#00BEFE] opacity-0 group-hover:opacity-100 transition">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 text-center">
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-r from-[#103268] to-[#00BEFE]/80 border border-[#103268]/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para optimizar tu ecosistema SAP?
          </h2>
          <p className="text-white/80 mb-8">
            Hablemos y diseñemos juntos la mejor estrategia para tu organización.
          </p>
          <Link href="/contacto">
            <button className="px-8 py-4 rounded-xl bg-white text-[#103268] font-semibold hover:scale-105 transition">
              Cotizar ahora
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}