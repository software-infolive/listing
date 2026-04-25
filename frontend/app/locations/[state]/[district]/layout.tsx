import { ReactNode } from 'react'
import { generateMetadata } from './metadata'

export { generateMetadata }

export default function DistrictLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

