import React from 'react';
import {Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    HStack,
    Box,
    Image,
    Badge
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function OrderItems({
    productId,
    orderId,
    noItems,
    price,
    time,
    pricePaidStatus,
    activityStatus,
    photo

}) {

    console.log(time,'----------------');

    // Create a Date object from the dateStrstamp
    const dateObj = new Date(time);
    // Get the year, month, and day
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(dateObj.getDate()).padStart(2, '0');
    // Create the date string in the "YYYY-MM-DD" format
    const dateStr = `${year}-${month}-${day}`;
    console.log(dateStr); // Output: "2023-08-27"


    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber)

    const threeState = (state, one, two, zero, four) => {
        return state == 2
            ? two
            : (state == 1
                ? one
                : (state == 0
                    ? zero
                    : four));
    };

    const statusDetail = (item) => {
        return <Badge
            colorScheme={threeState(item, "warning", "success", "danger", "info")}
            rounded={'lg'}
            p={1}>

            <Text
                bold
                style={{
                color: threeState(item, "#ff8000", "green", "red", "blue"),
                fontSize: threeState(item, 15, 15, 12, 15)
            }}>

                {threeState(item, "Pending", "Paid", "Cancelled", "Unknown")}
            </Text>
        </Badge>
    }

    return <VStack key={productId}>

        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Box h={150} marginTop={2} rounded={'lg'} bg={'white'} p={1}>
                <VStack h={'20%'}>
                    <HStack flex={1}>
                        <Box h={'100%'} w={"65%"} py={1} px={3}>
                            <Text bold>Order:- {orderId}</Text>
                        </Box>
                        <Box h={'100%'} w={"35%"} justifyContent={'center'} px={3}>
                            <Text
                                alignSelf={'flex-end'}
                                style={{
                                color: 'grey'
                            }}>{dateStr}</Text>
                        </Box>
                    </HStack>
                </VStack>
                <VStack h={'57%'}>
                    <HStack
                        flex={1}
                        style={{
                        borderBottomColor: '#eee',
                        borderBottomWidth: 1
                    }}>

                        {/* <Box h={'100%'} w={"25%"} p={2}>
                            <Image
                                rounded={'lg'}
                                source={{
                                uri: photo
                            }}
                                alt="Alternate Text"
                                size="xl"
                                h={'100%'}
                                w={'100%'}/>
                        </Box> */}
                        <Box h={'100%'} w={"50%"} justifyContent={'center'}>
                            <VStack px={1}>
                                <Text
                                    fontSize="md"
                                    style={{
                                    color: 'grey'
                                }}>
                                    {noItems}{' '}
                                    ITEMS
                                </Text>
                            </VStack>
                            <VStack px={1}>
                                <Text
                                    bold
                                    fontSize="lg"
                                    style={{
                                    color: '#0c6cb3'
                                }}>{price}</Text>
                            </VStack>
                        </Box>
                        <Box h={'100%'} w={"25%"}>
                            <VStack px={2} py={5}>
                                {statusDetail(randomNumber)}
                            </VStack>
                        </Box>
                    </HStack>
                </VStack>
                <VStack h={'23%'} alignItems={'center'}>
                    <HStack flex={2}>
                        <Box flex={1} px={2} justifyContent={'center'}>
                            <Text>
                                <Icon
                                    name="checkmark-circle-sharp"
                                    style={{
                                    color: 'green',
                                    fontSize: 17
                                }}></Icon>
                                <Text
                                    style={{
                                    color: 'grey'
                                }}>{" "}Completed</Text>
                            </Text>
                        </Box>
                        <Box px={5} justifyContent={'center'} py={1}>
                            <Box
                                alignSelf={'flex-end'}
                                px={3}
                                rounded={'md'}
                                style={{
                                borderColor: '#eee',
                                borderWidth: 1
                            }}>
                                <Text bold>
                                    Detail {" "}<Icon name="chevron-forward-sharp" style={{
        fontSize: 15
    }}></Icon>
                                </Text>
                            </Box>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        </TouchableOpacity>
    </VStack>

};
