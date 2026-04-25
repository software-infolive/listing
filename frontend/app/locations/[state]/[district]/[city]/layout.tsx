import { ReactNode } from 'react'
import { generateMetadata } from './metadata'

export { generateMetadata }

export default function CityLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

