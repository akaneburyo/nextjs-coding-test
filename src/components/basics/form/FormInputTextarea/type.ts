import { FieldValues, UseControllerProps } from 'react-hook-form'

export type FormInputTextAreaProps<T extends FieldValues> = {
  fieldProps: UseControllerProps<T>
  label: string
  placeholder?: string
  isDisabled?: boolean
}
