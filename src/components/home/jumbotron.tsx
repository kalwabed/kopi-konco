import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Jumbotron = () => {
  return (
    <Stack
      p={['20', '56']}
      spacing="8"
      px={[5, 32]}
      bgImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);"
      color="black"
    >
      <Box>
        <Heading fontSize={['5xl', '6xl']} mb="3">
          {siteConfig.title}
        </Heading>
        <Text>seduhan rasa yang sederhana</Text>
      </Box>
    </Stack>
  )
}
export default Jumbotron
