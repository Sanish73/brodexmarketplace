import React, {useState,useEffect} from 'react';
import { ScrollView} from 'react-native';
import {
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
        _data
    } = useSelector(state => state.listBrand);
    const _dataOnlyParent = _data.filter(item => item.type === 'category');
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
        //Alert.alert(JSON.stringify(selectedCategory));
    }

    const handleCategorySelectAndClickEvent = (category) => {
        handlClickEvent(category);
        console.log("cateforyScreen-------", category);
        setSelectedParentCategory(category)
    };

    return <VStack>
        <CategorySearch/>
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
