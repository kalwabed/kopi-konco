import { Stack, useColorMode, useTheme } from '@chakra-ui/core'
import Header from './header'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  const { colors } = useTheme()

  const color = { dark: 'white', light: 'black' }
  return (
    <>
      <Header />
      <Stack as="main" color={color[colorMode]}>
        {children}
      </Stack>
      <style jsx global>{`
        body {
          background-color: ${colorMode === 'dark' ? colors.black : 'white'};
        }
      `}</style>
    </>
  )
}

export default Layout
