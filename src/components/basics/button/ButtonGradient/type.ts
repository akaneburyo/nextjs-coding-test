import { ButtonHTMLAttributes, ReactNode } from 'react'
export type ButtonGradientProps = {
  isLoading?: boolean
  isDisabled?: boolean
  type: ButtonHTMLAttributes<'button'>['type']
  onClick?: () => void
  children: ReactNode
}
