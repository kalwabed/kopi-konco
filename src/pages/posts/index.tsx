/* eslint-disable import/named */
import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'

import { Banner, Card } from '@/components/posts'
import { getAllPosts } from '@/lib/api'
import { Post } from '@/interface/posts'
import Head from 'next/head'

interface Props {
  posts: Post[]
}

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <Stack spacing={8}>
      <Head>
        <title>Posts</title>
      </Head>
      <Banner />
      <Stack px={[5, 20]}>
        <Box mx="auto">
          <SimpleGrid columns={[1, 2]} gap={5}>
            {posts.map(p => (
              <Card key={p.fields.slug} post={p} />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Stack>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts }
  }
}

export default PostsPage
