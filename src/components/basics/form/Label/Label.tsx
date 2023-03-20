import { FormLabel, HStack, Text } from '@chakra-ui/react'
import type { LabelProps } from './type'

export const Label = ({ label, isRequired }: LabelProps) => {
  return (
    <FormLabel>
      <HStack spacing={1}>
        <Text textColor={'text.base'} fontSize={'sm'} fontWeight="bold">
          {label}
        </Text>
        {isRequired && (
          <Text fontSize={'xs'} textColor={'text.warning'}>
            {'*'}
          </Text>
        )}
      </HStack>
    </FormLabel>
  )
}
