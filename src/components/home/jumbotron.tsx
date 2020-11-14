import { Heading, Stack, Text } from '@chakra-ui/react'

import siteConfig from 'site-config'

const Jumbotron = () => {
  return (
    <Stack
      p={['20', '56']}
      spacing="8"
      px={[5, 32]}
      bgImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);"
    >
      <Text color="black">
        <Heading fontSize={['5xl', '6xl']} lineHeight="1">
          {siteConfig.title}
        </Heading>
        seduhan rasa yang sederhana
      </Text>
    </Stack>
  )
}
export default Jumbotron
