import {
    HStack,
    VStack,
    Avatar,
    Text,
    Box,
    Button,
    Image
  } from 'native-base';
  import React from 'react';
  
  export default function HomeFlashDetaisHead() {
    return (
      <HStack  bgColor={'red.100'} py={5}>
        <Box bgColor={'green.100'} w={'50%'} alignItems={'center'}>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg'
            }}
            alt="Alternate Text"
          size={190} // Set the aspect ratio to 3:4
            resizeMode="contain" // Use the "contain" resizeMode to fit the image inside the box
            borderRadius={7}
          />
        </Box>
        <Box w={'50%'} bgColor={'blue.100'} alignItems={'center'}>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg'
            }}
            alt="Alternate Text"
            size={190}// Set the aspect ratio to 3:4
            resizeMode="contain" // Use the "contain" resizeMode to fit the image inside the box
            borderRadius={7}
          />
        </Box>
      </HStack>
    );
  }
  