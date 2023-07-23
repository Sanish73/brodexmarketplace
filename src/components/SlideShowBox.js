import { View, Text } from 'native-base';
import React, { useEffect, useState, useRef } from 'react';
import Slideshow from 'react-native-slideshow';
import { useSelector } from 'react-redux';

const SlideshowTest = () => {
  const homePageProducts = useSelector(state => state.homeScreenProductsReducer);
  const [position, setPosition] = useState(0); // Initialize position with 0 for the first slide
  const [isManualSlide, setIsManualSlide] = useState(false); // Flag to track manual slides
  const slideshowRef = useRef(null);

  const dataSource = homePageProducts.homePageProducts?.slider?.original || [];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualSlide) {
        setPosition(prevPosition => (prevPosition + 1) % dataSource.length); // Use modulus operator to loop the slides
      }
    }, 3000); // Adjust the interval as needed for the slide transition

    return () => clearInterval(interval);
  }, [dataSource, isManualSlide]);

  // Function to handle manual slide changes
  const handleManualSlide = newPosition => {
    setIsManualSlide(true);
    setPosition(newPosition);
    setTimeout(() => {
      setIsManualSlide(false);
    }, 500); // Wait for 500ms before enabling automatic slide changes again
  };

  return (
    <View bgColor={'red.100'} m={2} style={{ borderRadius: 8, overflow: 'hidden' }}>
      <Slideshow
        ref={slideshowRef}
        dataSource={dataSource}
        position={position}
        onPositionChanged={handleManualSlide} // Use the manual slide handler
        height={140}
        width={200}
      />
      {/* You can use homePageProducts here */}
    </View>
  );
};

export default SlideshowTest;
