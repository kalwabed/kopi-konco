import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { getPost, getAllPostsSlug } from '@/lib/api'
// eslint-disable-next-line import/named
import { Post } from '@/interface/posts'
import PostHead from '@/components/posts/post-head'

interface Props {
  post: Post
}

const PostArticle: NextPage<Props> = ({ post }) => {
  return (
    <>
      <PostHead
        coverImage={post.fields.coverImage.fields.file.url}
        title={post.fields.title}
        date={post.fields.date}
        excerpt={post.fields.excerpt}
        author={post.fields.author}
      />
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
