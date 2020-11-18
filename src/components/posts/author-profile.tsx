import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

// eslint-disable-next-line import/named
import { Author } from '@/interface/posts'

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

export default AuthorProfile
