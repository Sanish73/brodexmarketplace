import {Box, VStack} from 'native-base';
import {ScrollView} from 'react-native';
import React from 'react'
import {SearchedProducts} from '../components/SearchedProducts';

const SearchResult = () => {
    return (
        <VStack>
            <ScrollView>
                <VStack px={1} h={'100%'}>
                    <SearchedProducts/>
                    <Box h={100}></Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}

export default SearchResult