import React, {useState, useEffect} from 'react';
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
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/LoginScreen';
import { useSelector ,useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStoredData } from './Common/functions';
import { loginStateChange } from './Redux';
import { HomeScreen } from './screen/HomeScreen';
import SearchResult from './screen/SearchResult';
import { ShowImageFromProductInfo } from './components/ShowImageFromProductInfo';
import { ProductInfoScreenSearched } from './components/ProductInfoScreenSearched';


function AppBox() {
    const Stack = createNativeStackNavigator();
    const dispatch = useDispatch();
      const { 
        loginStatus
       } =  useSelector( state => state.forTokenReducer );
      useEffect(() => {
        // getHomePageProducts('', 50)(dispatch);
        getStoredData('@loginstatus', function(statee , dta){
          loginStateChange( dta?.status , dta)(dispatch);
        });
      }, []);
       console.log("App.js Token GLobal ----->>>>>",loginStatus);
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loginStatus?(
            <>
            <Stack.Screen name="Root" component={RootScreen} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
            <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Payments" component={PaymentScreen} />
              <Stack.Screen name="Success" component={PaymentSuccessScreen} />
              <Stack.Screen name="Order" component={OrderScreen} />
              <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
              <Stack.Screen name="ProductInfoScreenSearched" component={ProductInfoScreenSearched} />
              <Stack.Screen
                name="CategorySubCategoDetails"
                component={CategorySubCatDetailScree}
              />
              <Stack.Screen name="MyOrder" component={OOOrder} />
              <Stack.Screen name="cartScreen" component={CartScreen} />
              <Stack.Screen name="MyProfil" component={MyProfilScreen} />
              <Stack.Screen name="ShowImageFromProductInfo" component={ShowImageFromProductInfo} />
              

              </>
          ) : (
            <Stack.Screen name="Account" component={LoginScreen} />          
          )}
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
