import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Banner } from '@/components/posts'

const PostsPage: NextPage = () => {
  return (
    <Stack>
      <Banner />
    </Stack>
  )
}

export default PostsPage
