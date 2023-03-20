import { useMemo } from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useController } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'

import { InputSelect } from '@/components/basics/inputs'

import { Label } from '../Label'

import type { FormInputSelectProps } from './type'

export const FormInputSelect = <T extends FieldValues>({
  fieldProps,
  label,
  placeholder,
  options,
  isDisabled,
}: FormInputSelectProps<T>) => {
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
      <InputSelect
        name={name}
        value={value}
        placeholder={placeholder}
        options={options}
        isDisabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
