import {
    Box,
    HStack,
  } from 'native-base';
  import React, { useState, useRef, useEffect } from 'react';
  import Slideshow from 'react-native-slideshow';
  
  function SliderShowBox() {
    const [position, setPosition] = useState(0);
    const slideshowRef = useRef(null);
  
    const handlePositionChanged = (position) => {
      setPosition(position);
      slideshowRef.current.setPosition(position);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        const newPosition = position === 2 ? 0 : position + 1;
        setPosition(newPosition);
        slideshowRef.current.setPosition(newPosition);
      }, 20000);
  
      return () => clearInterval(interval);
    }, [position]);
  
    return (
      <HStack paddingBottom={5} paddingTop={2}>
        <Box borderRadius={8} overflow="hidden">
          <Slideshow
            ref={slideshowRef}
            dataSource={[
              {
                title: 'Title 1',
                caption: 'Caption 1',
                url: 'http://placeimg.com/320/240/any',
              },
              {
                title: 'Title 2',
                caption: 'Caption 2',
                url: 'http://placeimg.com/320/240/any',
              },
              {
                title: 'Title 3',
                caption: 'Caption 3',
                url: 'http://placeimg.com/320/240/any',
              },
            ]}
            height={100}
            width={200}
            position={position}
            onPositionChanged={handlePositionChanged}
            indicatorSize={8}
            containerStyle={{ borderRadius: 8 }}
            arrowSize={0}
          />
        </Box>
      </HStack>
    );
  }
  
  export default SliderShowBox;
  