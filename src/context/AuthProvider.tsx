import { type PropsWithChildren, useState } from 'react'

import { type User } from '@/types/User'
import { AuthContext } from '@/context/AuthContext'

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean
}

export default function AuthProvider({ children, isSignedIn }: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const [user] = useState<User | null>(isSignedIn ? { id: 1 } : null)

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
