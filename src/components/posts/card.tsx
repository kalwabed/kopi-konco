import { Avatar, Box, Flex, Heading, Img, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const Card = () => {
  return (
    <Box overflow="hidden" rounded="md" maxW="md" mx={[0, 10]}>
      <NextLink href="/">
        <Box _hover={{ cursor: 'pointer' }}>
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            width={500}
            height={350}
          />
          <Heading>
            <Link href="/">Judul</Link>
          </Heading>
        </Box>
      </NextLink>
      <Box color="primary.500" fontSize="sm">
        <time>13 / 04 / 2002</time>
      </Box>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eius quae a consequatur repudiandae
        provident
      </Text>
      <AuthorProfile />
    </Box>
  )
}

const AuthorProfile = () => {
  return (
    <Flex align="center">
      <Box mt="2">
        <Avatar
          src="https://images.unsplash.com/photo-1605220462697-f2e1ac24d203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          size="md"
          name="Kalwabed"
        />
      </Box>
      <Box ml="6">
        <Text fontWeight="bold">Kalwabed</Text>
        <Text fontSize="sm" fontWeight="light">
          CEO
        </Text>
      </Box>
    </Flex>
  )
}

export default Card
