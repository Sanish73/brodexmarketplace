import React, {useState} from 'react';
import {
    Box,
    HStack,
    Input
} from 'native-base';
import {
    TouchableOpacity
} from 'react-native';
import { useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { searchAction } from '../Redux/actions/searchAction';

export function HomeSearchBox() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [ searchWord , setSearchWord ] = useState('');
    const submitAndTransferToNextScreen = function()
    {
        if (navigation) {
            if (typeof navigation.navigate === 'function') {
                searchAction('', searchWord)(dispatch);
                navigation.navigate('SearchResult');
            } else {
              console.error("The 'navigation' object does not have a 'navigate' function.");
            }
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
