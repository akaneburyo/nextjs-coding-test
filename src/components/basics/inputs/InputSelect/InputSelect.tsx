import { Select } from '@chakra-ui/react'
import type { InputSelectProps } from './type'
export const InputSelect = ({ options, ...props }: InputSelectProps) => {
  return (
    <Select
      h={10}
      w={'full'}
      color={'text.base'}
      _placeholder={{ color: 'text.placeholder' }}
      {...props}
    >
      {options.map(({ key, content }) => (
        <option key={key}>{content}</option>
      ))}
    </Select>
  )
}
