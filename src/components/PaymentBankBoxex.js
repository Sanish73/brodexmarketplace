import {
    ScrollView,
    Text,
    Box,
    VStack,
    Button,
    HStack,
    Image
} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

export function PaymentBankBoxex() {
    return <Box paddingTop={3}>
        <HStack bgColor={'#fcf5eb'} h={59} borderRadius={5}>
            <VStack w={'17%'} alignItems={'center'} justifyContent={'center'}>
                <Image
                    alt="A descriptive text about the image"
                    size={'5'}
                    resizeMode="cover"
                    borderRadius={3}
                    source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }}/>
            </VStack>
            <VStack w={'68%'} paddingX={0} justifyContent={'center'} space={1}>
                <VStack>
                    <Text bold>Bank Central Asia</Text>
                </VStack>
                <VStack>
                    <Text>Checked Automatically</Text>
                </VStack>
            </VStack>
            <VStack w={'15%'} alignItems={'center'} justifyContent={'center'}>
                <Icon size={20} // md-radio-button-on-outline
                    name={'md-radio-button-off'} ba style={{
                    color: '#ffa94d',
                    padding: 4
                }}></Icon>

               
            </VStack>
        </HStack>

        {/* <HStack justifyContent={'space-between'}>

            <VStack width={'29%'} bg={'green.100'}>
                <Box>
                    <Image
                        source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }}
                        alt="Alternate Text"
                        size="lg"
                        borderRadius={7}/>
                </Box>
            </VStack>
            <VStack width={'50%'} paddingX={1}>
                <VStack >
                    <Text bold fontSize={17}>Scarlett Whistening</Text>

                </VStack>
                <VStack>
                    <Text fontSize={16} color={'#8C8A89'}>Brightly Serum</Text>
                </VStack>
                <VStack>
                    <Text fontSize={16} color={'#8C8A89'}>$10,3</Text>
                </VStack>
            </VStack>

            <VStack width={'18%'} justifyContent={'center'}>
                <HStack >
                    <Text paddingLeft={1}>
                        X
                    </Text>

                    <Text >
                        10000
                    </Text>
                </HStack>

            </VStack>
        </HStack> */}
    </Box>
}