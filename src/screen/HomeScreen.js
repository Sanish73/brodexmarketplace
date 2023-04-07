import React from 'react';
import {Text,Box, VStack, Center ,HStack ,Button ,Heading ,useColorMode } from 'native-base';
import { View, StyleSheet ,Alert ,ScrollView ,FlatList ,Image ,TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';
import Icon   from 'react-native-vector-icons/Ionicons';


const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 19.99,
  }
  ,
  {
    id: 2,
    name: 'Product 2',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 19.99,
  }
  ,
  {
    id: 2,
    name: 'Product 2',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 19.99,
  }
  ,
  {
    id: 2,
    name: 'Product 2',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 19.99,
  }
  ,
  {
    id: 2,
    name: 'Product 2',
    image: 'https://wallpaperaccess.com/full/317501.jpg',
    price: 19.99,
  }
  // Add more products here
];

export function HomeScreen(){
  const renderProduct = (product) => (
    <TouchableOpacity style={styles.product} key={product.id}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {products.slice(0, 5).map((product) => renderProduct(product))}
      </View>
      <View style={styles.row}>
        {products.slice(5, 10).map((product) => renderProduct(product))}
      </View>
    </View>
  );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    product: {
      flex: 1,
      marginHorizontal: 5,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      width: 150,
      height: 200,
    },
    image: {
      flex: 1,
      width: '100%',
      height: 100,
      resizeMode: 'contain',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 10,
    },
    price: {
      fontSize: 14,
      color: '#888',
    },
  });

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     // alignItems: 'center',
  //     justifyContent: 'space-between',
  //     paddingHorizontal: 20,
  //     backgroundColor:'red'
  //   },
  //   menu: {
  //     width: 40,
  //     height: 40,
  //     backgroundColor: 'grey',
  //     borderRadius: 20,
  //   },
  //   profile: {
  //     width: 40,
  //     height: 40,
  //     alignItems:'center',
  //     backgroundColor: 'grey',
  //     borderRadius: 20,
  //   },
  //   text: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //   },
  // });