import { Input } from '@chakra-ui/react'
import type { InputTextProps } from './type'
export const InputText = (props: InputTextProps) => {
  return (
    <Input
      h={10}
      w={'full'}
      color={'text.base'}
      _placeholder={{ color: 'text.placeholder' }}
      {...props}
    />
  )
}
