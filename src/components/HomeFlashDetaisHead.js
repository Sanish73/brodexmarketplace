import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native';
import StarRating from './StarRating';

const data = [
    {
        id: 1,
        image: require('../../assets/images/645d5f28e26c7de2a280f71db15c2141.jpeg'),
        text: 'Item 1sjdaklfkljsdklfklsdjlfkjksldjfkljsdklfj',
        rating: 3
    }, {
        id: 3,
        image: require('../../assets/images/2082f59465c39094ce90bebd0fcf8fa7.jpeg'),
        text: 'Item 2',
        rating: 2
    }, {
        id: 2,
        image: require('../../assets/images/ss.jpeg'),
        text: 'Item 3',
        rating: 3
    }, {
        id: 4,
        image: require('../../assets/images/645d5f28e26c7de2a280f71db15c2141.jpeg'),
        text: 'Item 4',
        rating: 1
    }, {
        id: 5,
        image: require('../../assets/images/2082f59465c39094ce90bebd0fcf8fa7.jpeg'),
        text: 'Item 5',
        rating: 3
    }
];

const ITEM_WIDTH = (Dimensions.get('window').width - 20) / 2;
const ITEM_MARGIN = 10;

const Item = ({item}) => {
    return (
        <View style={styles.item} >
            <Image source={item.image} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.text}>{item.text}</Text>
                <StarRating  rating={item.rating} style={styles.rating}/>
            </View>
        </View>
    );
};

const HomFlashPhoto = () => {
    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Item item={item}/>}
            getItemLayout={(data, index) => ({
            length: ITEM_WIDTH + ITEM_MARGIN,
            offset: (ITEM_WIDTH + ITEM_MARGIN) * index,
            index
        })}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            snapToInterval={ITEM_WIDTH + ITEM_MARGIN}
            snapToAlignment="start"
            decelerationRate={0.9}/>
    );
};

const styles = StyleSheet.create({
    item: {
        width: ITEM_WIDTH,
        marginRight: ITEM_MARGIN
    },
    image: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH * 1.5,
        resizeMode: 'cover'
    },
    details: {
        // backgroundColor:'red',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left' 
    },
    rating: {
        marginTop: 50,
        alignSelf: 'flex-start' ,
        width: 80,
        height: 20,
        // padding:10
    },
    contentContainer: {
        paddingHorizontal: 10
    }
});

export default HomFlashPhoto;
