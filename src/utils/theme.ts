import { theme as baseTheme } from '@chakra-ui/core'

const customColors = {
  dark: '#00171f',
  primary: {
    50: '#f7f4e6',
    100: '#e1decd',
    200: '#cbc9b2',
    300: '#b7b395',
    400: '#a29d77',
    500: '#89845e',
    600: '#6a6748',
    700: '#4c4933',
    800: '#2e2c1c',
    900: '#101000'
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
