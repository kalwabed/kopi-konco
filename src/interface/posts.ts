export interface Author {
  fields: {
    name: string
    position: string
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

export interface Post {
  fields: {
    author: Author
    date: Date
    excerpt: string
    slug: string
    title: string
    content: {
      content: [
        {
          content: [
            {
              value: string
            }
          ]
        }
      ]
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
