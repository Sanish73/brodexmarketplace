import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import FavoriteButton from './FavoriteButton';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const HomFlashPhoto = ({list}) => {
    return (
        <FlatList
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i.id}
            renderItem={({item, index}) => {
            return (
                <TouchableOpacity
                    style={{
                    marginLeft: spacing.l,
                    marginRight: index === list.length - 1
                        ? spacing.l
                        : 0
                }}>
                    <View style={[styles.card, shadow.dark]}>
                        {/* <FavoriteButton
                     
                            styles={{
                            position: 'absolute',
                            top: spacing.m,
                            right: spacing.m,
                            zIndex: 1
                        }}/> */}
                        <View style={styles.imageBox}>
                            <Image source={item.image} style={styles.image}/>
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }}/>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
        backgroundColor:'red'
    },
    
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 9,
        overflow: 'hidden',
        backgroundColor:'green'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover'
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16
    },
    title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white
    },
    location: {
        fontSize: sizes.h3,
        color: colors.white
    }
});

export default HomFlashPhoto;