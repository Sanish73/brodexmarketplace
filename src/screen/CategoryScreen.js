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
import {CategoryLeftList} from '../components/CategoryLeftList';
import {CategoryRightList} from '../components/CategoryRightList';

function CategoryScreen() {

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // console.log(selectedCategory); Do something with the selected category
    };

    const data = [
        {
            categoryname: "Electronics",
            id: 1,
            image: "https://example.com/images/electronics.jpg"
        }, {
            categoryname: "Beauty and Personal Care",
            id: 2,
            image: "https://example.com/images/beauty.jpg"
        }, {
            categoryname: "Fashion",
            id: 3,
            image: "https://example.com/images/fashion.jpg"
        }, {
            categoryname: "Home and Garden",
            id: 4,
            image: "https://example.com/images/home.jpg"
        }, {
            categoryname: "Sports and Outdoors",
            id: 5,
            image: "https://example.com/images/sports.jpg"
        }, {
            categoryname: "Baby and Kids",
            id: 6,
            image: "https://example.com/images/baby.jpg"
        }, {
            categoryname: "Books and Media",
            id: 7,
            image: "https://example.com/images/books.jpg"
        }, {
            categoryname: "Food and Beverage",
            id: 8,
            image: "https://example.com/images/food.jpg"
        }, {
            categoryname: "Office Supplies",
            id: 9,
            image: "https://example.com/images/office.jpg"
        }, {
            category_name: "Pet Supplies",
            id: 10,
            image: "https://example.com/images/pet.jpg"
        }
    ];

    const childData = [
        {
            category_name: "Skincare",
            id: 21,
            parent_id: 2
        }, {
            category_name: "Makeup",
            id: 22,
            parent_id: 2
        }, {
            category_name: "Haircare",
            id: 23,
            parent_id: 2
        }, {
            category_name: "Fragrance",
            id: 24,
            parent_id: 2
        }, {
            category_name: "Men's Clothing",
            id: 31,
            parent_id: 3
        }, {
            category_name: "Women's Clothing",
            id: 32,
            parent_id: 3
        }, {
            category_name: "Shoes",
            id: 33,
            parent_id: 3
        }, {
            category_name: "Accessories",
            id: 34,
            parent_id: 3
        }, {
            category_name: "Furniture",
            id: 41,
            parent_id: 4
        }, {
            category_name: "Home Decor",
            id: 42,
            parent_id: 4
        }, {
            category_name: "Kitchenware",
            id: 43,
            parent_id: 4
        }, {
            category_name: "Outdoor",
            id: 44,
            parent_id: 4
        }, {
            category_name: "Fitness",
            id: 51,
            parent_id: 5
        }, {
            category_name: "Cycling",
            id: 52,
            parent_id: 5
        }, {
            category_name: "Camping",
            id: 53,
            parent_id: 5
        }, {
            category_name: "Water Sports",
            id: 54,
            parent_id: 5
        }
    ];

    const [selectedCategory,
        setSelectedCategory] = useState(data[0]);

    const [collection,
        setCollection] = useState([]);

    function handlClickEvent(c) {
        var collection2 = [];

        for (var i = 0; i < childData.length; i++) {
            const item = childData[i];

            if (item.parent_id == c.id) {
                collection2.push(item);

            }
        }
        setCollection(collection2);

        //  Alert.alert(JSON.stringify(collection));

    }

    const handleCategorySelectAndClickEvent = (category) => {
        handleCategorySelect(category);
        handlClickEvent(category);
    };

    return <VStack>

        <CategorySearch/>

        <ScrollView>
            <HStack h={'100%'}>
                <CategoryLeftList
                    categories={data}
                    onSelectCategory={handleCategorySelectAndClickEvent}/>
                <CategoryRightList selectedCategory={collection}/>
            </HStack>
            <Box h={100}></Box>
        </ScrollView>

    </VStack>

}

export default CategoryScreen;
