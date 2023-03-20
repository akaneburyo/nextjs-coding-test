import { FieldValues, UseControllerProps } from 'react-hook-form'

export type FormInputTextProps<T extends FieldValues> = {
  fieldProps: UseControllerProps<T>
  label: string
  placeholder?: string
}
