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

    

    const data = [
        {
            categoryname: "Electronics",
            id: 1,
            image: "https://fancystore.brodox.com/uploads/27/23/03/1679405540.png"
          
        }, {
            categoryname: "Beauty and Personal Care",
            id: 2,
            image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Fashion",
            id: 3,
            image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Home and Garden",
            id: 4,
            image: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Sports and Outdoors",
            id: 5,
            image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Baby and Kids",
            id: 6,
            image: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Books and Media",
            id: 7,
            image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            categoryname: "Food and Beverage",
            id: 8,
            image:"https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, {
            category_name: "laptop",
            id: 21,
            parent_id: 1,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }, 
        {
            category_name: "Skincare",
            id: 21,
            parent_id: 2,
            image_link: "https://i.pinimg.com/originals/96/e3/18/96e318abf445792e258bb94a6a38a4d4.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        },
        {
            category_name: "Haircare",
            id: 23,
            parent_id: 2,
            image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS75249EyIRZIEIm3GPEjIFqsyfwn8YZvukTfJhMkz9UUIklI8FRAduM8wZutODYfT3aI&usqp=CAU"
        }, 
        {
            category_name: "Fragrance",
            id: 24,
            parent_id: 2,
            image_link: "https://i.pinimg.com/originals/30/a3/18/30a318db10210d533fdbebf0b85881e3.jpg"
        },
        {
            category_name: "Men's Clothing",
            id: 31,
            parent_id: 3,
            image_link: "https://example.com/mensclothing.jpg"
        }, 
        {
            category_name: "Women's Clothing",
            id: 32,
            parent_id: 3,
            image_link: "https://example.com/womensclothing.jpg"
        },
        {
            category_name: "Shoes",
            id: 33,
            parent_id: 3,
            image_link: "https://example.com/shoes.jpg"
        }, 
        {
            category_name: "Accessories",
            id: 34,
            parent_id: 3,
            image_link: "https://example.com/accessories.jpg"
        },
        {
            category_name: "Furniture",
            id: 41,
            parent_id: 4,
            image_link: "https://example.com/furniture.jpg"
        }, 
        {
            category_name: "Home Decor",
            id: 42,
            parent_id: 4,
            image_link: "https://example.com/homedecor.jpg"
        },
        {
            category_name: "Kitchenware",
            id: 43,
            parent_id: 4,
            image_link: "https://example.com/kitchenware.jpg"
        }, 
        {
            category_name: "Outdoor",
            id: 44,
            parent_id: 4,
            image_link: "https://example.com/outdoor.jpg"
        },
        {
            category_name: "Fitness",
            id: 51,
            parent_id: 5,
            image_link: "https://example.com/fitness.jpg"
        }, 
        {
            category_name: "Cycling",
            id: 52,
            parent_id: 5,
            image_link: "https://example.com/cycling.jpg"
        },
        {
            category_name: "Camping",
            id: 53,
            parent_id: 5,
            image_link: "https://example.com/camping.jpg"
        }, 
        {
            category_name: "Water Sports",
            id: 54,
            parent_id: 5,
            image_link: "https://example.com/watersports.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }, 
        {
            category_name: "Makeup",
            id: 22,
            parent_id: 2,
            image_link: "https://i.pinimg.com/564x/91/0f/72/910f72d92165fc424717ee9a5a9b42ae.jpg"
        }
    ];
    
    const [selectedCategory,
        setSelectedCategory] = useState(data[0]);

       
        const [selectedParentCategory,
            setSelectedParentCategory] = useState(data[0]);

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
        //  Alert.alert(JSON.stringify(selectedParentCategory));

    }

    const handleCategorySelectAndClickEvent = (category) => {
        handleCategorySelect(category);
        handlClickEvent(category);
       ;
    };

    const handleCategorySelect = (category) => {
        setSelectedParentCategory(category)
        setSelectedCategory(category);
        // console.log(selectedParentCategory); 
        // Do something with the selected 
    };
    
    return <VStack>

        <CategorySearch/>

        <ScrollView>
            <HStack h={'100%'}>
                <CategoryLeftList
                    categories={data}
                    onSelectCategory={handleCategorySelectAndClickEvent}/>
                <CategoryRightList selectedCategory={collection} selectedParentCategories={selectedParentCategory}/>
            </HStack>
            <Box h={100}></Box>
        </ScrollView>

    </VStack>

}

export default CategoryScreen;
