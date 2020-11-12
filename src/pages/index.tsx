import { useState, useEffect } from 'react'
import Head from 'next/head'

import { getAllProducts, Products } from '~lib/api'
import Layout from '~components/layout'

export default function Home() {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = (await getAllProducts()) as Products[]
      setProducts([...allProducts])
    }
    getProducts()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}
