"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-easNavy pt-24 pb-12 text-white border-t border-white/5 font-poppins"
      role="contentinfo"
      aria-label="Footer principal"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Mission (LOGO BLANCO OFICIAL) */}
          <div className="space-y-6 -mt-4 md:-mt-12">
            <Link href="/" className="inline-block">
              <img 
                src="/images/LogoEAS_Blanco.png" 
                alt="EAS Consulting Logo Blanco" 
                className="h-24 md:h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aliado estratégico líder en implementación de soluciones SAP, proyectos de infraestructura y transformación digital enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-easLightBlue font-bold text-xs uppercase tracking-widest font-montserrat">Navegación</h4>
            <ul className="space-y-4 text-slate-400 text-sm uppercase tracking-wider font-semibold font-montserrat">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>INICIO</span>
                  <ArrowUpRight className="w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>NOSOTROS</span>
                  <ArrowUpRight className="w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>SERVICIOS</span>
                  <ArrowUpRight className="w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#casos-de-exito" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>CASOS DE ÉXITO</span>
                  <ArrowUpRight className="w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* SAP Expertise */}
          <div className="space-y-6">
            <h4 className="text-easGreen font-bold text-xs uppercase tracking-widest font-montserrat">SAP Core</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link href="/servicios/sap-s4hana" className="hover:text-easGreen transition-colors">
                  S/4HANA Public Cloud
                </Link>
              </li>
              <li>
                <Link href="/servicios/sap-rise" className="hover:text-easGreen transition-colors">
                  SAP RISE
                </Link>
              </li>
              <li>
                <Link href="/servicios/seguridad-sap" className="hover:text-easGreen transition-colors">
                  Seguridad SAP
                </Link>
              </li>
              <li>
                <Link href="/servicios/infraestructura-de-nube" className="hover:text-easGreen transition-colors">
                  Infraestructura Nube
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-montserrat">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-easGreen shrink-0 mt-0.5" />
                <span>Juan Salvador Agraz 50, Santa Fe, CDMX.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-easLightBlue shrink-0" />
                <span>(55) 5254-3550</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-easLightBlue shrink-0" />
                <a href="mailto:contacto@easconsulting.com.mx" className="hover:text-white transition-colors">
                  contacto@easconsulting.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-montserrat">
            © {currentYear} EAS Consulting. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest font-montserrat">
            <Link href="/privacy" className="hover:text-white transition">Aviso de Privacidad</Link>
            <Link href="/terms" className="hover:text-white transition">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}