import { Breadcrumb } from '@/components/helpers'
import { Card } from '@/components/products'
import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'

import { getAllProducts, Products } from '@/lib/api'

interface Props {
  products: Products[]
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  return (
    <Stack py="10" mx={[3, 20]}>
      <Head>
        <title>Products</title>
      </Head>

      {/* <Box mb="5">
        <Breadcrumb />
      </Box> */}
      <Stack>
        <SimpleGrid columns={[1, 2, 4]} spacing={5}>
          {products.map(prod => (
            <Card key={prod.fields.slug} product={prod} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  return {
    props: {
      products
    }
  }
}

export default ProductsPage
