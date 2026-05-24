"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FileSpreadsheet, 
  Target, 
  Layers, 
  PieChart, 
  TrendingUp, 
  BarChart3,
  Clock,
  ShieldCheck,
  Calculator
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";

const alcancesAccountfy = [
  {
    title: "Reportes Financieros Automatizados",
    description:
      "Generación de estados financieros (P&L, Balance General) en tiempo real, eliminando el trabajo manual en múltiples hojas de cálculo.",
    icon: FileSpreadsheet,
  },
  {
    title: "Presupuestos y Forecast",
    description:
      "Proyección financiera y elaboración de presupuestos colaborativos con control de versiones y comparativas contra el gasto real.",
    icon: Target,
  },
  {
    title: "Consolidación Contable",
    description:
      "Unificación automática de la información de múltiples entidades empresariales, sucursales y monedas, conciliando saldos intercompañía.",
    icon: Layers,
  },
  {
    title: "Dashboards Gerenciales",
    description:
      "Paneles visuales interactivos y personalizables para el CFO y la mesa directiva, diseñados para una toma de decisiones informada.",
    icon: PieChart,
  },
  {
    title: "Gestión de Flujo de Efectivo",
    description:
      "Visibilidad completa de cuentas por cobrar, cuentas por pagar y proyecciones de tesorería (Cash Flow) para cuidar la liquidez.",
    icon: TrendingUp,
  },
  {
    title: "Indicadores de Negocio (KPIs)",
    description:
      "Monitoreo centralizado del desempeño empresarial con métricas clave predefinidas y configurables según su industria.",
    icon: BarChart3,
  },
];

const beneficiosAccountfy = [
  {
    title: "Cierre Contable Rápido",
    description:
      "Reduzca drásticamente los días de cierre a final de mes, automatizando las tareas repetitivas de conciliación y cuadre.",
    icon: Clock,
  },
  {
    title: "Cero Errores Manuales",
    description:
      "Garantice la integridad, trazabilidad y seguridad de su información financiera al independizarse del riesgo del factor humano en Excel.",
    icon: ShieldCheck,
  },
  {
    title: "Evolución a Rol Estratégico",
    description:
      "Libere a su equipo de finanzas de la captura de datos (operativo) para que dediquen su tiempo al análisis de rentabilidad (estratégico).",
    icon: Calculator,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AccountfyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: Imagen de fondo representativa de Finanzas y Análisis de Datos */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
            alt="Socio Estratégico Accountfy" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Capa 2: Degradado EAS translúcido premium */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#103268]/95 via-[#103268]/85 to-[#76BC21]/80 mix-blend-multiply" />

        {/* Capa 3: Micro-orbes de iluminación */}
        <div className="absolute inset-0 z-20 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BEFE] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#76BC21] rounded-full blur-2xl" />
        </div>

        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1.5 mb-6 text-2xs md:text-sm font-bold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-[#76BC21] backdrop-blur-md">
              Socio Estratégico Corporativo
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Gestión Financiera con{" "}
            <span className="bg-gradient-to-r from-[#76BC21] to-[#00BEFE] bg-clip-text text-transparent">
              Accountfy
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            La plataforma SaaS líder para la transformación y automatización del Corporate Performance Management (CPM). Integramos sus ERPs para que obtenga visibilidad directiva inmediata sin depender de hojas de cálculo descentralizadas.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#76BC21] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Solicitar Demo Financiera
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CAPACIDADES DEL SERVICIO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#76BC21] mb-3 font-montserrat">
            Solución SaaS CPM
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Nuestros Módulos de Implementación
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
            Como socios habilitadores implementamos Accountfy en su organización en tiempo récord, conectándolo directamente con sus bases de datos operativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alcancesAccountfy.map((item, i) => {
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

      {/* SECCIÓN COMPLEMENTARIA DE BENEFICIOS */}
      <section className="px-6 py-24 bg-slate-50/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <span className="text-[14px] font-black uppercase tracking-[0.35em] text-[#103268] mb-3 font-montserrat block">
              Impacto Directivo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              Beneficios para el CFO y la Mesa Directiva
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
              Convierta la tecnología en el mejor aliado estratégico de la dirección financiera.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosAccountfy.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -8 }}>
                  <div className="group h-full p-[1px] rounded-3xl bg-[#103268]/5 border border-[#103268]/10 hover:border-[#00BEFE]/30 transition duration-300">
                    <div className="h-full rounded-[23px] bg-white p-8 group-hover:shadow-xl group-hover:shadow-slate-100/90 transition shadow-sm">
                      <div className="mb-6 flex">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#103268]/5 border border-[#103268]/10 group-hover:bg-[#00BEFE]/10 group-hover:border-[#00BEFE]/30 transition duration-300">
                          <IconComponent className="w-6 h-6 text-[#103268] group-hover:text-[#00BEFE] transition-colors" />
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