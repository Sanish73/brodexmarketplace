import React, {useState, useEffect, useRef} from 'react';
import {Box, VStack, Button, Text, ScrollView} from 'native-base';
import {Animated} from 'react-native';
import CategoryLeftAnimation from './CategoryLeftAnimation';
import CategoryRightAnimation from './CategoryRightAnimation';
import {useRoute} from '@react-navigation/native';
import {termCatoListing} from '../Redux/actions/brandAction';
import {useDispatch, useSelector} from 'react-redux';


export function CategorySubCatDetailScree() {
    const route = useRoute();

    const collectionOfSubcategoryList = route.params;

    const page = 1;
     const refresh = true;
     const dispatch = useDispatch();

    

    useEffect(() => {
      
        termCatoListing('', collectionOfSubcategoryList, page, refresh)(dispatch);
      },[collectionOfSubcategoryList]);


      const {
        bListingWaiting,
        clicked,
        loading,
        _page,
        _refresh,
        _termData
    } = useSelector(state => state.termCatoReducer);


    
    const [currentTab,
        setCurrentTab] = useState("Home");
    const [showMenu,
        setShowMenu] = useState(false)

    // Animated properties
    const offsetvalue = useRef(new Animated.Value(0)).current;
    //scale initally must be zero
    const scalevalue = useRef(new Animated.Value(1)).current;
    const closebuttonoffsetvalue = useRef(new Animated.Value(0)).current;

   
    

    return (
        <VStack >
            <VStack>
                <CategoryLeftAnimation
                    _offsetvalue={offsetvalue}
                    _showMenu={showMenu}
                    _setShowMenu={setShowMenu}
                    _currentTab={currentTab}
                    _scalevalue={scalevalue}
                    _setCurrentTab={setCurrentTab}/>
            </VStack>
            <VStack></VStack>
            <CategoryRightAnimation
                _termData={_termData}
                loading={loading}
                _showMenu={showMenu}
                _setShowMenu={setShowMenu}
                _offsetvalue={offsetvalue}
                _scalevalue={scalevalue}
                _closebuttonoffsetvalue={closebuttonoffsetvalue}/>

        </VStack>

    )
}
