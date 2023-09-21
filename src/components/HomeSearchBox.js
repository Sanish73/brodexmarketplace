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
        <HStack top={0} px={3} h={58}>
            <Box w={'85%'} alignItems={'center'} justifyContent={'center'}>
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
                name = "md-search-outline" />}/>
            </Box>

            <Box w={'15%'} alignItems={'center'} justifyContent={'center'} flex={1}>
                <Icon name="scan" size={30}/>
            </Box>
            
        </HStack>
    );
}
