import { apiClient } from '@/lib/api'
export const useCreateContact = () => {
  return {
    mutate: apiClient.contacts.$post,
  }
}
