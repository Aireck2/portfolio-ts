import { createTheme } from '@nextui-org/react'
import { fonts } from './common'

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts,
    colors: {
      headerBackground: 'hsla(0,0%,100%,0.8)',
      gradient: 'linear-gradient(90deg, #f7b500 0.03%, #b620e0 48.96%, #32c5ff 99.97%)',
      link: '#5E1DAD',
    },
  },
})
