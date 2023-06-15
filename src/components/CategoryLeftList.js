import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Alert, Box, Text, VStack} from "native-base";
import { demo } from '../Redux';
import { useDispatch ,useSelector} from 'react-redux';
import { clickButton } from '../Redux';

export function CategoryLeftList({categories, parentData, onSelectCategory}) {
  
    // const names = parentData.map(item => item.name); console.log(names);
    const clicked = useSelector(state => state.clicked);
    const dispatch = useDispatch();


    const [selectedParentData,
        setPatentData] = useState([]);

    const handleparentData = (parentDatas) => {
        setPatentData(parentDatas);
      }

    console.log(JSON.stringify(selectedParentData, null, 2));

    const [selectedCategory,
        setSelectedCategory] = useState(null);

  

    const handleCategorySelectAndClickEvent = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
        dispatch(clickButton());
      
        // console.log("clicked");

    };
 

    return (
        <VStack space={2} alignSelf={'flex-start'}>

            {parentData.map((parentDatas) => (
                <TouchableOpacity
                    key={parentDatas.id}
                    onPress={() => handleparentData(parentDatas)}>
              

                    <Box
                        style={{
                        minHeight: 46,
                        borderTopRightRadius: 7,
                        borderBottomRightRadius: 7,
                        elevation: 3,
                        backgroundColor: '#F57F17'
                    }}>
                        <Text p={1} bold color={'white'}>
                            {parentDatas.name}
                        </Text>
                    </Box>
                </TouchableOpacity>
            ))}

            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategorySelectAndClickEvent(category)}>

                    {selectedCategory
                        ?.id === category.id
                            ? <Box
                                    style={{
                                    minHeight: 46,
                                    borderTopRightRadius: 7,
                                    borderBottomRightRadius: 7,
                                    elevation: 3,
                                    backgroundColor: '#F57F17'
                                }}>
                                    <Text p={1} bold color={'white'}>{category.categoryname}
                                    </Text>
                                </Box>
                            : <Box
                                style={{
                                minHeight: 45,
                                borderTopRightRadius: 7,
                                borderBottomRightRadius: 7,
                                elevation: 3,
                                backgroundColor: '#EBEBEB'
                            }}>
                                <Text p={1} color={'gray.500'}>{category.categoryname}
                                </Text>
                            </Box>}
                </TouchableOpacity>
            ))}

        </VStack>
    )
}