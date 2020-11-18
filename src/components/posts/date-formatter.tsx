import { Text } from '@chakra-ui/react'
import { format, formatDistance } from 'date-fns'

const DateTime = ({ date }: { date: Date }) => {
  const formatted = format(new Date(date), 'dd / MMM / yyy')
  const distance = formatDistance(new Date(date), Date.now(), { addSuffix: true })
  return (
    <Text>
      <time dateTime={formatted}>{formatted}</time> ~ {distance}
    </Text>
  )
}

export default DateTime
