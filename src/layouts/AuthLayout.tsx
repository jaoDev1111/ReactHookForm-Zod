import { Outlet } from 'react-router-dom'
import type { JSX } from 'react'

export function AuthLayout(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Trocar por Container */}
      <div className="w-full max-w-md">
        {/* Local onde as páginas filhas serão renderizadas */}
        <Outlet />
      </div>
    </div>
  )
}
