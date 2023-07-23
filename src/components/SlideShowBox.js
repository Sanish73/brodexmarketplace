import { View , Text} from 'native-base';
import React, { useEffect, useState } from 'react';
import Slideshow from 'react-native-slideshow';
import { useSelector } from 'react-redux';

const SlideshowTest = () => {

  
  const homePageProducts = useSelector(state => state.homeScreenProductsReducer);
  const [position, setPosition] = useState(1);
  // const dataSource = [
  //   {
  //     title: 'Title 1',
  //     caption: 'Caption 1',
  //     url: 'http://placeimg.com/640/480/any'
  //   },
  //   {
  //     title: 'Title 2',
  //     caption: 'Caption 2',
  //     url: 'http://placeimg.com/640/480/any'
  //   },
  //   {
  //     title: 'Title 3',
  //     caption: 'Caption 3',
  //     url: 'http://placeimg.com/640/480/any'
  //   }
  // ];

  const dataSource = homePageProducts.homePageProducts?.slider?.original || []; // Use optional chaining

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition === dataSource.length ? 0 : prevPosition + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <View
      bgColor={'red.100'}
      m={2}
      style={{
        borderRadius: 8,
        overflow: 'hidden'
      }}>
      <Slideshow
        dataSource={dataSource}
        position={position}
        onPositionChanged={setPosition}
        height={140}
        width={200}
      />
      {/* You can use homePageProducts here */}
      
                     {/* <Text>{JSON.stringify(homePageProducts.homePageProducts.slider.original, null , 4)}</Text> */}

    </View>
  );
};

export default SlideshowTest;
