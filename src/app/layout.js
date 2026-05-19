import './globals.css'

export const metadata = {
  title: 'EAS Consulting | Expertos en SAP',
  description: 'Soluciones integrales de consultoría SAP y transformación digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        {/* Este es nuestro Módulo Header con Glassmorphism */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 italic">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between font-normal not-italic">
            {/* Logo Temporal con el color corporativo que definimos */}
            <div className="font-bold text-2xl text-[12px] md:text-2xl text-[#005596]">EAS Consulting</div>
            
            {/* Menú de Navegación Desktop */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-[#005596] transition">Inicio</a>
              <a href="#" className="hover:text-[#005596] transition font-semibold">Nosotros</a>
              <a href="#" className="hover:text-[#005596] transition">Servicios</a>
              <a href="#" className="hover:text-[#005596] transition">Contacto</a>
            </nav>
            
            {/* Botón de Acción (Lead Magnet) */}
            <button className="bg-[#005596] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Cotizar
            </button>
          </div>
        </header>

        {/* El contenido de cada página se renderiza aquí abajo */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
