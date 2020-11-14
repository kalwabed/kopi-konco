import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const ChakraNextLink = ({ children, href = '', ...rest }) => {
  return (
    <NextLink href={href}>
      <Link href={href} {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}

export default ChakraNextLink
