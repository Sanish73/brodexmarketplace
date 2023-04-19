import React, {useState} from 'react';
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

export function CategoryRightList({selectedCategory}) {

    const data = [
        {
            id: 1,
            categoryName: ' Shampoo 1'
        }, {
            id: 2,
            categoryName: 'Shampoo 2'
        }, {
            id: 3,
            categoryName: 'Shampoo 3'
        }, {
            id: 4,
            categoryName: 'Shampoo 4'
        }, {
            id: 5,
            categoryName: 'Shampoo 5'
        }, {
            id: 6,
            categoryName: 'Shampoo 6'
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

    const handleCategorySelect = (item) => {
        Alert.alert(JSON.stringify('jljlk'));
    };

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
                    {selectedCategory.map((item, index) => {
                        return (
                            <Text>
                                {item.category_name}
                            </Text>
                        )
                    })}

                </Text>
            </Box>
            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
            }}>
                {selectedCategory.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => handleCategorySelect(item)}>
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
                                        {item.category_name}
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