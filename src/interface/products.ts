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

export interface Product {
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
