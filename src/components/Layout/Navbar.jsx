"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Casos de Éxito", href: "/#casos-de-exito" }, // Enlace inteligente al anclador de casos
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-100"
          : "bg-white py-5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center no-underline">
          <img
            src="/images/LogoEAS-Color.png"
            alt="EAS Consulting"
            className="h-14 md:h-16 w-auto object-contain block"
            priority="true"
          />
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-[#103268]/70 hover:text-[#00BEFE] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-6">
          
          {/* Botón de Contacto Estrella ligado a la sección final */}
          <a href="/#contacto" className="no-underline">
            <button className="bg-[#103268] text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#00BEFE] hover:scale-105 transition-all shadow-xl shadow-blue-900/20 active:scale-95">
              Contacto
            </button>
          </a>
        </div>

      </div>
    </header>
  )
}