const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const getEntries = async () => {
  try {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    throw new Error('Error getting entries')
  } catch (err) {
    console.error(err)
  }
}

const extractChefs = items => {
  return items.filter(item => item.sys.contentType.sys.id === 'chef')
}

const extractProducts = items => {
  return items.filter(item => item.sys.contentType.sys.id === 'product')
}

export const getAllProducts = async () => {
  return extractProducts(await getEntries())
}

export const getAllChefs = async () => {
  return extractChefs(await getEntries())
}

export interface Chef {
  name: string
  picture: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  }
}

export interface Products {
  fields: {
    date: Date
    description: string
    name: string
    excerpt: string
    slug: string
    price: number
    chef: {
      fields: {
        name: string
        picture: {
          fields: {
            file: {
              url: string
            }
            title: string
          }
        }
      }
    }
    coverImage: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
  }
}
