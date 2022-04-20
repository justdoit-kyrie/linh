// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  // global style
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat, sans-serif',
      },
      html: {
        fontSize: '62.5%',
      }
    },
  }
}


// 3. extend the theme
const theme = extendTheme(config)

export default theme