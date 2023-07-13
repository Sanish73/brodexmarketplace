import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Alert, View} from 'react-native';
import {Box, Text, VStack} from "native-base";
import {useDispatch, useSelector} from 'react-redux';
import {productListing} from '../Redux/actions/brandAction';
export function CategoryLeftList({ categories, APIcat, onSelectCategory,APIcatToPreSelect }) {
    const [selectedParentData, setParentData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(APIcatToPreSelect);
  
    const handleCategorySelectAndClickEvent = (category) => {
      setSelectedCategory(category);
      onSelectCategory(category);
    };
  
    return (
      <VStack space={2} alignSelf={'flex-start'}>

      {/* <Text>{JSON.stringify(APIcatToPreSelect , null , 1)}</Text> */}

        {(APIcat || []).map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => handleCategorySelectAndClickEvent(category)}
          >
            {selectedCategory?.id === category.id ? (
              <Box
                style={{
                  minHeight: 46,
                  borderTopRightRadius: 7,
                  borderBottomRightRadius: 7,
                  elevation: 3,
                  backgroundColor: '#F57F17',
                }}
              >
                <Text p={1} bold color={'white'}>
                  {category.name}
                </Text>
              </Box>
            ) : (
              <Box
                style={{
                  minHeight: 45,
                  borderTopRightRadius: 7,
                  borderBottomRightRadius: 7,
                  elevation: 3,
                  backgroundColor: '#EBEBEB',
                }}
              >
                <Text p={1} color={'gray.500'}>
                  {category.name}
                </Text>
              </Box>
            )}
          </TouchableOpacity>
        ))}
      </VStack>
    );
  }
  