import React, {useState, useEffect, useRef} from 'react';
import {Box, VStack, Button} from 'native-base';
import {Animated} from 'react-native';
import CategoryLeftAnimation from './CategoryLeftAnimation';
import CategoryRightAnimation from './CategoryRightAnimation';


export function CategorySubCatDetailScree({route}) {
    const [currentTab,
        setCurrentTab] = useState("Home");
    const [showMenu,
        setShowMenu] = useState(false)

    // Animated properties
    const offsetvalue = useRef(new Animated.Value(0)).current;
    //scale initally must be zero
    const scalevalue = useRef(new Animated.Value(1)).current;
    const closebuttonoffsetvalue = useRef(new Animated.Value(0)).current;

    const subCatParams = {
        category_name,
        id,
        parent_id,
        image_link
    } = route.params

    return (
        <VStack>
            <CategoryLeftAnimation _currentTab={currentTab} _setCurrentTab={setCurrentTab}/>
            <CategoryRightAnimation _showMenu={showMenu} _setShowMenu={setShowMenu} _offsetvalue={offsetvalue}  _scalevalue={scalevalue} _closebuttonoffsetvalue={closebuttonoffsetvalue}/>  
        </VStack>

    )
}
