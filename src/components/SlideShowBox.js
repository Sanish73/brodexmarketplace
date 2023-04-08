import {
    Text,
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
    StyleSheet,
    Alert,
    ScrollView,
    FlatList,

    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Slideshow from 'react-native-slideshow';
import React, {useState} from 'react';

const images = [
    {
        id: '1',
        uri: 'https://wallpaperaccess.com/full/317501.jpg'
    }, {
        id: '2',
        uri: 'https://wallpaperaccess.com/full/317501.jpg'
    }, {
        id: '3',
        uri: 'https://wallpaperaccess.com/full/317501.jpg'
    }, {
        id: '4',
        uri: 'https://wallpaperaccess.com/full/317501.jpg'
    }, {
        id: '5',
        uri: 'https://wallpaperaccess.com/full/317501.jpg'
    }
];

const {width} = Dimensions.get('window');

const SliderShowBox = () => {
    const [currentIndex,
        setCurrentIndex] = useState(0);

    const renderItem = ({item}) => (
        <View style={styles.slide}>
            <Image
                source={{
                uri: item.uri
            }}
                style={styles.image}/>
        </View>
    );

    const handleOnScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
        setCurrentIndex(currentIndex);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={handleOnScroll}/>
            <View style={styles.pagination}>
                {images.map((_, i) => (<View
                    key={i}
                    style={[
                    styles.dot, currentIndex === i
                        ? styles.activeDot
                        : null
                ]}/>))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        paddingVertical: 10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#d4d4d4',
        marginHorizontal: 5
    },
    activeDot: {
        backgroundColor: '#007aff'
    }
});

export default SliderShowBox;