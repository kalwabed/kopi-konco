const withPwa = require('next-pwa')

module.exports = withPwa({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  images: {
    domains: ['images.unsplash.com', 'images.ctfassets.net']
  }
})
