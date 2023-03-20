import type { ReactNode } from 'react'
import type { SelectProps as ChakraSelectProps } from '@chakra-ui/react'

import type { SelectOption } from '@/types'

export type InputSelectProps = ChakraSelectProps & {
  options: SelectOption[]
}
