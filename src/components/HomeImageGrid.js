import {HStack, VStack, Avatar, Box} from 'native-base'
import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default function HomeImageGrid() {

    return (
        <Box paddingTop={2}>
            <HStack
                justifyContent="center"
                space={'5%'}
                size="xl"
               
                w={'100%'}
                h={81}>
                <VStack
                    flexWrap="wrap"
                   
                    maxW={'20%'}
                    h={'100%'}
                    alignItems={'center'}>
                    <Avatar
                        bg="green.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}></Avatar>
                    <Box >
                        <Text>
                            Smart Home
                        </Text>
                    </Box>

                </VStack>

                <VStack
                    W={'20%'}
                    flexWrap="wrap"
                   
                    h={'100%'}
                    alignItems={'center'}>
                    <Avatar
                        bg="cyan.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}></Avatar>
                    <Box >
                        <Text>
                            Gadget
                        </Text>
                    </Box>
                </VStack>

                <VStack
                    W={'20%'}
                    flexWrap="wrap"
                   
                    h={'100%'}
                    alignItems={'center'}>
                    <Avatar
                        bg="indigo.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}></Avatar>
                    <Box >
                        <Text>
                            Beauty
                        </Text>
                    </Box>
                </VStack>

                <VStack
                    W={'20%'}
                    flexWrap="wrap"
                   
                    h={'100%'}
                    alignItems={'center'}>
                    <Avatar
                        bg="amber.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}></Avatar>
                    <Box >
                        <Text>
                            Toys
                        </Text>
                    </Box>
                </VStack>

                <VStack
                    W={'20%'}
                    flexWrap="wrap"
                   
                    h={'100%'}
                    alignItems={'center'}>
                    <Avatar
                        bg="amber.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}></Avatar>
                    <Box >
                        <Text>
                            Beauty care
                        </Text>
                    </Box>
                </VStack>

            </HStack>
        </Box>

    )

}
