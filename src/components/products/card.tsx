import { Box, Button, ButtonGroup, Flex, Heading, Img, Link, SimpleGrid, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'

const Card = () => {
  return (
    <Box
      maxW="sm"
      border="1px"
      borderColor="gray.500"
      overflow="hidden"
      rounded="lg"
      _hover={{ borderColor: 'info', boxShadow: 'lg' }}
    >
      <Img
        src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        w="full"
      />
      <Box px="5" pt="2" pb="5">
        <NextLink href="/">
          <Link
            colorScheme="primary"
            fontWeight="bold"
            fontSize="2xl"
            href="/"
            _hover={{ textDecor: 'underline' }}
            _focus={{ border: 0 }}
          >
            Kalwabed Rizki
          </Link>
        </NextLink>
        <Text color="gray.500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Box>
      <Box pt="1" px="5" pb="2">
        <Button rightIcon={<FiShoppingCart />} isFullWidth colorScheme="primary" variant="solid">
          Pesan sekarang
        </Button>
      </Box>
    </Box>
  )
}

export default Card
