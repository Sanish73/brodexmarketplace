import {ScrollView, Text, Box, VStack, Button,HStack} from 'native-base';
import ShippingAddressBox from '../components/ShippingAddressBox'
import OrderSummary from '../components/OrderSummary'
import VoucherBox from '../components/VoucherBox'
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { PaymentBankBoxex } from './PaymentBankBoxex';


export function PaymentBankTransfer(){
    return <VStack p={4}>
    <Box>
        <HStack
            style={{
           
            alignItems: 'center'
        }}>

            <VStack>
                <Text fontSize={20} fontWeight={'thin'}>
                    Shipping Address
                </Text>
            </VStack>
            <VStack marginLeft={2} style={{
                    backgroundColor: '#FAEFCD',
                    borderRadius: 50
                }}>
                {/* #ffa94d */}
                <Icon
                        size={20}
                        name={'location-outline'}
                        ba
                        style={{
                        color: '#ffa94d',
                        padding: 4
                    }}></Icon>
            </VStack>
        </HStack>

        <PaymentBankBoxex />

    </Box>
</VStack>
}