import './globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

export const metadata = {
  title: 'EAS Consulting | Expertos en SAP',
  description: 'Soluciones integrales de consultoría SAP y transformación digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans flex flex-col min-h-screen bg-white">
        
        {/* Navbar persistente y fija */}
        <Navbar />
        
        {/* El marcador flexible "flex-grow" asegura que el contenido de los children 
            empuje dinámicamente al Footer hacia la parte inferior de la pantalla */}
        <main className="pt-20 bg-white flex-grow">
          {children}
        </main>
        
        {/* Footer persistente global */}
        <Footer />
        
      </body>
    </html>
  )
}
