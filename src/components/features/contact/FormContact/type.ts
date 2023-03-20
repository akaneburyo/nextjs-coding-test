import type { Methods as Contacts } from '@/lib/api/generated/contacts'
import type { Methods as Prefectures } from '@/lib/api/generated/prefectures'

export type ContactFormValues = {
  title: string
  name: string
  email: string
  address: {
    prefecture: string
    city: string
    detail?: string
  }
  detail: string
}

export type FormContactProps = {
  prefectures?: Prefectures['get']['resBody']['data']['items']
  isLoading: boolean
  onSubmit: (data: Contacts['post']['reqBody']) => void
}
