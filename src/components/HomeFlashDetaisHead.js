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
        image:require('../../assets/images/c08000131_1750x1285.webp'),
        text: 'HP Laptop ',
        rating: 3
    }, {
        id: 3,
        image: require('../../assets/images/29032316800754916423eae35ddce.webp'),
        text: 'Exfoliate',
        rating: 2
    }, {
        id: 2,
        image: require('../../assets/images/01042316803342086427dd809514b.webp'),
        text: 'Loreal',
        rating: 3
    }, {
        id: 4,
        image: require('../../assets/images/2503231679712494641e60eed7930.webp'),
        text: 'CaraVe',
        rating: 1
    }, {
        id: 5,
        image: require('../../assets/images/2503231679718037641e769564a22.webp'),
        text: 'Tripode',
        rating: 3
    }, {
        id: 5,
        image: require('../../assets/images/1004231681129687643400d71e70b.webp'),
        text: 'T500 Watch',
        rating: 3
    }
];

const ITEM_WIDTH = (Dimensions.get('window').width - 207) / 2;
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
        resizeMode: 'cover',
        borderRadius:5
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
