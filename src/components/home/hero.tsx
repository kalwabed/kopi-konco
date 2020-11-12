import { Box, SimpleGrid, Image, Stack, Text, Heading, Flex, Button } from '@chakra-ui/core'
import { ChakraNextLink } from '../helpers'

const Hero = () => {
  return (
    <Stack py="10">
      <SimpleGrid px="16" columns={[1, 2]} spacing="5">
        <Image
          src="https://images.unsplash.com/photo-1502849394214-c4b6352145ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=362&q=80"
          w="100%"
          h={['200px', '400px']}
          objectFit="cover"
          objectPosition="center"
          rounded="lg"
        />
        <Box>
          <Heading fontWeight="bold" mt={[5, 24]} lineHeight={[1, 2]} mb={[2, 0]}>
            Kenapa harus Kopi Konco?
          </Heading>
          <Text>
            Kopi spesial dengan varian yang beraneka macam hasil dari eksperimen tim kami yang terdiri dari
            komunitas-komunitas pencinta kopi yang sudah dipercaya di banyak kafe besar lainnya.
          </Text>
          <ChakraNextLink href="/">
            <Button mt="6" variantColor="primary" _hover={{ bg: 'gray.700', color: 'white' }}>
              Pesan sekarang!
            </Button>
          </ChakraNextLink>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default Hero
