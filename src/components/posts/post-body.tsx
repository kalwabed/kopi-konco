import { Box, Container, Img, Text } from '@chakra-ui/react'
import {
  documentToReactComponents,
  RenderMark,
  RenderNode,
  Options
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types'

interface Props {
  content: Document & any
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
    } as RenderMark,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as="article">{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => (
        <Box my={[3, 5]}>
          <Img
            src={`https:${node.data.target.fields.file.url}`}
            rounded="md"
            objectPosition="center"
            objectFit="cover"
          />
        </Box>
      )
    } as RenderNode
  } as Options

  return (
    <Container my={4} maxW="md">
      {content.map(c => documentToReactComponents(c, options))}
    </Container>
  )
}

export default PostBody
