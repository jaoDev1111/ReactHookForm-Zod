import { LoadingSpinner } from '@/components/commons/LoadingSpinner'
import { Suspense } from 'react'

export const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
)
