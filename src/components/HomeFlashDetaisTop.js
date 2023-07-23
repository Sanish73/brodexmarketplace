import React, { useState, useEffect } from 'react';
import { Text, HStack, VStack, Avatar, Box, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HomeFlashDetaisTop = () => {
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    // Function to update the countdown every second
    const updateCountdown = () => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      } else {
        // Reset the countdown to 24 hours when it reaches 0
        setCountdown(24 * 60 * 60);
      }
    };

    // Start the interval when the component mounts
    const interval = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [countdown]); // Add countdown as a dependency to useEffect to properly reset the interval

  // Helper function to format seconds into HH:mm:ss format
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <HStack alignItems={'center'} px={5} py={3} justifyContent={'space-between'} w={'100%'}>
      <Box w={'50%'}>
        <Text bold fontSize={17}>
          Flash Details
        </Text>
      </Box>

      <HStack w={'50%'} alignItems={'center'} justifyContent={'flex-end'} space={4}>
        <Text bold>Ends In</Text>
        <Button w={100} bgColor={'#ffa94d'} rounded={8}>
          {formatTime(countdown)}
        </Button>
      </HStack>
    </HStack>
  );
};
