import { useState, useEffect } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import { getAllProducts, Products } from '@/lib/api'
import { Hero, Jumbotron } from '@/components/home'

const Home: NextPage = () => {
  // const [products, setProducts] = useState<Products[]>([])

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const allProducts = (await getAllProducts()) as Products[]
  //     setProducts([...allProducts])
  //   }
  //   getProducts()
  // }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron />
      <Hero />
    </>
  )
}

export default Home
