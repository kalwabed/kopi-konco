import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { getPost, getAllPostsSlug } from '@/lib/api'
// eslint-disable-next-line import/named
import { Post } from '@/interface/posts'
import { PostHead, PostBody } from '@/components/posts'
import { Stack } from '@chakra-ui/react'

interface Props {
  post: Post
}

const PostArticle: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Stack>
        <PostHead
          coverImage={post.fields.coverImage.fields.file.url}
          title={post.fields.title}
          date={post.fields.date}
          excerpt={post.fields.excerpt}
          author={post.fields.author}
        />
      </Stack>
      <Stack>
        <PostBody content={post.fields.content.content} />
      </Stack>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsSlug()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const post = await getPost(params.pid)
  return {
    props: { post }
  }
}

export default PostArticle
