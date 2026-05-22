import './globals.css'
import Navbar from '../components/Layout/Navbar'

export const metadata = {
  title: 'EAS Consulting | Expertos en SAP',
  description: 'Soluciones integrales de consultoría SAP y transformación digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <Navbar />
        <main className="pt-20 bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
