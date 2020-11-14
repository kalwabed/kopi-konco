import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'

import theme from '@/utils/theme'

const AppProvider: React.FC = ({ children }) => (
  <CacheProvider value={cache}>
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  </CacheProvider>
)

export default AppProvider
