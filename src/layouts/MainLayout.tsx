import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <Header />

      <main>
        {/* Local onde as páginas filhas serão renderizadas */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
