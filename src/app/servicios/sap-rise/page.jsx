"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  FileSignature, 
  BrainCircuit, 
  Wrench, 
  Network, 
  Layers,
  TrendingDown,
  MoveUpRight,
  ShieldCheck
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";

const alcancesRise = [
  {
    title: "Migración Cloud Integral",
    description:
      "Llevamos su ERP on-premise a un entorno de nube moderno, seguro y residente, gestionando toda la logística técnica de la transición.",
    icon: Cloud,
  },
  {
    title: "Un Solo Contrato (SLA)",
    description:
      "Simplificamos la administración al empaquetar software, infraestructura IaaS y servicios técnicos bajo un único acuerdo de nivel de servicio con SAP.",
    icon: FileSignature,
  },
  {
    title: "Inteligencia de Procesos",
    description:
      "Utilizamos SAP Signavio para analizar, rediseñar y monitorear sus flujos de negocio descubriendo cuellos de botella antes de migrar.",
    icon: BrainCircuit,
  },
  {
    title: "Plataforma BTP",
    description:
      "Integramos recursos de la SAP Business Technology Platform para que desarrolle aplicaciones y extienda su ERP sin modificar el código base (Clean Core).",
    icon: Layers,
  },
  {
    title: "Business Network",
    description:
      "Conectamos su operación digitalmente con proveedores, operadores logísticos y socios comerciales dentro de la red global de SAP.",
    icon: Network,
  },
  {
    title: "Herramientas de Adopción",
    description:
      "Proporcionamos metodologías comprobadas, herramientas de prueba y servicios de preparación para un despliegue sin interrupciones.",
    icon: Wrench,
  },
];

const beneficiosRise = [
  {
    title: "Reducción del TCO",
    description:
      "Disminuya drásticamente su Costo Total de Propiedad al cambiar modelo de gastos de capital (CAPEX) a gastos operativos (OPEX).",
    icon: TrendingDown,
  },
  {
    title: "Escalabilidad Elástica",
    description:
      "Aumente o reduzca capacidades de infraestructura bajo demanda, respondiendo rápidamente a las fluctuaciones del mercado.",
    icon: MoveUpRight,
  },
  {
    title: "Seguridad y Disponibilidad",
    description:
      "Benefíciese de la ciberseguridad avanzada y los respaldos geográficos provistos directamente por los hiperescaladores y SAP.",
    icon: ShieldCheck,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function SapRisePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: La imagen de fondo hiper-tecnológica (Nube / Redes) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
            alt="SAP RISE Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Capa 2: Degradado EAS translúcido premium */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#103268]/95 via-[#103268]/85 to-[#76BC21]/80 mix-blend-multiply" />

        {/* Capa 3: Micro-orbes de iluminación para aportar suavidad y dinamismo */}
        <div className="absolute inset-0 z-20 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BEFE] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#76BC21] rounded-full blur-2xl" />
        </div>

        <div className="relative z-30 max-w-5xl mx-auto text-center text-white">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block px-4 py-1.5 mb-6 text-2xs md:text-sm font-bold uppercase tracking-widest rounded-full bg-white/10 border border-white/20 text-[#76BC21] backdrop-blur-md">
              Business Transformation as a Service
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Transformación con{" "}
            <span className="bg-gradient-to-r from-[#76BC21] to-[#00BEFE] bg-clip-text text-transparent">
              SAP RISE
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Agilice su camino hacia la empresa inteligente. Llevamos su ERP corporativo a la nube simplificando contratos, reduciendo el Costo Total de Propiedad e impulsando la innovación continua en un solo modelo.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#76BC21] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Agendar Assessment
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PAQUETE RISE (CAPACIDADES) */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#76BC21] mb-3 font-montserrat">
            Ecosistema Integrado
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            ¿Qué incluye SAP RISE en tu organización?
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
            No es solo una actualización de software, es un modelo comercial consolidado que centraliza sus operaciones tecnológicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alcancesRise.map((item, i) => {
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
              Ventaja Competitiva
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              Razones para subir a la Nube EAS
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
              Rompa los ciclos rígidos on-premise y dote a su empresa de la flexibilidad e innovación continua que exige el mercado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosRise.map((item, i) => {
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