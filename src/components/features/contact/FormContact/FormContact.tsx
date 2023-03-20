import { ButtonGradient } from '@/components/basics/button/ButtonGradient'
import {
  FormInputSelect,
  FormInputText,
  FormInputTextarea,
} from '@/components/basics/form'
import { SelectOption } from '@/types'
import { VStack, Stack } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { CONTACT_CATEGORIES } from './constants'

import { FormContactProps, ContactFormValues } from './type'

export const FormContact = ({ prefectures, onSubmit }: FormContactProps) => {
  const { control, handleSubmit, formState } = useForm<ContactFormValues>({
    mode: 'all',
  })

  const prefectureOptions = useMemo<SelectOption[]>(
    () =>
      prefectures?.map(({ code, name }) => ({ key: code, content: name })) ||
      [],
    [prefectures]
  )

  const prefectureCodeWatch = useWatch({
    control,
    name: 'address.prefectureCode',
  })

  const onSubmitHandler = (formData: ContactFormValues) => {
    onSubmit({
      category: formData.category,
      name: formData.name,
      email: formData.email,
      address: {
        prefecture_code: formData.address.prefectureCode,
        city: formData.address.city,
        detail: formData.address.detail,
      },
      detail: formData.detail,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <VStack spacing={4}>
        <FormInputSelect
          label={'お問い合わせ内容'}
          placeholder={'選択してください'}
          options={CONTACT_CATEGORIES}
          fieldProps={{
            control,
            name: 'category',
            rules: { required: '必須です' },
          }}
        />

        <FormInputText
          label={'お名前'}
          placeholder={'山田太郎'}
          fieldProps={{
            control,
            name: 'name',
            rules: {
              required: '必須です',
              maxLength: {
                value: 50,
                message: '名前は50文字以内で入力してください',
              },
            },
          }}
        />

        <FormInputText
          label={'メールアドレス'}
          placeholder={'メールアドレス'}
          fieldProps={{
            control,
            name: 'email',
            rules: {
              required: '必須です',
              validate: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  `${value}`
                ),
            },
          }}
        />

        <Stack w={'full'} direction={{ base: 'column', lg: 'row' }} spacing={4}>
          <FormInputSelect
            label={'都道府県'}
            placeholder={'選択してください'}
            options={prefectureOptions}
            fieldProps={{
              control,
              name: 'address.prefectureCode',
              rules: { required: '必須です' },
            }}
          />

          {!!prefectureCodeWatch && (
            <FormInputText
              label={'市区町村'}
              placeholder={'市区町村'}
              fieldProps={{
                control,
                name: 'address.city',
                rules: {
                  required: '必須です',
                  maxLength: {
                    value: 50,
                    message: '市区町村は50文字以内で入力してください',
                  },
                },
              }}
            />
          )}
        </Stack>

        <FormInputTextarea
          label={'お問い合わせの詳細'}
          placeholder={'お問い合わせの詳細'}
          fieldProps={{
            control,
            name: 'detail',
            rules: {
              required: '必須です',
              maxLength: {
                value: 10000,
                message: '詳細は10000文字以内で入力してください',
              },
            },
          }}
        />

        <ButtonGradient type="submit">{'送信'}</ButtonGradient>
      </VStack>
    </form>
  )
}
