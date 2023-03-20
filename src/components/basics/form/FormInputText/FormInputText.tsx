import { useMemo } from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useController } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'

import { InputText } from '@/components/basics/inputs'

import { Label } from '../Label'

import type { FormInputTextProps } from './type'

export const FormInputText = <T extends FieldValues>({
  fieldProps,
  label,
  placeholder,
}: FormInputTextProps<T>) => {
  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { error },
  } = useController<T>(fieldProps)

  const isRequired = useMemo(
    () => !!fieldProps.rules?.required,
    [fieldProps.rules]
  )

  return (
    <FormControl ref={ref} onChange={onChange} onBlur={onBlur}>
      <Label label={label} isRequired={isRequired} />
      <InputText value={value} placeholder={placeholder} />

      {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
