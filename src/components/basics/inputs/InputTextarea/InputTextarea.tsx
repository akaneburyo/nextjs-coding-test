import { Textarea } from '@chakra-ui/react'
import type { InputTextareaProps } from './type'
export const InputTextarea = (props: InputTextareaProps) => {
  return (
    <Textarea
      minH={'160px'}
      w={'full'}
      color={'text.base'}
      _placeholder={{ color: 'text.placeholder' }}
      boxShadow={'base'}
      {...props}
    />
  )
}
