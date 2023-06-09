import React, {useState,useEffect } from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, VStack, Box, Image, Center , View} from "native-base";
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {termCatoListing} from '../Redux/actions/brandAction';

export function CategoryRightList({selectedCategory, selectedParentCategories, subCategoryList}) {
    // const page = 1;
    // const refresh = true;
    // const dispatch = useDispatch();

    const navigation = useNavigation();

    const handleCategorySelect = (item) => {

      
        if (navigation) {
            navigation.navigate('CategorySubCategoDetails', item.id);
            // console.warn(JSON.stringify(item.id, null, 2));
        } else {
            console.warn("Navigation prop is not defined");
        }

    };

    return (
        <VStack p={3} space={2}>

            <Box>
         {selectedParentCategories.image ? (
            <View style={{ flexDirection: 'row' }}>
                <Image
                rounded={15}
                source={{
                    uri: selectedParentCategories.image,
                }}
                alt="Alternate Text"
                resizeMode="stretch"
                aspectRatio={2}
                style={{ flex: 1 }}
                />
            </View>
            ) : (
            <Text>asdasd</Text>
            )}
            </Box>

            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap',
                width:"100%",
                height:"50%"
            }}>
                {/*
                <Text>
                    {JSON.stringify(selectedParentCategories, null, 2)}
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
                                    style={{
                                    width: 60,
                                    height: 50,
                                    rounded: 50
                                }}>

                                    {item.image && item.image !== 0
                                        ? <Image
                                                alt={'sdfkjsjdf'}
                                                source={{
                                                uri: item.image
                                            }}
                                                style={{
                                                borderRadius: 15,
                                                width: '100%',
                                                height: '100%'
                                            }}/>
                                        : <Image
                                            alt={'sdfkjsjdf'}
                                            source={{
                                            uri: 'https://fancystore.brodox.com/uploads/default.png'
                                        }}
                                            style={{
                                            borderRadius: 15,
                                            width: '100%',
                                            height: '100%'
                                        }}/>}
                                </Center>

                                <Box marginTop={2}>
                                    <Text>
                                        {item.name}
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