import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

import theme from '~utils/theme'

const AppProvider: React.FC = ({ children }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider value="light">{children}</ColorModeProvider>
    </ThemeProvider>
  </CacheProvider>
)

export default AppProvider
