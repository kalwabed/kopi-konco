import { Box, Container, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />
      <Stack mx={[5, 48]}>
        <Container>
          <Image
            src="https://images.unsplash.com/photo-1538445463651-b337da0a3f43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhZmUlMjBwZW9wbGV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
            rounded="lg"
          />
        </Container>
        <Box w="100%" p={[2, 8]}>
          <Text>
            Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak. Ia berakar dari
            sebuah naskah sastra latin klasik dari era 45 sebelum masehi, hingga bisa dipastikan usianya telah
            mencapai lebih dari 2000 tahun. Richard McClintock, seorang professor Bahasa Latin dari
            Hampden-Sidney College di Virginia, mencoba mencari makna salah satu kata latin yang dianggap
            paling tidak jelas, yakni consectetur, yang diambil dari salah satu bagian Lorem Ipsum.
          </Text>
        </Box>
      </Stack>
    </>
  )
}

export default About
