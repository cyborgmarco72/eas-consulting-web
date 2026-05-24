"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Server, 
  ShieldAlert, 
  HardDriveUpload, 
  Cpu, 
  LineChart,
  Lock,
  Zap,
  Globe
} from "lucide-react";
import CtaBanner from "../../../components/CtaBanner/CtaBanner";

const alcancesNube = [
  {
    title: "Migración a Nube Pública",
    description:
      "Llevamos sus cargas de trabajo on-premise (SAP y no SAP) hacia los hiperescaladores líderes: AWS, Microsoft Azure o Google Cloud Platform.",
    icon: Cloud,
  },
  {
    title: "Alta Disponibilidad (HA) y DRP",
    description:
      "Diseño de arquitecturas tolerantes a fallos y planes de recuperación ante desastres para garantizar la continuidad ininterrumpida de su negocio.",
    icon: Server,
  },
  {
    title: "Ciberseguridad Perimetral",
    description:
      "Implementación de firewalls, WAF, gestión de identidades y encriptación de datos en reposo y en tránsito dentro de su entorno Cloud.",
    icon: ShieldAlert,
  },
  {
    title: "Gestión de Respaldos (Backup)",
    description:
      "Estrategias automatizadas de copias de seguridad inmutables, asegurando retención a largo plazo y restauraciones a nivel granular.",
    icon: HardDriveUpload,
  },
  {
    title: "Modernización de Arquitectura",
    description:
      "Rediseño de aplicaciones monolíticas hacia entornos basados en contenedores (Kubernetes/Docker) y microservicios nativos.",
    icon: Cpu,
  },
  {
    title: "FinOps y Optimización de Costos",
    description:
      "Análisis continuo del consumo de recursos para apagar capacidad ociosa, rightsizing de servidores y maximizar su inversión mensual.",
    icon: LineChart,
  },
];

const beneficiosNube = [
  {
    title: "Escalabilidad Dinámica",
    description:
      "Crezca su infraestructura en minutos durante picos de demanda estacional y redúzcala cuando pase, pagando solo por lo que usa.",
    icon: Zap,
  },
  {
    title: "Seguridad de Grado Militar",
    description:
      "Herede directamente las certificaciones de cumplimiento global (ISO, SOC, PCI) y la infraestructura física de los proveedores Cloud top tier.",
    icon: Lock,
  },
  {
    title: "Cobertura Global (Edge)",
    description:
      "Despliegue sus aplicaciones más cerca de sus usuarios finales y sucursales internacionales para reducir la latencia al mínimo.",
    icon: Globe,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function InfraestructuraNubePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-poppins">

      {/* HERO CON IMAGEN DE FONDO Y FILMINA TRANSLÚCIDA */}
      <section className="relative min-h-[550px] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        
        {/* Capa 1: Imagen de fondo representativa de Data Centers y Cloud Computing */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop" 
            alt="Infraestructura de Nube EAS" 
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
              Cloud Computing & Hosting
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 font-exo uppercase tracking-tight"
          >
            Infraestructura de{" "}
            <span className="bg-gradient-to-r from-[#76BC21] to-[#00BEFE] bg-clip-text text-transparent">
              Nube Empresarial
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg md:text-[20px] text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Despliegue sus ecosistemas SAP y aplicaciones críticas en entornos seguros, resilientes y altamente escalables. Optimizamos su tránsito hacia la nube maximizando rendimiento y reduciendo el costo total de propiedad corporativo.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/#contacto">
              <button className="px-8 py-4 rounded-2xl bg-[#76BC21] text-white font-extrabold uppercase tracking-wide text-xs hover:scale-105 hover:bg-white hover:text-[#103268] transition duration-300 shadow-xl shadow-black/10">
                Diseñar Arquitectura Cloud
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CAPACIDADES DEL SERVICIO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="text-[14px] font-black uppercase tracking-[0.35em] text-[#76BC21] mb-3 font-montserrat">
            Soluciones IaaS y PaaS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
            Nuestros Servicios de Migración y Gestión
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
            Somos agnósticos al proveedor. Construimos la nube perfecta sobre AWS, Azure o GCP dependiendo de la carga de trabajo y el objetivo financiero de su negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alcancesNube.map((item, i) => {
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
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#103268] font-exo uppercase tracking-tight">
              Beneficios de Adoptar la Nube con EAS
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed font-poppins">
              Deje atrás los servidores físicos obsoletos, el mantenimiento de hardware y el riesgo de pérdida de datos por catástrofes locales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiosNube.map((item, i) => {
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