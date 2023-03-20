import { FormContact } from '@/components/features/contact/FormContact'
import { Wrapper } from '../Wrapper'

export const PageContact = () => {
  return (
    <Wrapper title="お問い合わせ">
      <FormContact prefectures={[]} onSubmit={(data) => console.log(data)} />
    </Wrapper>
  )
}
