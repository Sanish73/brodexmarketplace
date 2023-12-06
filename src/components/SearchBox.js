import React , { useState } from 'react';
import {
    Box,
    HStack,
    Input,
    Image,
    Avatar
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../navigation/RootNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchBox({
    hasSearch,
    name
}) {

    // 1000001
    const [ searchWord , setSearchWord ] = useState('');
    const submitAndTransferToNextScreen = function()
    {
        navigate('SearchResult',
        {
            searched : searchWord
        });
    };

    const handleSearchInputChange = function(x)
    {
        setSearchWord(x);
    };

    setSearchTerm
setSearchTerm
    
    return (
        <HStack paddingY={2} >
            <Box w={'20%'}  paddingRight={90} paddingTop={2}>
                <Avatar alt={"Websurfer Logo"} source={require('./../assets/smalllogo.png')} style={{width:80 , height:25}}/>
            </Box>
            <Box w={'60%'} alignItems={'center'} justifyContent={'center'}>
            {
                hasSearch ? 
                    <Input
                   
                    placeholder="Search"
                    bgColor="#E8E8E8"
                    variant="filled"
                    fontSize={18} 
                    placeholderTextColor="gray"
                    width="100%"
                    borderRadius={13}
                    py={1}
                    px={2}
                    InputLeftElement={
                        <Box marginLeft={3}>
                            <Icon size={20} name="search" />
                            
                        </Box>
                    }
                    InputRightElement={ 
                        <Box marginRight={3}>
                            <Icon size={20} name="plus" />
                        </Box>
                    }
                    
                /> : <></>
            }
            
            </Box>
            <Box  w={'15%'} alignItems={'flex-end'} justifyContent={'center'} flex={1}>
                <TouchableOpacity onPress={()=>navigate('Account')}>
                    <Avatar bg="amber.500">
                        {name?.substr(0,2)?.toUpperCase()}
                    </Avatar>
                </TouchableOpacity>

            </Box>
        </HStack>
    );
}