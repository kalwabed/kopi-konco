import { theme as baseTheme } from '@chakra-ui/core'

const customColors = {
  dark: '#212529',
  info: '#81f6fe',
  primary: {
    50: '#ebf4fa',
    100: '#d1dbe0',
    200: '#b6c2ca',
    300: '#98a9b5',
    400: '#7b919f',
    500: '#627786',
    600: '#4b5d68',
    700: '#36434b',
    800: '#1f282e',
    900: '#040e13'
  }
}

const fonts = {
  body: '"Inter", sans-serif',
  heading: '"Inter", sans-serif',
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...customColors
  },
  fonts
}

export default theme
