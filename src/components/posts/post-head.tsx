import { Container, Img, Heading, Box, Text } from '@chakra-ui/react'
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
    <Container maxW="sm" as="article" mt={[5, 0]}>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading fontSize="5xl" lineHeight="1" as="h1">
        {title}
      </Heading>
      <Box my={[2, 1]}>
        <Text as="span" fontStyle="italic" fontWeight="light">
          {excerpt}
        </Text>
        <Box color="primary.400" fontSize="sm">
          <DateTime date={date} />
        </Box>
      </Box>
      <Box>
        <AuthorProfile author={author} />
      </Box>
      <Box mt="2">
        <Img
          src={`https:${coverImage}`}
          boxShadow="md"
          rounded="md"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Container>
  )
}

export default PostHead
