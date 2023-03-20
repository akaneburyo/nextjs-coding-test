import { ButtonHTMLAttributes, ReactNode } from 'react'
export type ButtonGradientProps = {
  type: ButtonHTMLAttributes<'button'>['type']
  onClick?: () => void
  children: ReactNode
}
