import React, {useState,useEffect} from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    HStack,
    Box
} from "native-base";
import CategorySearch from '../components/CategorySearch';
import {CategoryLeftList} from '../components/CategoryLeftList';
import {CategoryRightList} from '../components/CategoryRightList';
import {useDispatch, useSelector} from 'react-redux';
import {productListing} from '../Redux/actions/brandAction';



function CategoryScreen() {
  
    const page = 1;
    const refresh = true;

    const dispatch = useDispatch();

    useEffect(() => {
        productListing('', page, refresh)(dispatch);
    }, []);

    const {
        bListingWaiting,
        clicked,
        loading,
        _page,
        _refresh,
        _data
    } = useSelector(state => state.listBrand);


    const _dataOnlyParent = _data.filter(item => item.type === 'category');

    



    const data = [
        {
            categoryname: "Electronics",
            id: 1,
            image: "https://fancystore.brodox.com/uploads/27/23/03/1679405540.png"

        }
    ];

    const childData = [
        {
            category_name: "laptop",
            id: 21,
            parent_id: 111,
            image_link: "https://th.bing.com/th/id/OIP.gr8FMnXeCRpYcLD9X4vS6gHaE8?w=260&h=180&c=7&r=0&o=5" +
                    "&dpr=1.3&pid=1.7"
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
        }
    ];

//////////////////////////////

    const [selectedCategory,
        setSelectedCategory] = useState([]);

    const [selectedParentCategory,
        setSelectedParentCategory] = useState([]);

    const [collection,
        setCollection] = useState([]);

    function handlClickEvent(category) {
        var collection2 = [];

        for (var i = 0; i < _data.length; i++) {
            const item = _data[i];

            if (item.p_id == category.id) {
                collection2.push(item);

            }
        }
        setCollection(collection2);

        //  Alert.alert(JSON.stringify(selectedCategory));
        // Alert.alert(JSON.stringify(selectedParentCategory));
    }

    const handleCategorySelectAndClickEvent = (category) => {
        handlClickEvent(category);
        console.log("cateforyScreen-------", category);
        setSelectedParentCategory(category)
        // setSelectedCategory(category);
    };

    return <VStack>

        <CategorySearch/>
        {/* <Text>{JSON.stringify(selectedParentCategory , null , 1)}</Text> */}

        <HStack h={'100%'}>
            <VStack w={'20%'} h={'100%'}>
                <ScrollView>
                    <CategoryLeftList
                        categories={data}
                        APIcat={_dataOnlyParent}
                        APIcatToPreSelect={_dataOnlyParent[0]}
                        onSelectCategory={handleCategorySelectAndClickEvent}/>
                    <Box h={100}></Box>
                </ScrollView>
            </VStack>

            
  {/* <Text>{JSON.stringify(collection , null , 1)}</Text> */}


            <VStack w={'80%'} h={'100%'}>
                <ScrollView>
                    <CategoryRightList
                        ForSelectingFirstCategory={_dataOnlyParent}
                        subCategoryList={_data}
                        selectedCategory={collection}
                        selectedParentCategories={selectedParentCategory}/>
                    <Box h={100}></Box>
                </ScrollView>
            </VStack>
        </HStack>

    </VStack>

}

export default CategoryScreen;
