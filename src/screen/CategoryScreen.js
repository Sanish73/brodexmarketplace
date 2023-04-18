import React from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,

    HStack,
    Box,
    Image,
    Input,
    Badge
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import OrderItems from '../components/OrderItems';
import MyTab from '../components/MyTab'
import AccountInformation from '../components/AccountInformation';





function CategoryScreen() {

    return <VStack>
        <HStack>
            <Box>
                <Text>
                    Category
                </Text>

            </Box>
            <Box w="100%" space={5} alignSelf="center">
                <Input
                    placeholder="Search"
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

        
    </VStack>

}

export default CategoryScreen;