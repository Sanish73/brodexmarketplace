import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Alert, Box, Text, VStack} from "native-base";

export function CategoryLeftList({categories, onSelectCategory}) {
    const [selectedCategory,
        setSelectedCategory] = useState(null);

    const handleCategorySelectAndClickEvent = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);

    };

    return (
        <VStack space={2} alignSelf={'flex-start'}>

            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategorySelectAndClickEvent(category)}>

                    {selectedCategory
                        ?.id === category.id
                            ? <Box
                                    style={{
                                    minHeight: 46,
                                    borderTopRightRadius: 7,
                                borderBottomRightRadius: 7,
                                    elevation: 3,
                                    backgroundColor: '#F57F17'
                                }}>
                                    <Text p={1} bold color={'white'}>{category.categoryname}
                                    </Text>
                                </Box>
                            : <Box
                                style={{
                                minHeight: 45,
                                borderTopRightRadius: 7,
                                borderBottomRightRadius: 7,
                                elevation: 3,
                                backgroundColor: '#EBEBEB'
                            }}>
                                <Text p={1}  color={'gray.500'}>{category.categoryname}
                                </Text>
                            </Box>}
                </TouchableOpacity>
            ))}

        </VStack>
    )
}