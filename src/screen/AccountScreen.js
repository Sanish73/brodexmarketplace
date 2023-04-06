import React from 'react';
import {
    Text,
    Button,
    Box,
    Avatar,
    VStack,
    Link,
    HStack,
    Checkbox,
    Heading,
    View,
    ScrollView
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ProfileListItem({name, firsticonName, FinaliconName}) {
    return <View style={{
        marginTop: 10
    }}>

        <TouchableOpacity style={{}}>
            <VStack
                style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderWidth: 9,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View
                    style={{
                    flexDirection: 'row',
                    paddingTop: 12,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    <Icon name={firsticonName} color='#ff8e50' size={30}/>
                    <Text paddingLeft={4} fontSize={22}>{name}</Text>

                </View>
                <View
                    style={{
                    paddingTop: 12,
                    backgroundColor: 'white'
                }}>
                    <Icon name={FinaliconName} size={30}/>
                </View>
            </VStack>
        </TouchableOpacity>
    </View>
}

function ProfilHeader() {
    return (
        <Box style={styles.mainBackground}>
            <VStack >
                <Box mt={20}>
                    <VStack >

                        <Avatar
                            alignSelf="center"
                            size="xl"
                            source={{
                            uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
                        }}></Avatar>
                    </VStack>

                    <VStack justifyContent={'center'} alignItems={'center'} maxH={70}>
                        <HStack style={styles.mainText} pt={4}>

                            <Heading
                                color={'white'}
                                style={{
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}>Sanish Thapa</Heading>
                        </HStack>

                        <HStack pt={0}>
                            <Text fontSize="xl" color='white'>9844554622</Text>
                        </HStack>
                    </VStack>

                </Box>
            </VStack>
        </Box>
    )
}

export function AccountScreen() {
    return (

        <ScrollView style={{}}>

            <ProfilHeader/>

            <ProfileListItem
                firsticonName={'settings-sharp'}
                name={'Edit Info'}
                FinaliconName={'caret-forward'}/>
            <ProfileListItem
                firsticonName={'reader'}
                name={'WishList'}
                FinaliconName={'caret-forward'}/>
            <ProfileListItem
                firsticonName={'reader'}
                name={'My Order'}
                FinaliconName={'caret-forward'}/>
            <ProfileListItem
                firsticonName={'eye'}
                name={'Dark Mode'}
                FinaliconName={'caret-forward'}/>
            <ProfileListItem
                firsticonName={'log-out'}
                name={'Logout'}
                FinaliconName={'caret-forward'}/>

            <Box h={100}></Box>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    mainBackground: {
        backgroundColor: '#ff8e50',
        maxW: '100%',
        height: 280,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14
    },

    // ppImage:{   w={115},     h={115},      bg={ "indigo.500"} ,      mt={59},
    // borderRadius={90}, },
    mainText: {
        color: 'white',
        fontSize: 50
    }
});
