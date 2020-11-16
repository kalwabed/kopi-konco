import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Banner, Card } from '@/components/posts'

const PostsPage: NextPage = () => {
  return (
    <Stack spacing={8}>
      <Banner />
      <Stack px={[5, 20]}>
        <Box mx="auto">
          <SimpleGrid columns={[1, 2]} gap={5}>
            {Array(3)
              .fill()
              .map((_, i) => (
                <Card key={i} />
              ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Stack>
  )
}

export default PostsPage
