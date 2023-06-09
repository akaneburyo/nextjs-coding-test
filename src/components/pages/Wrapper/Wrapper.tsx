import { Box, Heading } from '@chakra-ui/react'

import type { WrapperProps } from './type'
export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <Box minH={'100vh'} bgColor={'bg.root'}>
      <Heading as="h1" p={4} fontSize={'base'} textAlign={'center'}>
        {title}
      </Heading>
      <Box
        mx={'auto'}
        p={{ base: 4, lg: 8 }}
        maxW={'640px'}
        borderRadius={'base'}
        bgColor={'white'}
      >
        {children}
      </Box>
    </Box>
  )
}
