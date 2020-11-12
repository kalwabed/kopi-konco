import { Box, Heading, Stack, Text } from '@chakra-ui/core'

import siteConfig from 'site-config'

const Jumbotron = () => {
  return (
    <Stack
      p={['20', '56']}
      spacing="8"
      px={[5, 32]}
      bgImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);"
    >
      <Box color="black">
        <Text>
          <Heading fontSize={['4xl', '6xl']}>{siteConfig.title}</Heading>
          menawarkan anda pengalaman kafe yang baru
        </Text>
      </Box>
    </Stack>
  )
}
export default Jumbotron
