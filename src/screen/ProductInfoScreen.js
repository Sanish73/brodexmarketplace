import React, { useState, useEffect } from 'react';
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
import { COLOURS, Items } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export function ProductInfoScreen({ route }) {
  const navigation = useNavigation();
  const {
    category,
    id,
    productName,
    productPrice,
    description,
    isOff,
    productImage,
    isAvailable,
    productImageList,
  } = route.params;

  const { width } = Dimensions.get('window');
  const [scrollX, setScrollX] = useState(new Animated.Value(0));
  const renderProduct = ({item , index}) => {
    return (
      <View style={{ width, height: 250 }}>
        <Image
          source={item}
          resizeMode="cover"
          style={{ flex: 1, width: undefined, height: undefined }}
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
            {/* <TouchableOpacity onPress={() => navigation.goBack('Home')}>
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
            </TouchableOpacity> */}
          </View>
          <FlatList
            data={productImageList ||  []}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              {
                useNativeDriver: false,
              },
            )}
          />
        <View
  style={{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  }}>
  {productImageList
    ? productImageList.map((data, index) => {
        let opacity = scrollX.interpolate({
          inputRange: [
            (index - 1) * Dimensions.get('window').width,
            index * Dimensions.get('window').width,
            (index + 1) * Dimensions.get('window').width,
          ],
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={{
              width: '16%',
              height: 2.4,
              backgroundColor: COLOURS.black,
              opacity,
              marginHorizontal: 4,
              borderRadius: 100,
            }}></Animated.View>
        );
      })
    : null}
</View>
        </View>
      </ScrollView>
    </View>
  );
}
