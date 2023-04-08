import React from 'react';
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
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';


export function HomeSearchBox() {
    return (

        <HStack bgColor={'green.100'}>

            <Input
                placeholder="Search"
                variant="filled"
                width="80%"
                borderRadius={10}
                py={1}
                px={2}
                InputLeftElement={< Icon ml = {
                2
            }
            size = {
                4
            }
            color = "gray.400" as = { < Icon name = "md-radio-button-on-outline" />
            } />}/>

            <Text>lsdkfjlk</Text>

        </HStack>
    )

}
