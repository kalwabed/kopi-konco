// eslint-disable-next-line import/named
import { Post } from '@/interface/posts'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

enum ContentType {
  chef = 'chef',
  product = 'product',
  post = 'post'
}

// eslint-disable-next-line consistent-return
const getEntries = async () => {
  try {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    throw new Error('Error getting entries')
  } catch (err) {
    console.error(err)
  }
}

// eslint-disable-next-line consistent-return
const getEntry = async (id: string) => {
  try {
    const entry = await client.getEntry(id)
    return entry
  } catch (err) {
    console.error(err)
  }
}

const extract = (items, type: ContentType) => {
  return items.filter(item => item.sys.contentType.sys.id === type)
}
export const getAllProducts = async () => {
  return extract(await getEntries(), ContentType.product)
}

export const getAllChefs = async () => {
  return extract(await getEntries(), ContentType.chef)
}

export const getAllPosts = async () => {
  return extract(await getEntries(), ContentType.post)
}

export const getAllPostsSlug = async () => {
  const allPosts = (await getAllPosts()) as Post[]
  return allPosts.map(p => ({
    params: {
      pid: p.sys.id
    }
  }))
}

export const getPost = async (sysId: string) => {
  const post = await getEntry(sysId)
  return post
}
