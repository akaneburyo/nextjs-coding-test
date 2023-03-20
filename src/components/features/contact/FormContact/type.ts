import type { Methods as Contacts } from '@/lib/api/generated/contacts'

import type { Methods as Prefectures } from '@/lib/api/generated/prefectures'

export type ContactFormValues = {
  category: string
  name: string
  email: string
  address: {
    prefectureCode: string
    city: string
    detail?: string
  }
  detail: string
}

export type FormContactProps = {
  prefectures?: Prefectures['get']['resBody']['items']
  onSubmit: (data: Contacts['post']['reqBody']) => void
}
