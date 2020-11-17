import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { getPost, getAllPostsSlug } from '@/lib/api'
// eslint-disable-next-line import/named
import { Post } from '@/interface/posts'
import { Heading } from '@chakra-ui/react'

interface Props {
  post: Post
}

const PostArticle: NextPage<Props> = ({ post }) => {
  return <Heading>{post.fields.slug}</Heading>
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
