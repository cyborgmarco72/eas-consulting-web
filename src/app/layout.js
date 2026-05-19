import './globals.css'
// Importamos el JSON de la Home que ya tienes en tu repo
import content from '../../content_package/page_home.json'

export const metadata = {
  title: 'EAS Consulting | Expertos en SAP',
  description: 'Soluciones integrales de consultoría SAP y transformación digital.',
}

export default function RootLayout({ children }) {
  // Extraemos datos del JSON (ajustado a la estructura de tus archivos)
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Contacto', href: '#' },
  ]

  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo dinámico desde el JSON */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-[#005596] rounded-lg rotate-3 group-hover:rotate-0 transition-transform"></div>
              <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">
                EAS <span className="text-[#005596]">Consulting</span>
              </span>
            </div>
            
            {/* Navegación */}
            <nav className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-widest font-semibold text-slate-500">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-[#005596] transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Acción */}
            <div className="flex items-center gap-6">
              <button className="hidden sm:block text-sm font-bold text-[#005596] hover:opacity-75 transition">
                ES / EN
              </button>
              <button className="bg-[#005596] text-white px-8 py-3 rounded-full text-[12px] uppercase tracking-widest font-bold hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
               Contacto
              </button>
            </div>
          </div>
        </header>

        <main className="pt-20 bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
