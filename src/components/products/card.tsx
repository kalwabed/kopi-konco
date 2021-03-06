import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { isYesterday, isToday } from 'date-fns'

import { Product } from '@/interface/products'

const Card = ({ product }: { product: Product }) => {
  return (
    <Box
      maxW="sm"
      border="1px"
      borderColor="gray.500"
      overflow="hidden"
      rounded="lg"
      pos="relative"
      _hover={{ borderColor: 'info', boxShadow: 'lg' }}
    >
      <Box>
        <Image
          src={`https:${product.fields.coverImage.fields.file.url}`}
          height={320}
          width={500}
          alt={product.fields.coverImage.fields.title}
        />
      </Box>

      <Box
        as="span"
        pos="absolute"
        top={0}
        py={[2, 1]}
        px={[3, 2]}
        bg="teal.600"
        color="gray.200"
        rounded="lg"
        ml="2"
        mt="2"
      >
        <Text fontWeight="bold" fontSize="sm">
          {product.fields.price}.0 Rp
        </Text>
      </Box>

      <Box px="5" pt="2" pb="5">
        <Flex align="center">
          <ProductCondition date={product.fields.date} />
          <Text colorScheme="primary" fontWeight="bold" fontSize="2xl">
            {product.fields.name}
          </Text>
        </Flex>
        <Text color="gray.500">{product.fields.excerpt}</Text>
      </Box>
    </Box>
  )
}

const ProductCondition = ({ date }: { date: Date }) => {
  const newDate = new Date(date)
  const condition = isToday(newDate) || isYesterday(newDate)
  return (
    <>
      {condition && (
        <Badge colorScheme="blue" mr="1">
          BARU
        </Badge>
      )}
    </>
  )
}

export default Card
