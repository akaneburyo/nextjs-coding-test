import { Button } from '@chakra-ui/react'

import type { ButtonGradientProps } from './type'

export const ButtonGradient = ({
  type,
  isLoading,
  isDisabled,
  onClick,
  children,
}: ButtonGradientProps) => {
  return (
    <Button
      h={'40px'}
      w={'full'}
      type={type}
      borderRadius={'base'}
      boxShadow={'base'}
      bgGradient={'linear(to-r, rgb(114,69,237), rgb(200,141,241))'}
      _hover={{
        bgGradient: 'linear(to-r, rgba(114,69,237,0.8), rgba(200,141,241)),0.8',
      }}
      textColor={'white'}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
