import { useState } from 'react'

import { FormContact } from '@/components/features/contact/FormContact'
import { Wrapper } from '../Wrapper'

import type { Methods as Contacts } from '@/lib/api/generated/contacts'
import { useFetchPrefectures } from '@/hooks/api/prefectures'
import { useCreateContact } from '@/hooks/api/contact'

export const PageContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data } = useFetchPrefectures()
  const { mutate } = useCreateContact()

  const onSubmitHandler = (data: Contacts['post']['reqBody']) => {
    setIsLoading(true)
    mutate({ body: data })
      .catch((e) => {
        // TODO
        console.error(e)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Wrapper title="お問い合わせ">
      <FormContact
        prefectures={data?.data.items}
        isLoading={isLoading}
        onSubmit={onSubmitHandler}
      />
    </Wrapper>
  )
}
