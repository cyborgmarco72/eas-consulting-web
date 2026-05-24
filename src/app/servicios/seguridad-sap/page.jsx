"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  KeyRound, 
  Eye, 
  Lock, 
  FileWarning, 
  LineChart, 
  UserX,
  FileCheck,
  ShieldAlert
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";

const pilaresSeguridad = [
  {
    title: "Control de Accesos (SoD)",
    description:
      "Diseño e implementación de matrices de segregación de funciones para mitigar riesgos en transacciones críticas de negocio.",
    icon: KeyRound,
  },
  {
    title: "Auditorías de Sistemas SAP",
    description:
      "Evaluación exhaustiva de perfiles y roles para asegurar el cumplimiento regulatorio antes, durante y después de auditorías internas o externas.",
    icon: FileCheck,
  },
  {
    title: "Monitoreo de Eventos",
    description:
      "Supervisión preventiva para detectar anomalías operativas y de inicio de sesión sospechosas en tiempo real.",
    icon: Eye,
  },
  {
    title: "Hardening de Servidores SAP",
    description:
      "Robustecimiento tecnológico de bases de datos, redes y servidores ERP para evitar vulnerabilidades de software y exploits.",
    icon: Lock,
  },
  {
    title: "Gestión de Vulnerabilidades",
    description:
      "Análisis continuo de notas de seguridad de SAP (SAP Security Notes) listas para ser aplicadas en su entorno.",
    icon: FileWarning,
  },
  {
    title: "Mitigación y Remedios",
    description:
      "Soporte especializado para la limpieza de roles duplicados o perfiles sobrecalificados sin impactar la continuidad de la operación.",
    icon: UserX,
  },
];

const beneficiosEntorno = [
  {
    title: "Cumplimiento Normativo",
    description:
      "Alineamos sus procesos tecnológicos SAP con SOX, regulaciones locales e internacionales y estándares corporativos.",
    icon: ShieldCheck,
  },
  {
    title: "Mitigación de Riesgos",
    description:
      "Reducimos la posibilidad de fugas de información interna y fraudes operativos mediante un estricto control transaccional.",
    icon: ShieldAlert,
  },
  {
    title: "Reportes Ejecutivos",
    description:
      "Tableros de control con KPI claros sobre la salud de accesos, roles obsoletos y estatus de seguridad general.",
    icon: LineChart,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function SeguridadSAPPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: La imagen de fondo del servicio real en alta resolución (Ciberseguridad) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
            alt="Seguridad SAP Background" 
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

        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1.5 mb-6 text-2xs md:text-sm font-bold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-[#76BC21] backdrop-blur-md">
              Compliance & Cyber Security
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Seguridad SAP{" "}
            <span className="bg-gradient-to-r from-[#76BC21] to-[#00BEFE] bg-clip-text text-transparent">
              Blindaje de Operación
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Protegemos la integridad operativa y la confidencialidad de los datos de su ERP. Implementamos estrategias robustas de control de accesos, segregación de funciones (SoD) y cumplimiento de auditoría.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#76BC21] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Contactar a un Consultor
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PILARES OPERATIVOS */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#76BC21] mb-3 font-montserrat">
            Capacidades
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Pilares de Seguridad Basados en Buenas Prácticas
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
            Le ayudamos a erradicar riesgos operativos y auditorías rechazadas aplicando metodología especializada de control y remediación técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pilaresSeguridad.map((item, i) => {
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
              Tranquilidad
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              Beneficios para tu Entorno Corporativo
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
              Mitiga vulnerabilidades para alcanzar una operación impecable frente a directores y auditores clave.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosEntorno.map((item, i) => {
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