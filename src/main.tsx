import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './globals.css'
import { router } from './routes'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
