import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const colors = {
  text: {
    base: '#292524',
    placeholder: '#A8A29E',
    warning: '#EF4444',
  },

  bg: {
    root: '#F5F5F4',
    warning: '#EF4444',
  },
}

export const theme = extendTheme(
  { colors: colors }
  // withDefaultColorScheme({
  //   colorScheme: 'red',
  //   components: ['Input'],
  // })
)
