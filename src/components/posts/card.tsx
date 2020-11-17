/* eslint-disable import/named */
import { Author, Post } from '@/interface/posts'
import { Avatar, Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const Card = ({ post }: { post: Post }) => {
  console.log(post)
  return (
    <Box overflow="hidden" rounded="md" maxW="md" mx={[0, 10]} my={[3, 0]}>
      <NextLink href="/">
        <Box _hover={{ cursor: 'pointer' }}>
          <Image src={`https:${post.fields.coverImage.fields.file.url}`} width={500} height={350} />
          <Heading>
            <Link href="/">{post.fields.title}</Link>
          </Heading>
        </Box>
      </NextLink>
      <Box color="primary.500" fontSize="sm">
        <time>13 / 04 / 2002</time>
      </Box>
      <Text>{post.fields.excerpt}</Text>
      <AuthorProfile author={post.fields.author} />
    </Box>
  )
}

const AuthorProfile = ({ author }: { author: Author }) => {
  return (
    <Flex align="center">
      <Box mt="2">
        <Avatar src={`https:${author.fields.picture.fields.file.url}`} size="md" name={author.fields.name} />
      </Box>
      <Box ml="6">
        <Text fontWeight="bold">{author.fields.name}</Text>
        <Text fontSize="sm" fontWeight="light">
          {author.fields.position}
        </Text>
      </Box>
    </Flex>
  )
}

export default Card
