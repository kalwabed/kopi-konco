import { Badge, Box, Button, Flex, Img, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { FiCoffee } from 'react-icons/fi'
import { Products } from '@/lib/api'

const Card = ({ product }: { product: Products }) => {
  return (
    <Box
      maxW="sm"
      border="1px"
      borderColor="gray.500"
      overflow="hidden"
      rounded="lg"
      _hover={{ borderColor: 'info', boxShadow: 'lg' }}
    >
      {/* <Image src={product.fields.coverImage.fields.file.url} height="320" width="500" /> */}
      <Img src={product.fields.coverImage.fields.file.url} alt={product.fields.coverImage.fields.title} />
      <Box px="5" pt="2" pb="5">
        <Flex align="center">
          <Badge colorScheme="blue" mr="1">
            BARU
          </Badge>
          <NextLink href="/">
            <Link
              colorScheme="primary"
              fontWeight="bold"
              fontSize="2xl"
              href="/"
              _hover={{ textDecor: 'underline' }}
              _focus={{ border: 0 }}
            >
              {product.fields.name}
            </Link>
          </NextLink>
        </Flex>
        <Text color="gray.500">{product.fields.excerpt}</Text>
      </Box>
      <Box pt="1" px="5" pb="2">
        <Button rightIcon={<FiCoffee />} isFullWidth colorScheme="primary" variant="solid">
          Pesan sekarang
        </Button>
      </Box>
    </Box>
  )
}

export default Card
