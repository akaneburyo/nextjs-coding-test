import type { ReactNode } from 'react'
import type { SelectProps as ChakraSelectProps } from '@chakra-ui/react'

export type SelectItem = {
  key: string
  content: ReactNode
}

export type InputSelectProps = ChakraSelectProps & {
  options: SelectItem[]
}
