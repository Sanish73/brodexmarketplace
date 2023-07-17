import React from 'react';
import {Alert} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import {useSelector , useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginStateChange } from '../Redux/actions/brandAction';
import { storeData } from '../Common/functions';



function ProfileListItem({
    name,
    firsticonName,
    FinaliconName,
    callback = () => {}
}) {

    return <TouchableOpacity
        style={{
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    }}
        onPress={() => typeof(callback) == 'function'
        ? callback()
        : () => {}}>
        <VStack>
            <HStack>
                <Box w={'15%'}>
                    <Icon name={firsticonName} color='#ff8e50' size={30}/>
                </Box>
                <Box w={'75%'}>
                    <Text paddingLeft={0} fontSize={22}>{name}</Text>
                </Box>
                <Box w={'10%'}>
                    <Icon name={'chevron-forward'} color='#ff8e50' size={30}/>
                </Box>
            </HStack>
        </VStack>
    </TouchableOpacity>
}

function ProfilHeader() {
    const { 
        loginStatus,
        loginData 


       } =  useSelector( state => state.forTokenReducer );


    return (
        <Box style={styles.mainBackground} shadow={3}>
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
                            }}>{loginData.data.user_name}</Heading>
                        </HStack>

                        <HStack pt={0}>
                            <Text fontSize="xl" color='white'>{loginData.data.email}</Text>
                        </HStack>
                    </VStack>

                </Box>
            </VStack>
        </Box>
    )
}

export function AccountScreen() {
    const navigation = useNavigation();

    const { 
        loginStatus,
        loginData 


       } =  useSelector( state => state.forTokenReducer );

    console.log('AccountScreen=>>>',loginData);
    const dispatch = useDispatch();


const logOutDispatch =  ()=>{

    // console.log("-------------------------",storeData);
    //  loginStateChange( false , loginData)(dispatch);
     storeData("@loginstatus",(''),function(dtx){
        loginStateChange( false, dtx)(dispatch);

             });
    

}
    const askForLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress:  () => {
                    logOutDispatch();

                   
               
                    // const storedCartItems = await AsyncStorage.getItem('token');
                    // console.log(storedCartItems)
                  // Clear the token from AsyncStorage
                //   await AsyncStorage.removeItem('token');
                  // Perform any other logout logic here
          
                  // Example: Redirect to the login screen or perform any other navigation
                  // navigation.navigate('LoginScreen');
            }
          }
        ], {cancelable: false});
    }

    const askForOder = () => {

        navigation.navigate('MyOrder');

    }
    const askForMyProfilEdit = () => {
        navigation.navigate('MyProfil');

    }

    return (

        <ScrollView style={{}}>

            <ProfilHeader/>

            <Box p={4}>
                <Box p={5} bg={'white'} rounded={'xl'} shadow={2}>
                    <ProfileListItem
                        firsticonName={'business'}
                        name={'Edit Info'}
                        FinaliconName={'caret-forward'}
                        callback={askForMyProfilEdit}/> {/*My ORders*/}
                    <ProfileListItem
                        firsticonName={'log-out'}
                        name={'My Orders'}
                        FinaliconName={'caret-forward'}
                        callback={askForOder}/> {/* logoutaction */}

                    <ProfileListItem
                        firsticonName={'log-out'}
                        name={'Logout'}
                        FinaliconName={'caret-forward'}
                        callback={askForLogout}/>
                </Box>
            </Box>

            <Box h={100}></Box>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    mainBackground: {
        backgroundColor: '#ff8e50',
        maxW: '100%',
        height: 280,
        borderBottomLeftRadius: 39,
        borderBottomRightRadius: 39
    },
    mainText: {
        color: 'white',
        fontSize: 50
    }
});