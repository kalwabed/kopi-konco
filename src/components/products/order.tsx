import { waOrder } from '@/lib'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiCoffee } from 'react-icons/fi'

const Order = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Button px="20" fontSize="lg" colorScheme="primary" rightIcon={<FiCoffee />} onClick={onOpen}>
        Pesan
      </Button>
      <Dialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}

const Dialog = ({ isOpen, onClose }) => {
  const orderInit = `Hai kak,
Saya pesan:
- [produk 1] [jumlah]
- [produk 2] [jumlah]
...
Meja nomor [nomor meja]. terimakasih
`
  const [order, setOrder] = useState(orderInit)

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Pesan lur</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="item">
            <FormLabel>Kopi</FormLabel>
            <Textarea placeholder="Hai" onChange={e => setOrder(e.target.value)} value={order} h="100%" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="primary" onClick={() => waOrder(order)}>
            Kirim
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Order
