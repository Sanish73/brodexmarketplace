import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
    Alert,
    Text,
    VStack,
} from "native-base";


export function CategoryLeftList({categories, onSelectCategory}) {
    const [selectedCategory,
        setSelectedCategory] = useState(null);

    const handleCategorySelectAndClickEvent = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
         
    };
    
   
    return (
        <VStack w={'20%'} h={'100%'} space={2} bgColor={'red.100'}>
  
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategorySelectAndClickEvent(category)}>
                    <Text
                        color={selectedCategory
                        ?.id === category.id
                            ? 'blue.500'
                            : 'gray.500'}>{category.categoryname}
                               </Text>
                         
                </TouchableOpacity>
            ))}

        </VStack>
    )
}