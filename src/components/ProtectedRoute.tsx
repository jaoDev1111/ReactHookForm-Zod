import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/login', { replace: true })
    }
  }, [user, navigate])

  return children
}
