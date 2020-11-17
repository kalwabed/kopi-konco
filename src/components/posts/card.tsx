/* eslint-disable import/named */
import { Author, Post } from '@/interface/posts'
import { Avatar, Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { format, formatDistance } from 'date-fns'
import Image from 'next/image'
import NextLink from 'next/link'

const Card = ({ post }: { post: Post }) => {
  return (
    <Box overflow="hidden" rounded="md" maxW="md" mx={[0, 10]} my={[3, 0]}>
      <NextLink href="/">
        <Box _hover={{ cursor: 'pointer' }}>
          <Image src={`https:${post.fields.coverImage.fields.file.url}`} width={500} height={350} />
          <Heading>
            <Link href={`/posts/${post.fields.slug}`}>{post.fields.title}</Link>
          </Heading>
        </Box>
      </NextLink>
      <Box color="primary.500" fontSize="sm">
        <DateTime date={post.fields.date} />
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

const DateTime = ({ date }: { date: Date }) => {
  const formatted = format(new Date(date), 'dd / MMM / yyy')
  const distance = formatDistance(new Date(date), Date.now(), { addSuffix: true })
  return (
    <Text>
      <time dateTime={formatted}>{formatted}</time> ~ {distance}
    </Text>
  )
}

export default Card
