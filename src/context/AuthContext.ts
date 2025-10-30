import type { User } from '@/types/User'
import { createContext } from 'react'

export const AuthContext = createContext<User | null>(null)
