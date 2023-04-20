import React, {useState} from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image,
    Input,
    Badge,
    Center
} from "native-base";
import { useNavigation } from '@react-navigation/native';

export function CategoryRightList({selectedCategory, selectedParentCategories}) {
    const navigation = useNavigation();

    const handleCategorySelect = (item) => {
        if (navigation) {
            navigation.navigate('CategorySubCategoDetails');
            // navigation.navigate('CategorySubCategoDetails'); Alert.alert('ljslk');
            // Alert.alert(JSON.stringify(selectedParentCategories));
            // Alert.alert(JSON.stringify(item));
        } else {
            console.warn("Navigation prop is not defined");
        }

    };

    return (
        <VStack w={'80%'} h={'100%'} p={3} space={2}>

            <Box>
                {/* <Text>
                {JSON.stringify(selectedParentCategories , null , 2)}
            </Text> */}

                <Image
                    rounded={15}
                    source={{
                    uri: selectedParentCategories.image
                }}
                    alt="Alternate Text"
                    resizeMode="stretch"
                    aspectRatio={2}
                    w="100%"/>

            </Box>
            <Box>
                {/* <Text fontSize={'md'} bold>
                    {selectedCategory.map((item, index) => {
                        return (
                            <Text>
                                {item.category_name}
                            </Text>
                        )
                    })}

                </Text> */}
            </Box>
            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
            }}>
                {/* <Text>
                {JSON.stringify(selectedCategory , null , 2)}
            </Text> */}

                {selectedCategory.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => handleCategorySelect(item)}>
                            <Box
                                style={{
                                marginRight: 20,
                                marginTop: 15,
                                alignItems: 'center'
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
                                        source={{
                                        uri: item.image_link
                                    }}
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

        </VStack>
    )
}