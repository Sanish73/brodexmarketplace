import {View} from 'react-native'
import React from 'react'
import {Box, Input, VStack, Text, Button, HStack, Heading} from 'native-base'
import {useSelector} from 'react-redux';

function EditProfilInfo({Number, Password}) {
    const {token, email, status, error, user_name,userId} = useSelector(state => state.loginReducer);
    console.log('MyProfilScreen.js UserId',userId);

    return (
        <VStack space={3}>
           <HStack>
                <Heading>
                    <Text>
                        Edit Profil
                    </Text>
                </Heading>
            </HStack>
            <VStack w={'100%'} alignSelf={'flex-start'} space={1}>
                <Box>
                    <Text bold>
                        Username
                    </Text>
                </Box>
                <Box>
                    <Input size="lg" placeholder={user_name} h={10}/>
                </Box>
            </VStack>
            <VStack w={'100%'} alignSelf={'flex-start'} space={1}>
                <Box>
                    <Text bold>
                        Email I'd
                    </Text>
                </Box>
                <Box>
                    <Input size="lg" placeholder={email} h={10}/>
                </Box>
            </VStack>
            <VStack w={'100%'} alignSelf={'flex-start'} space={1}>
                <Box>
                    <Text bold>
                        Phone Number
                    </Text>
                </Box>
                <Box>
                    <Input size="lg" placeholder={Number} h={10}/>
                </Box>
            </VStack>
            <VStack w={'100%'} alignSelf={'flex-start'} space={1}>
                <Box>
                    <Text bold>Password</Text>
                </Box>
                <Box>
                    <Input size="lg" placeholder={Password} h={10}/>
                </Box>
            </VStack>
            <VStack mt={9} w={'100%'} alignItems={'center'}>
                <Box w={'80%'}>
                    <Button
                        _text={{
                        style: {
                            fontSize: 18
                        }
                    }}>Update</Button>
                </Box>
            </VStack>
        </VStack>
    )
}
const MyProfilScreen = () => {
    return (
        <VStack p={6} justifyContent={'center'}style={{
            height:'100%'
        }}>
            <EditProfilInfo
                Number={'9844554655'}
                Password={'password'}/>
        </VStack>
    )
}

export default MyProfilScreen