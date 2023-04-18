import React from 'react';
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

export default function CategorySearch() {

    return (
        <HStack alignItems={'center'} w={'100%'} p={2}>
            <Box w={'25%'} justifyContent={'center'} >
                <Text fontSize={'md'} bold>
                    Categories
                </Text>

            </Box>
            <Box w="75%" space={5} alignSelf="center">
                <Input
                    placeholder="What are You looking for?"
                    bgColor='#dfdedc'
                    variant="filled"
                    width="100%"
                    borderRadius={13}
                    py={1}
                    px={2}
                    InputLeftElement={< Icon ml = {
                    5
                }
                size = {
                    20
                }
                color = "gray.400" name = "md-search-outline" />}/>
            </Box>
        </HStack>
    )
}