import { Container, Stack, Img, Heading, Box } from '@chakra-ui/react'
import Head from 'next/head'

// eslint-disable-next-line import/named
import { Author } from '@/interface/posts'
import AuthorProfile from './author-profile'
import DateTime from './date-formatter'

interface Props {
  coverImage: string
  title: string
  date: Date
  excerpt: string
  author: Author
}

const PostHead = ({ coverImage, title, date, excerpt, author }: Props) => {
  return (
    <Stack>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxW="sm">
        <Heading fontSize="5xl" lineHeight="1" as="h1">
          {title}
        </Heading>
        <Box as="desc" fontWeight="light">
          {excerpt}
        </Box>
        <Box color="primary.400" fontSize="sm">
          <DateTime date={date} />
        </Box>
        <Box>
          <AuthorProfile author={author} />
        </Box>
        <Box mt="2">
          <Img src={`https:${coverImage}`} rounded="md" objectFit="cover" objectPosition="center" />
        </Box>
      </Container>
    </Stack>
  )
}

export default PostHead
