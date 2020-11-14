import { Breadcrumb } from '@/components/helpers'
import { Card } from '@/components/products'
import { Box, Container, SimpleGrid, Stack } from '@chakra-ui/react'

const Products = () => {
  return (
    <Stack py="10" mx={[3, 20]}>
      <Box mb="5">
        <Breadcrumb />
      </Box>
      <Stack>
        <SimpleGrid columns={[1, 2, 4]} spacing={5}>
          {[1, 2, 3, 2].map(arr => (
            <Card />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export default Products
