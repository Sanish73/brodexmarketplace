import React from 'react';
import {View} from 'react-native';
// import {colors, shadow} from '../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteButton = ({active, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 20,
        }
     
      
      ]}>
      {/* <Icon icon={active ? 'heart' : 'heart'} size={24} />
       */}
       <Icon
                name={'md-chevron-forward-outline'}
                style={{
                color: 'green',
                fontSize: 20
            }}></Icon>

    </View>
  );
};

export default FavoriteButton;