import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, VStack, Box, Image, Center} from "native-base";
import {useNavigation} from '@react-navigation/native';

export function CategoryRightList({selectedCategory, selectedParentCategories, subCategoryList}) {
    const navigation = useNavigation();
 

    const handleCategorySelect = (item) => {
        var collectionSubCLassLIst = [];

        for (var i = 0; i < subCategoryList.length; i++) {
            const classItem = subCategoryList[i];

            if (item.id == classItem.parent_id) {
                collectionSubCLassLIst.push(classItem)
                // console.warn("The child not emply");

            } else {
                console.log("The child items are emply");
            }
        }
       

        if (navigation) {

            navigation.navigate('CategorySubCategoDetails', collectionSubCLassLIst);
            // console.warn(JSON.stringify(collectionSubCLassLIst, null, 2));

        } else {
            console.warn("Navigation prop is not defined");
        }

    };

    return (
        <VStack w={'80%'} h={'100%'} p={3} space={2}>

            <Box>

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