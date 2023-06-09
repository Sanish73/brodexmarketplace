import React from 'react';
import {Alert, ScrollView, TouchableOpacity} from 'react-native';
import {
    Text,
    VStack,
    Button,
    HStack,
    Box,
    Image,
    Stack,
    Badge
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

function MyTabButton({Icons, IconsName}) {
    return <Button
    onPress={() => Alert.alert(IconsName)}
        style={{
        height: 41,
        width: 110,
        flexDirection: 'row'
    }}
        borderRadius={14}
        size="sm"
        backgroundColor={'white'}>
        <HStack justifyContent={'center'} alignItems={'center'}>
            <Icon
                name={Icons}
                style={{
                color: 'green',
                fontSize: 20
            }}></Icon>
            <Text style={{
                paddingHorizontal: 3
            }}>
                {IconsName}
            </Text>
        </HStack>
    </Button>

}

export default function MyTab() {
    return <VStack paddingY={1}>
    
            <Box >
                <HStack>

                    <Stack
                        direction={{
                        base: "row"
                    }}
                        space={2}
                        mx={{
                        base: "auto"
                    }}>

                        <MyTabButton Icons={'checkmark-done'} IconsName={'Paid'}/>
                        <MyTabButton Icons={'reload'} IconsName={'Pending'}/>
                        <MyTabButton  Icons ={'close'} IconsName={'Cancelled'}/>
                    </Stack>

                </HStack>
            </Box>
            
        </VStack>
   
}