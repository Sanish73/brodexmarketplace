import React, {useState,useEffect} from 'react';
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
import MyTab from '../components/MyTab';
import AccountInformation from '../components/AccountInformation';
import CategorySearch from '../components/CategorySearch';
import {CategoryLeftList} from '../components/CategoryLeftList';
import {CategoryRightList} from '../components/CategoryRightList';



function CategoryScreen() {


////////////////////
    const [parentData,
        setParentData] = useState([]);

        useEffect(() => {
            fetchData();
        }, []);
    
        const fetchData = async() => {
            try {
    
                const response = await fetch('http://192.168.1.16/brodoxsupermarketapiv1/api/brocato');
                // const response = await
                // fetch('http://192.168.1.16/brodoxsupermarketapiv1/api/categories/15');
                const jsonData = await response.json();
    
                // console.log(jsonData.name);
                const parentdata = jsonData.map(item => item);
                setParentData(parentdata);
                // console.log(names);
            } catch (error) {
                console.log(error);
            }
        };
/////////////////////////////

    const data = [
        {
            categoryname: "Electronics",
            id: 1,
            image: "https://fancystore.brodox.com/uploads/27/23/03/1679405540.png"

        }, {
            categoryname: "Beauty and Personal Care",
            id: 2,
            image: "https://cosmetica.brodox.com/uploads/79/23/04/1682050370.jpg"
        }, {
            categoryname: "Fashion",
            id: 3,
            image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&c" +
                    "s=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Home and Garden",
            id: 4,
            image: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&c" +
                    "s=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Sports and Outdoors",
            id: 5,
            image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&c" +
                    "s=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Baby and Kids",
            id: 6,
            image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?a" +
                    "uto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Books and Media",
            id: 7,
            image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&c" +
                    "s=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Food and Beverage",
            id: 8,
            image: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&c" +
                    "s=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Office Supplies",
            id: 10
        }, {
            categoryname: "Office Supplies",
            id: 11
        }, {
            categoryname: "Office Supplies",
            id: 12
        }, {
            categoryname: "Office Supplies",
            id: 13
        }
    ];

    const childData = [

        {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
        }, {
            category_name: "Makeup",
            id: 21,
            parent_id: 2,
            image_link: "https://i.pinimg.com/originals/96/e3/18/96e318abf445792e258bb94a6a38a4d4.jpg"
        }, {
            category_name: "Skincare",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Haircare",
            id: 23,
            parent_id: 2,
            image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS75249EyIRZIEIm3GPEjIFqsy" +
                    "fwn8YZvukTfJhMkz9UUIklI8FRAduM8wZutODYfT3aI&usqp=CAU"
        }, {
            category_name: "Fragrance",
            id: 24,
            parent_id: 2,
            image_link: "https://i.pinimg.com/originals/30/a3/18/30a318db10210d533fdbebf0b85881e3.jpg"
        }, {
            category_name: "Men's Clothing",
            id: 31,
            parent_id: 3,
            image_link: 0
        }, {
            category_name: "Women's Clothing",
            id: 32,
            parent_id: 3,
            image_link: 0
        }, {
            category_name: "Shoes",
            id: 33,
            parent_id: 3,
            image_link: 0
        }, {
            category_name: "Accessories",
            id: 34,
            parent_id: 3,
            image_link: 0
        }, {
            category_name: "Furniture",
            id: 41,
            parent_id: 4,
            image_link: 0
        }, {
            category_name: "Home Decor",
            id: 42,
            parent_id: 4,
            image_link: 0
        }, {
            category_name: "Kitchenware",
            id: 43,
            parent_id: 4,
            image_link: 0
        }, {
            category_name: "Outdoor",
            id: 44,
            parent_id: 4,
            image_link: 0
        }, {
            category_name: "Fitness",
            id: 51,
            parent_id: 5,
            image_link: 0
        }, {
            category_name: "Cycling",
            id: 52,
            parent_id: 5,
            image_link: 0
        }, {
            category_name: "Camping",
            id: 53,
            parent_id: 5,
            image_link: 0
        }, {
            category_name: "Water Sports",
            id: 54,
            parent_id: 5,
            image_link: 0
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, {
            category_name: "Makeup",
            id: 222,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }
    ];

    const childChild = [
        {
            id: 1,
            category: 'product',
            parent_id: 23,
            productName: 'MI Super Bass Bluetooth Wireless Headphones',
            productPrice: 1799,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/29032316800754916423eae35ddce.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/01042316803342086427dd809514b.webp'), require('../../assets/images/2503231679712494641e60eed7930.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/01042316803342086427dd809514b.webp')]
        }, {
            id: 1,
            category: 'product',
            parent_id: 21,
            productName: 'Lipstick',
            productPrice: 350.00,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 10,
            productImage: require('../../assets/images/makeup/644215ed690682104231682052589.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/01042316803342086427dd809514b.webp'), require('../../assets/images/2503231679712494641e60eed7930.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/01042316803342086427dd809514b.webp')]
        }, {
            id: 2,
            category: 'product',
            parent_id: 21,
            productName: 'Eyeshadow',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,

            productImage: require('../../assets/images/makeup/6442155c263502104231682052444.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 3,
            category: 'product',
            parent_id: 21,
            productName: 'Highlighter',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: true,
            offPercentage: 30,
            productImage: require('../../assets/images/makeup/644487618b6a42304231682212705.jpg'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 4,
            category: 'product',
            parent_id: 21,
            productName: 'Eyeshadow',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/makeup/6444867f8f3202304231682212479.jpg'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 5,
            category: 'product',
            parent_id: 21,
            productName: 'Eyelashes',
            productPrice: 1799,
            description: 'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressu' +
                    're less ear muffs | Bluetooth 5.0 | Voice control',
            isOff: true,
            offPercentage: 25,
            productImage: require('../../assets/images/makeup/64421203f26722104231682051587.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 6,
            category: 'product',
            parent_id: 21,
            productName: 'Primer Oil',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/makeup/64421039a94602104231682051129.jpg'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 7,
            category: 'product',
            parent_id: 21,
            productName: 'Lotus Moisturizer',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/makeup/6442037b041c22104231682047867.webp'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp')]
        }, {
            id: 8,
            category: 'product',
            parent_id: 21,
            productName: 'Blush',
            productPrice: 1499,
            description: 'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically des' +
                    'igned to meet the needs of music lovers.',
            isOff: false,
            productImage: require('../../assets/images/makeup/6442112532b392104231682051365.jpg'),
            isAvailable: true,
            productImageList: [require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/c08000131_1750x1285.webp'), require('../../assets/images/2082f59465c39094ce90bebd0fcf8fa7.jpeg')]
        }
    ];



    const [selectedCategory,
        setSelectedCategory] = useState([]);

    const [selectedParentCategory,
        setSelectedParentCategory] = useState([]);

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

        //  Alert.alert(JSON.stringify(selectedCategory));
        // Alert.alert(JSON.stringify(selectedParentCategory));

    }

    const handleCategorySelectAndClickEvent = (category) => {

        handlClickEvent(category);
        setSelectedParentCategory(category)
        setSelectedCategory(category);

    };

    return <VStack>

        <CategorySearch/>

        <HStack h={'100%'}>

            <VStack w={'20%'} h={'100%'}>
                <ScrollView>
                    <CategoryLeftList
                        categories={data}
                        parentData={parentData}
                        onSelectCategory={handleCategorySelectAndClickEvent}/>
                    <Box h={100}></Box>
                </ScrollView>
            </VStack>

            <VStack w={'80%'} h={'100%'}>
                <ScrollView>
                    <CategoryRightList
                        subCategoryList={childChild}
                        selectedCategory={collection}
                        selectedParentCategories={selectedParentCategory}/>
                    <Box h={100}></Box>
                </ScrollView>
            </VStack>

        </HStack>

    </VStack>

}

export default CategoryScreen;
