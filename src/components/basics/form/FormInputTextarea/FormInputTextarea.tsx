import { useMemo } from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import type { FieldValues } from 'react-hook-form'
import { useController } from 'react-hook-form'

import { InputTextarea } from '@/components/basics/inputs'
import { Label } from '../Label'

import type { FormInputTextAreaProps } from './type'

export const FormInputTextarea = <T extends FieldValues>({
  fieldProps,
  label,
  placeholder,
  isDisabled,
}: FormInputTextAreaProps<T>) => {
  const {
    field: { ref, name, value, onChange, onBlur },
    fieldState: { error },
  } = useController<T>(fieldProps)

  const isRequired = useMemo(
    () => !!fieldProps.rules?.required,
    [fieldProps.rules]
  )

  return (
    <FormControl ref={ref} isInvalid={!!error}>
      <Label label={label} isRequired={isRequired} />
      <InputTextarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        isDisabled={isDisabled}
      />

      {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
