import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, VStack, Box, Image, Center} from "native-base";
import {useNavigation} from '@react-navigation/native';

export function CategoryRightList({selectedCategory, selectedParentCategories, subCategoryList}) {
    const navigation = useNavigation();

    const handleCategorySelect = (item) => {

        console.log(JSON.stringify(item, null, 2));
        // yate mero mehenat ley banako  yautai database bata vaya compare garera terms
        // haru jhikna milxa
        var collectionSubCLassLIst = [];

        for (var i = 0; i < subCategoryList.length; i++) {
            const classItem = subCategoryList[i];

            if (item.id == classItem.p_id) {
                collectionSubCLassLIst.push(classItem)
                // console.warn("The child not emply");

            } else {
                console.log("The child items are emply");
            }
        }

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
                {selectedParentCategories.image
                    ? (<Image
                        rounded={15}
                        source={{
                        uri: selectedParentCategories.image
                    }}
                        alt="Alternate Text"
                        resizeMode="stretch"
                        aspectRatio={2}
                        w="100%"/>)
                    : (
                        <Text>asdasd</Text>
                    )}
            </Box>

            <Box
                flexDirection='row'
                justifyContent={'center'}
                style={{
                flexWrap: 'wrap'
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