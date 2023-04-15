import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export function ProductInfoScreen ({route}){
  const navigation = useNavigation();
    const { category ,id, } = route.params;



  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        // await setProduct(Items[index]);
        return;
      }
    }
  };




  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };


  return (
     <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: COLOURS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingLeft: 16,
            }}>
              <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            // showsHorizontalScrollIndicator={false}
            // decelerationRate={0.8}
            // snapToInterval={width}
            // bounces={false}
            // onScroll={Animated.event(
            //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
            //   {useNativeDriver: false},
            // )}
          />
        </View>
        </ScrollView>
        </View>
  )
}

