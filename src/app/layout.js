import './globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import MainContainer from '../components/Layout/MainContainer' // <-- 1. Importamos el wrapper

export const metadata = {
  title: 'EAS Consulting | Expertos en SAP',
  description: 'Soluciones integrales de consultoría SAP y transformación digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans flex flex-col min-h-screen bg-white">
        
        {/* Navbar persistente y fija (ya tiene su validación para ocultarse) */}
        <Navbar />
        
        {/* Usamos el envoltorio que remueve el padding en las Landing Pages */}
        <MainContainer>
          {children}
        </MainContainer>
        
        {/* Footer persistente global */}
        <Footer />
        
      </body>
    </html>
  )
}
