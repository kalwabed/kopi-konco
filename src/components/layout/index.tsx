import { Box, useColorMode } from '@chakra-ui/core'
import Header from './header'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  const color = { dark: 'white', light: 'black' }
  return (
    <>
      <Header />
      <Box as="main" px={[5, 16]} color={color[colorMode]}>
        {children}
      </Box>
      <style jsx global>{`
        body {
          background-color: ${colorMode === 'dark' ? '#00171f' : 'white'};
        }
      `}</style>
    </>
  )
}

export default Layout
