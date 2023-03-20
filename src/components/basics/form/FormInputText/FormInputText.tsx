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
  isDisabled,
}: FormInputTextProps<T>) => {
  const {
    field: { ref, name, value, onChange, onBlur },
    fieldState: { error },
  } = useController<T>(fieldProps)

  const isRequired = useMemo(
    () => !!fieldProps.rules?.required,
    [fieldProps.rules]
  )

  return (
    <FormControl ref={ref}>
      <Label label={label} isRequired={isRequired} />
      <InputText
        name={name}
        value={value}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
