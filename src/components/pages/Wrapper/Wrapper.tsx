import { Box, Heading } from '@chakra-ui/react'

import type { WrapperProps } from './type'
export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Box mx={'auto'} p={{ base: 4, lg: 8 }} maxW={'640px'}>
        {children}
      </Box>
    </Box>
  )
}
