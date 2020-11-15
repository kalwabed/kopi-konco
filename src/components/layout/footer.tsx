import { Box, Flex, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import siteConfig from 'site-config'
import { ChakraNextLink } from '../helpers'

const Footer = () => {
  return (
    <Stack as="footer" bg="primary.700" color="white" py="8" px={[2, 5]}>
      <SimpleGrid columns={[1, 2]} gap={5} mx={[5, 10]}>
        <Flex justify={['center', 'start']} align="center">
          <Box>
            <ChakraNextLink href="/" fontWeight="bold">
              {siteConfig.title}{' '}
            </ChakraNextLink>
            <Text as="small">©2020 under MIT license</Text>
            <Text fontSize="sm" color="gray.300">
              all pictures provided by <LinkExternal href="https://unsplash.com" title="Unsplash" />
            </Text>
          </Box>
        </Flex>

        <Flex justify={['center', 'end']} align="center">
          <Box>
            <Text as="small">
              Source code on <LinkExternal href="https://github.com/kalwabed/kopi-konco" title="Github" />{' '}
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Stack>
  )
}

const LinkExternal = ({ title, href }) => {
  return (
    <Link isExternal href={href} borderBottom="1px">
      {title}
    </Link>
  )
}

export default Footer
