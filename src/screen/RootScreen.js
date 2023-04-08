import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import {CartScreen} from './CartScreen';
import {AccountScreen} from './AccountScreen';

export function RootScreen() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
            headerShown: false,
            activeTintColor: '#3a82fe',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                var fontSize = 27;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name == 'Category') {
                    fontSize = 24;
                    iconName = focused
                        ? 'grid'
                        : 'grid-outline';
                } else if (route.name == 'Cart') {
                    iconName = focused
                        ? 'cart'
                        : 'cart-outline';
                } else if (route.name == 'Products') {
                    iconName = focused
                        ? 'grid'
                        : 'grid-outline';
                } else if (route.name === 'Account' || route.name === 'Others') {
                    iconName = focused
                        ? 'person'
                        : 'person-outline';
                }
                return <Icon name={iconName} size={fontSize} color={color}/>;
            },
            tabBarStyle: {
                backgroundColor: 'white'
            }
        })}>
         <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Category" component={CategoryScreen}/>
            <Tab.Screen name="Account" component={AccountScreen}/>

           

        </Tab.Navigator>
    )
}