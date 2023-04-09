import {
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';


const CARD_WIDTH = sizes.width -200;
const CARD_HEIGHT = 170;
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
                        spacing:50,
                        // justifyContent:'space-between',
                    marginLeft: spacing.s,
                    // marginRight: index === list.length -10
                    //     ? spacing.l
                    //     : 0
                }}>
                    <View style={[styles.card, shadow.dark]}>
                      
                        <View style={styles.imageBox}>
                            <Image source={item.image} style={styles.image}/>
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                            {/* <Text style={styles.location}>{item.location}</Text> */}
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
        // backgroundColor:'red'
    },
    
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 9,
        overflow: 'hidden',
        // backgroundColor:'green'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        // backgroundColor:'blue'
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
        // backgroundColor:'orange'
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