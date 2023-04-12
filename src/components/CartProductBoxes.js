import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CartProductBoxes({data}) {

    return (
        <Box paddingTop={3}>
            <HStack justifyContent={'space-between'} bgColor={'red.100'} h={68}>

                <VStack width={'18%'} bg={'green.100'} h={'100%'}>
                    <Box>
                        <Image
                            source={data.productImage}
                            alt="Alternate Text"
                            size="lg"
                            height="100%"
                            resizeMode="contain"
                            borderRadius={7}/>
                    </Box>
                </VStack>
                <VStack width={'58%'} paddingX={3} justifyContent={'space-between'}>
                    <VStack >
                        <Text bold fontSize={14}>Scarlett Whistening</Text>
                        <Text fontSize={13} color={'#8C8A89'}>Brightly Serum</Text>
                    </VStack>

                    <VStack>
                        <Text fontSize={14} color={'#8C8A89'}>$10,3</Text>

                    </VStack>
                </VStack>

                <VStack width={'25%'} justifyContent={'center'} bgColor={'green.100'}>
                    <HStack >
                        <Box>
                            <Icon
                                size={27}
                                name={'remove-sharp'}
                                style={{
                                color: '#ffa94d',
                                padding: 2
                            }}></Icon>

                        </Box>
                        <Text>
                            2
                        </Text>
                        <Box>
                            <Icon
                                size={27}
                                name={'add'}
                                style={{
                                color: '#ffa94d',
                                padding: 2
                            }}></Icon>

                        </Box>
                    </HStack>
                    <HStack>

                        <Box>
                            <FontAwesome name="rupee" size={14} color={'red.100'}/>

                        </Box>
                        <Text>
                            19.00
                        </Text>

                    </HStack>

                </VStack>
            </HStack>
        </Box>
    )
}