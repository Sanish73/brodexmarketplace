import React from 'react';

import {NativeBaseProvider} from 'native-base';

import {RootTagContext, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScreen} from './screen/RootScreen';
import PaymentScreen from './components/PaymentScreen';
import PaymentSuccessScreen from './components/PaymentSuccessScreen';
import {OrderScreen} from './screen/OrderScreen';
import {ProductInfoScreen} from './components/ProductInfoScreen';
import {CategorySubCatDetailScree} from './components/CategorySubCatDetailScree';
import OOOrder from './screen/OOOrder';
import MyProfilScreen from './components/MyProfilScreen';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
// import CartBox from './components/CartBox';
import CartScreen from './screen/CartScreen';

function AppBox() {
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Root" component={RootScreen}/>
                <Stack.Screen name="Payments" component={PaymentScreen}/>
                <Stack.Screen name='Success' component={PaymentSuccessScreen}/>
                <Stack.Screen name="Order" component={OrderScreen}/>
                <Stack.Screen name="ProductInfo" component={ProductInfoScreen}/>
                <Stack.Screen
                    name="CategorySubCategoDetails"
                    component={CategorySubCatDetailScree}/>
                <Stack.Screen name="MyOrder" component={OOOrder}/>
                <Stack.Screen name="cartScreen" component={CartScreen}/>
                <Stack.Screen name="MyProfil" component={MyProfilScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default function App() {

    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <AppBox/>

            </NativeBaseProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
});
