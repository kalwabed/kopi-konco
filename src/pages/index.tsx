import Head from 'next/head'
import type { NextPage } from 'next'

import { Hero, Jumbotron } from '@/components/home'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kopi Konco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron />
      <Container maxW="xl" centerContent>
        <Hero />
      </Container>
    </>
  )
}

export default Home
