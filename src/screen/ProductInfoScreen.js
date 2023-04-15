import { View, Text } from 'react-native'
import React from 'react'

export function ProductInfoScreen ({route}){
    const { productId } = route.params;
  return (
    <View>
      <Text>ProductInfoScreen</Text>
      <Text>Product ID: {productId}</Text>
    </View>
  )
}

