import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const { width } = Dimensions.get('window');
  const starSize = width / 27;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="star" size={starSize} color="#f1c40f" />
      ))}
      {[...Array(halfStars)].map((_, i) => (
        <Icon key={`half-${i}`} name="star-half" size={starSize} color="#f1c40f" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} name="star-outline" size={starSize} color="#f1c40f" />
      ))}
      {/* <Text style={{ marginLeft: 5 }}>{rating.toFixed(1)}</Text> */}
    </View>
  );
};

export default StarRating;
