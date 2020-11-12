import { Box, useColorMode, useTheme } from '@chakra-ui/core'
import Header from './header'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  const { colors } = useTheme()

  const color = { dark: 'white', light: 'black' }
  return (
    <>
      <Header />
      <Box as="main" px={[5, 16]} color={color[colorMode]}>
        {children}
      </Box>
      <style jsx global>{`
        body {
          background-color: ${colorMode === 'dark' ? colors.black : 'white'};
        }
      `}</style>
    </>
  )
}

export default Layout
