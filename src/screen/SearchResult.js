import {
    Text,
    Box,
    VStack,
    Center,
    HStack,
    Button,
    Heading,
    useColorMode,
    Input
} from 'native-base';
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import React from 'react'
import { SearchedProducts } from '../components/SearchedProducts'; 
import {useSelector, useDispatch} from 'react-redux';

const SearchResult = () => {

    // const {data} = useSelector(state => state.searchReducer);

    return (

        <VStack>

            <ScrollView>
                {/* <Text>
                    {JSON.stringify(data, null, 2)}
                </Text> */}
                <VStack px={1} h={'100%'}>

                    <SearchedProducts/>
                    <Box h={100}></Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}

export default SearchResult