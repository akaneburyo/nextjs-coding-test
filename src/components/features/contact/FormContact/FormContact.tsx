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
import { CONTACT_TITLES } from './constants'

import { FormContactProps, ContactFormValues } from './type'

export const FormContact = ({
  prefectures,
  isLoading,
  onSubmit,
}: FormContactProps) => {
  const { control, handleSubmit } = useForm<ContactFormValues>({
    mode: 'onBlur',
  })

  const prefectureOptions = useMemo<SelectOption[]>(
    () =>
      prefectures?.map(({ code, name }) => ({ key: code, content: name })) ||
      [],
    [prefectures]
  )

  const prefectureWatch = useWatch({
    control,
    name: 'address.prefecture',
  })

  const onSubmitHandler = (formData: ContactFormValues) => {
    onSubmit({
      title: formData.title,
      name: formData.name,
      email: formData.email,
      address: {
        prefecture: formData.address.prefecture,
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
          options={CONTACT_TITLES}
          isDisabled={isLoading}
          fieldProps={{
            control,
            name: 'title',
            rules: { required: '必須です' },
          }}
        />

        <FormInputText
          label={'お名前'}
          placeholder={'山田太郎'}
          isDisabled={isLoading}
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
          isDisabled={isLoading}
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
            isDisabled={isLoading}
            fieldProps={{
              control,
              name: 'address.prefecture',
              rules: { required: '必須です' },
            }}
          />

          {!!prefectureWatch && (
            <FormInputText
              label={'市区町村'}
              placeholder={'市区町村'}
              isDisabled={isLoading}
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

        {!!prefectureWatch && (
          <FormInputText
            label={'以降の住所'}
            placeholder={'以降の住所'}
            isDisabled={isLoading}
            fieldProps={{
              control,
              name: 'address.detail',
              rules: {
                required: '必須です',
                maxLength: {
                  value: 200,
                  message: '市区町村は200文字以内で入力してください',
                },
              },
            }}
          />
        )}

        <FormInputTextarea
          label={'お問い合わせの詳細'}
          placeholder={'お問い合わせの詳細'}
          isDisabled={isLoading}
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

        <ButtonGradient
          isLoading={isLoading}
          isDisabled={isLoading}
          type="submit"
        >
          {'送信'}
        </ButtonGradient>
      </VStack>
    </form>
  )
}
