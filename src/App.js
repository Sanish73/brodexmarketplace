import React from 'react';

import {NativeBaseProvider} from 'native-base';

import {RootTagContext, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScreen} from './screen/RootScreen';
import PaymentScreen from './screen/PaymentScreen';
import PaymentSuccessScreen from './screen/PaymentSuccessScreen';
import { OrderScreen } from './screen/OrderScreen';

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

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {

    return (
        <NativeBaseProvider>
            <AppBox/>

        </NativeBaseProvider>
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
