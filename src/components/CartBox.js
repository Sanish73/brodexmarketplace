import {Box, HStack, VStack, Text, Center} from 'native-base';
import React, {useState} from 'react';
import {View, TouchableOpacity, Modal, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartBox() {
    const [isModalVisible,
        setModalVisible] = useState(false);
    const [deliveryLocation,
        setDeliveryLocation] = useState('Home');
    const [deliveryAddress,
        setDeliveryAddress] = useState('Kathmandu, Baneshwor');
    const [newDeliveryLocation,
        setNewDeliveryLocation] = useState(deliveryLocation);
    const [newDeliveryAddress,
        setNewDeliveryAddress] = useState(deliveryAddress);

    const handleTextClick = () => {
        // Show the modal
        setModalVisible(true);
    };

    const handleModalClose = () => {
        // Hide the modal
        setModalVisible(false);
    };

    const handleSaveChanges = () => {
        // Save the changes made in the modal
        setDeliveryLocation(newDeliveryLocation);
        setDeliveryAddress(newDeliveryAddress);
        // Close the modal
        setModalVisible(false);
    };

    return (
        <HStack bgColor={'#FFECB3'} w={'100%'} borderRadius={5}>
            <HStack
                alignItems={'center'}
                style={{
                height: 55,
                width: '100%'
            }}>
                <Center w={'15%'}>
                    <Icon
                        size={27}
                        name={'location'}
                        style={{
                        color: '#F57F17',
                        padding: 2
                    }}/>
                </Center>
                <VStack w={'64%'}>
                    <HStack alignSelf={'flex-start'} alignItems={'center'}>
                        <Text fontSize={16}>Deliver at:</Text>
                        <TouchableOpacity onPress={handleTextClick}>
                            <Text bold fontSize={17} pl={1}>
                                {deliveryLocation}
                            </Text>
                        </TouchableOpacity>
                    </HStack>
                    <Text alignSelf={'flex-start'}>{deliveryAddress}</Text>
                </VStack>
                <VStack w={'16%'}>
                    <TouchableOpacity onPress={handleTextClick}>
                        <Text fontSize={16} color={'#F57F17'} bold>
                            Change
                        </Text>
                    </TouchableOpacity>
                </VStack>
            </HStack>
            <Modal visible={isModalVisible} animationType="slide">
                <View
                    style={{
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                        color: "black",
                        fontSize: 22,
                        fontWeight: 'bold',
                        paddingBottom: 10
                    }}>
                        Change Details
                    </Text>
                    <VStack
                        style={{
                        paddingBottom: 6
                    }}>
                        <View style={{}}>
                            <Picker
                                selectedValue={newDeliveryLocation}
                                style={{
                                height: 40,
                                color: "black",
                                width: 200,
                                backgroundColor: '#BBDEFB',
                                marginVertical: 10
                            }}
                                onValueChange={(itemValue) => setNewDeliveryLocation(itemValue)}>
                                <Picker.Item label="Home" value="Home"/>
                                <Picker.Item label="Outside" value="Outside"/>
                                <Picker.Item label="Office" value="Office"/>

                            </Picker>
                        </View>

                        <View style={{}}>
                            <Picker
                                selectedValue={newDeliveryAddress}
                                style={{
                                height: 40,
                                color: "black",
                                width: 200,
                                backgroundColor: '#BBDEFB',
                                marginVertical: 10
                            }}
                                onValueChange={(itemValue) => setNewDeliveryAddress(itemValue)}>
                                <Picker.Item label="Kathmandu, Baneshwor" value="Kathmandu, Baneshwor"/>
                                <Picker.Item label="Kathmandu, koteshwor" value="Kathmandu, koteshwor"/>
                                <Picker.Item label="Kathmandu, jadibuti" value="Kathmandu, jadibuti"/>
                            </Picker>
                        </View>
                    </VStack>
                    <HStack>
                        <View
                            style={{
                            paddingRight: 10
                        }}>
                            <Button title="Save Changes" onPress={handleSaveChanges}/>
                        </View>

                        <View>
                            <Button title="Cancel" onPress={handleModalClose}/>
                        </View>

                    </HStack>
                </View>
                <View style={{
                    flex: 0
                }}></View>
            </Modal>
        </HStack>
    );
}
