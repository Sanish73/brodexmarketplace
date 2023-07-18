import { Box, HStack, Text } from 'native-base'
import React from 'react'

export default function CartToPayList() {
  return (
    <Box>
      <HStack justifyContent={'space-between'}>
        <Text>Item total</Text>
        <HStack>
          <Text>$</Text>
          <Text>0</Text>
        </HStack>
      </HStack>

      <HStack justifyContent={'space-between'} mt={1}>
        <Text>Delivery charges</Text>
        <HStack>
          <Text>$</Text>
          <Text>2.24</Text>
        </HStack>
      </HStack>

      <HStack justifyContent={'space-between'} mt={1}>
        <Text>Tax</Text>
        <Text>Remove</Text>
        <HStack>
          <Text>$</Text>
          <Text>1.00</Text>
        </HStack>
      </HStack>

      <HStack justifyContent={'space-between'} my={1}>
        <Text bold fontSize={16}>To Pay</Text>
        <HStack>
          <Text>$</Text>
          <Text bold fontSize={16}>26.06</Text>
        </HStack>
      </HStack>
    </Box>
  )
}
