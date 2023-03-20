import { apiClient } from '@/lib/api'
import useAspidaSWR from '@aspida/swr'

export const useFetchPrefectures = () => {
  return useAspidaSWR(apiClient.prefectures, {})
}
