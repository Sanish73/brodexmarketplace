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
import Icon from 'react-native-vector-icons/Ionicons';
import OrderItems from '../components/OrderItems';
import MyTab from '../components/MyTab'
import AccountInformation from '../components/AccountInformation';
import CategorySearch from '../components/CategorySearch';

export function CategoryLeftList({categories, onSelectCategory}) {
    const [selectedCategory,
        setSelectedCategory] = useState(null);

    const handleCategorySelectAndClickEvent = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
        //   Alert.alert(JSON.stringify(category));
    };
    
   
    return (
        <VStack w={'20%'} h={'100%'} space={2}>
            {/* <Text>
console.log({categories.categoryName});
</Text> */}
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