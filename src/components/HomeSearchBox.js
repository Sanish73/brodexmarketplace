import React, {useState, useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from '../navigation/RootNavigation';
import {useNavigation} from '@react-navigation/native';

export function HomeSearchBox() {
    const dispatch = useDispatch();
    const navigation = useNavigation();


    useEffect(() => {
        // getHomePageProducts('', 25)(dispatch);
        
    }, []);

    const [ searchWord , setSearchWord ] = useState('');
 
  
    const submitAndTransferToNextScreen = function()
    {

        if (navigation) {
            navigation.navigate('SearchResult', searchWord);
            // console.warn(JSON.stringify(ForSelectingFirstCategory, null, 2));
        } else {
            console.warn("Navigation prop is not defined");
        }
    
    };

    const handleSearchInputChange = function(x)
    {
        setSearchWord(x);
    };

    
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
                    InputLeftElement={< Icon ml = {5}size = {20}name = "md-search-outline" />}
                    onChangeText={handleSearchInputChange}
                    onSubmitEditing={submitAndTransferToNextScreen}
                    value={searchWord}
                    />
            </Box>
            <TouchableOpacity  w={'15%'}  bgColor={'blue.100'} >          
                 <Box bgColor={'red.100'} w={'100%'}  alignItems={'center'} justifyContent={'center'} flex={1}    >
                    <Icon name="scan" size={30}  />
                </Box>
            </TouchableOpacity>

        </HStack>
    );
}
