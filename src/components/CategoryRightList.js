import React from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,

    HStack,
    Box,
    Image,
    Input,
    Badge,
    Center
} from "native-base";

export function CategoryRightList() {
    const data = [
        {
            id: 1,
            categoryName: 'Flash Details'
        }, {
            id: 2,
            categoryName: 'Flash Details'
        }, {
            id: 3,
            categoryName: 'Flash Details'
        }, {
            id: 4,
            categoryName: 'Flash Details'
        }, {
            id: 5,
            categoryName: 'Flash Details'
        }, {
            id: 6,
            categoryName: 'Flash Details'
        }
    ];

    const CategorySecData = [
        {
            id: 1,
            categoryName: 'Flash Details'
        }, {
            id: 2,
            categoryName: 'Flash Details'
        }, {
            id: 3,
            categoryName: 'Flash Details'
        }

    ]

    return (
        <VStack w={'80%'} h={'100%'} p={3} space={2}>
            <Box>
                <Image
                    rounded={15}
                    source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }}
                    alt="Alternate Text"
                    resizeMode="stretch"
                    aspectRatio={2}
                    w="100%"/>
            </Box>
            <Box>
                <Text fontSize={'md'} bold>
                    Kitchen Applicatoin
                </Text>
            </Box>
            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
            }}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <Box
                                style={{
                                marginRight: 20,
                                marginTop: 15
                            }}>
                                <Center
                                    rounded={15}
                                    bgColor={'red.100'}
                                    style={{
                                    width: 60,
                                    height: 50,
                                    rounded: 50
                                }}>
                                    <Image
                                        alt={'sdfkjsjdf'}
                                        source={require('../../assets/images/black-liquid-soap-container.png')}
                                        style={{
                                        width: 45,
                                        height: 50
                                    }}/>
                                </Center>

                                <Box marginTop={2}>
                                    <Text>
                                        {item.categoryName}
                                    </Text>
                                </Box>

                            </Box>
                        </TouchableOpacity>
                    );
                })}
            </Box>
            <Box>
                <Text fontSize={'md'} bold>
                    Kitchen Applicatoin
                </Text>
            </Box>
            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
            }}>
                {CategorySecData.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <Box
                                style={{
                                marginRight: 20,
                                marginTop: 15
                            }}>
                                <Center
                                    rounded={15}
                                    bgColor={'red.100'}
                                    style={{
                                    width: 60,
                                    height: 50,
                                    rounded: 50
                                }}>
                                    <Image
                                        alt={'sdfkjsjdf'}
                                        source={require('../../assets/images/black-liquid-soap-container.png')}
                                        style={{
                                        width: 45,
                                        height: 50
                                    }}/>
                                </Center>

                                <Box marginTop={2}>
                                    <Text>
                                        {item.categoryName}
                                    </Text>
                                </Box>

                            </Box>
                        </TouchableOpacity>
                    );
                })}
            </Box>
            <Box>
                <Text fontSize={'md'} bold>
                    Kitchen Applicatoin
                </Text>
            </Box>

            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
            }}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}>
                            <Box
                                style={{
                                marginRight: 20,
                                marginTop: 15
                            }}>
                                <Center
                                    rounded={15}
                                    bgColor={'red.100'}
                                    style={{
                                    width: 60,
                                    height: 50,
                                    rounded: 50
                                }}>
                                    <Image
                                        alt={'sdfkjsjdf'}
                                        source={require('../../assets/images/black-liquid-soap-container.png')}
                                        style={{
                                        width: 45,
                                        height: 50
                                    }}/>
                                </Center>

                                <Box marginTop={2}>
                                    <Text>
                                        {item.categoryName}
                                    </Text>
                                </Box>

                            </Box>

                        </TouchableOpacity>
                    );
                })}
            </Box>

        </VStack>
    )
}