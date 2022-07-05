import { createTheme } from '@nextui-org/react'
import { fonts } from './common'

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts,
    colors: {
      headerBackground: 'hsla(0,0%,100%,0.8)',

      primaryLight: '$purple200',
      primaryLightHover: '$purple300', // commonly used on hover state
      primaryLightActive: '$purple400', // commonly used on pressed state
      primaryLightContrast: '$purple600', // commonly used for text inside the component
      primary: '$purple600',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white', // commonly used for text inside the component
      primaryShadow: '$purple500',

      gradient: 'linear-gradient(90deg, #f7b500 0.03%, #b620e0 48.96%, #32c5ff 99.97%)',
      link: '#5E1DAD',
    },
  },
})
