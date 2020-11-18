/* eslint-disable import/named */
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

import { DateTime, AuthorProfile } from '@/components/posts'
import { Post } from '@/interface/posts'

const Card = ({ post }: { post: Post }) => {
  return (
    <Box
      overflow="hidden"
      rounded="md"
      maxW="md"
      mx={[0, 10]}
      my={[3, 0]}
      border="1px"
      borderColor="transparent"
      _hover={{
        boxShadow: 'md',
        borderColor: 'primary.400'
      }}
    >
      <NextLink href={`/posts/${post.sys.id}`}>
        <Box _hover={{ cursor: 'pointer' }} role="group">
          <Image src={`https:${post.fields.coverImage.fields.file.url}`} width={500} height={350} />
          <Heading mx="2">
            <Link
              href={`/posts/${post.sys.id}`}
              _focus={{ border: 0 }}
              _groupHover={{ textDecor: 'underline' }}
            >
              {post.fields.title}
            </Link>
          </Heading>
        </Box>
      </NextLink>
      <Box m="2">
        <Box color="primary.500" fontSize="sm">
          <DateTime date={post.fields.date} />
        </Box>
        <Text>{post.fields.excerpt}</Text>
        <AuthorProfile author={post.fields.author} />
      </Box>
    </Box>
  )
}

export default Card
