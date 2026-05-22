export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <span className="font-bold text-xl text-white uppercase tracking-tight">
                EAS <span className="text-blue-400">Consulting</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aliado estratégico líder en implementación de soluciones SAP, proyectos de infraestructura y transformación digital enterprise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Empresa</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Conócenos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Casos de Éxito</a></li>
            </ul>
          </div>

          {/* SAP Expertise */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">SAP Core</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">S/4HANA Public Cloud</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">SAP RISE</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Seguridad SAP</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Infraestructura Nube</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">📍</span>
                <span>Juan Salvador Agraz 50, Santa Fe, CDMX.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📞</span>
                <span>(55) 5254-3550</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✉️</span>
                <span>contacto@easconsulting.com.mx</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} EAS Consulting. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}