import { Box, Stack, Text } from '@chakra-ui/react'
import siteConfig from 'site-config'

const Banner = () => {
  return (
    <Stack
      px={[6, 10]}
      py={[10, 20]}
      spacing="5"
      bgImage="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);"
    >
      <Box color="dark" textAlign="center" fontSize={['2xl', '3xl']}>
        <Text fontWeight="bold">Tulisan terbaru dari tim {siteConfig.title}</Text>
        <Text fontWeight="light" fontSize="sm">
          Membahas perkembangan {siteConfig.title}, bisnis, dan dunia kopi
        </Text>
      </Box>
    </Stack>
  )
}

export default Banner
