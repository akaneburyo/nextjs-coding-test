import { SelectOption } from '@/types'
import { FieldValues, UseControllerProps } from 'react-hook-form'

export type FormInputSelectProps<T extends FieldValues> = {
  fieldProps: UseControllerProps<T>
  label: string
  placeholder?: string
  options: SelectOption[]
  isDisabled?: boolean
}
