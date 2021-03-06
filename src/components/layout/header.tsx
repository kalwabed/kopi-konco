import {
  Stack,
  Box,
  Link,
  useColorMode,
  Flex,
  IconButton,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react'
import Nextlink from 'next/link'
import { CgMenu } from 'react-icons/cg'
import { FiMinus, FiMoon, FiSun } from 'react-icons/fi'
import { useRef } from 'react'

import { theme } from '@/utils'
import siteConfig from 'site-config'

const color = { dark: 'white', light: theme.colors.dark }

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const borderColor = useColorModeValue('primary.300', 'primary.600')

  return (
    <Stack
      borderBottom={['1px', '0']}
      borderColor={borderColor}
      as="header"
      px={['2', '5']}
      py="3"
      spacing={6}
      bg={colorMode === 'dark' ? 'dark' : 'white'}
      color={color[colorMode]}
    >
      <NavBar colorMode={colorMode} toggle={toggleColorMode} />
    </Stack>
  )
}

const NavLink = ({ title = '', href = '/', ...rest }) => (
  <Nextlink href={href} passHref>
    <Link fontSize="lg" p={5} _hover={{ color: 'gray.500' }} {...rest}>
      {title}
    </Link>
  </Nextlink>
)

const NavBar = ({ colorMode, toggle }) => {
  return (
    <Flex px={[0, 5]} wrap={['wrap', 'nowrap']} mx={[0, 8]} as="nav" align="center" justify="space-between">
      <Flex align="center">
        <NavLink title={siteConfig.title} fontSize="2xl" fontWeight="bold" />
      </Flex>

      <Menu colorMode={colorMode} toggle={toggle} />

      <Box d={['none', 'block']}>
        <Flex align="center">
          {siteConfig.routes.map(({ title, url }) => (
            <NavLink href={url} title={title} key={title} />
          ))}
          <IconButton
            ml={[0, 3]}
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            aria-label="Theme provider"
            onClick={toggle}
          />
        </Flex>
      </Box>
    </Flex>
  )
}

const Menu = ({ colorMode, toggle }) => {
  const { onClose, isOpen, onOpen } = useDisclosure()

  const btnRef = useRef()

  return (
    <Box d={['block', 'none']} mr="2">
      <IconButton icon={<CgMenu />} aria-label="Menu" ref={btnRef} colorScheme="gray" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay>
          <DrawerContent color={color[colorMode]}>
            <DrawerCloseButton />
            <DrawerHeader>
              <IconButton
                ml={[0, 3]}
                icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
                aria-label="Theme provider"
                onClick={toggle}
              />
            </DrawerHeader>

            <DrawerBody>
              <List>
                {siteConfig.routes.map(({ title, url }) => (
                  <ListItem mt="3" key={title}>
                    <ListIcon as={FiMinus} />
                    <NavLink href={url} title={title} onClick={onClose} />
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Header
