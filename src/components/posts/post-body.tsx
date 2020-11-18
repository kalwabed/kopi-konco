import { Container, Text } from '@chakra-ui/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

interface Props {
  content: any
}

const PostBody = ({ content }: Props) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: txt => (
        <Text as="span" fontWeight="bold">
          {txt}
        </Text>
      ),
      [MARKS.ITALIC]: txt => (
        <Text as="span" fontStyle="italic">
          {txt}
        </Text>
      ),
      [MARKS.UNDERLINE]: txt => <Text as="u">{txt}</Text>,
      [MARKS.CODE]: txt => (
        <Text as="code" bg="info" color="primary.800">
          {txt}
        </Text>
      )
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as="article">{children}</Text>
    }
  }

  return (
    <Container my={4} maxW="md">
      {documentToReactComponents(content, options)}
    </Container>
  )
}

export default PostBody
