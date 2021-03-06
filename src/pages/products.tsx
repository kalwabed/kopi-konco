import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { SimpleGrid, Stack } from '@chakra-ui/react'

import { Card } from '@/components/products'
import { getAllProducts } from '@/lib/api'
import { Product } from '@/interface/products'

interface Props {
  products: Product[]
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  return (
    <Stack py="10" mx={[3, 20]}>
      <Head>
        <title>Products</title>
      </Head>
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
