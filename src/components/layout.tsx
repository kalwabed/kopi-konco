import { Stack, Box, Link, useColorMode, Flex, IconButton } from '@chakra-ui/core'
import Nextlink from 'next/link'

import siteConfig from 'site-config'

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = { dark: 'white', light: 'black' }

  return (
    <>
      <Stack
        as="header"
        mx={8}
        mb={5}
        p={5}
        spacing={8}
        bg={colorMode === 'dark' ? 'dark' : 'white'}
        color={color[colorMode]}
      >
        <Header colorMode={colorMode} toggle={toggleColorMode} />
      </Stack>
      <Box as="main" px={16}>
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

const NavLink = ({ title = '', href = '/', ...rest }) => (
  <Nextlink href={href}>
    <Link
      fontSize={['m', 'l']}
      fontWeight="bold"
      href={href}
      p={5}
      _hover={{ textDecor: 'none', color: 'gray.500' }}
      {...rest}
    >
      {title}
    </Link>
  </Nextlink>
)

const Header = ({ colorMode, toggle }) => {
  return (
    <Flex
      px={[2, 5]}
      wrap={['wrap', 'unset']}
      mx={[0, 8]}
      pos="relative"
      as="nav"
      align="center"
      justify={['center', 'space-between']}
    >
      <Flex align="center">
        <NavLink title="kopi desa" />
        <IconButton
          visibility={['visible', 'hidden']}
          ml={3}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          aria-label="Theme provider"
          onClick={toggle}
        />
      </Flex>
      <Box>
        <Flex align="center">
          {siteConfig.routes.map(({ title, url }) => (
            <NavLink href={url} title={title} />
          ))}
          <IconButton
            visibility={['hidden', 'visible']}
            ml={[0, 3]}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            aria-label="Theme provider"
            onClick={toggle}
          />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Layout
