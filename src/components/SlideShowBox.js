import {

    Box,
    VStack,
    Center,
    HStack,
    Button,
    Heading,
    useColorMode,
    Input
} from 'native-base';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

import Slideshow from 'react-native-slideshow';

import React, {useState} from 'react';

function SliderShowBox() {

    return (
        <HStack paddingBottom={5} paddingTop={2}>
         <Box
                borderRadius={8}
                overflow="hidden"
                // borderWidth={}
            >
            <Slideshow
            
                dataSource={[
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'http://placeimg.com/640/480/any'
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'http://placeimg.com/640/480/any'
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'http://placeimg.com/640/480/any'
                }
            ]}/>
            </Box>
        </HStack>
    )
}

/* eslint-disable react/no-deprecated */
SliderShowBox.propTypes = {};
export default SliderShowBox;