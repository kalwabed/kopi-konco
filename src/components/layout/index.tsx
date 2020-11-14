import { Stack, useColorMode } from '@chakra-ui/react'

import { theme } from '@/utils'
import Header from './header'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()

  const color = { dark: 'white', light: theme.colors.dark }
  return (
    <>
      <Header />
      <Stack as="main" color={color[colorMode]}>
        {children}
      </Stack>
      <style jsx global>{`
        body {
          background-color: ${colorMode === 'dark' ? theme.colors.dark : 'white'};
          color: ${colorMode === 'dark' ? 'white' : theme.colors.dark};
        }
        *::selection {
          background-color: ${theme.colors.info};
          color: ${theme.colors.dark};
        }
      `}</style>
    </>
  )
}

export default Layout
