import React from 'react';
import {View, Text} from 'react-native';

const Card = () => {
  return (
    <View>
      <View
        style={{
          height: 200,
          width: 250,
          margin: 20,
          backgroundColor: 'yellow',
          borderRadius: 25,
          flexWrap: 'wrap',
          position: 'relative',
        }}></View>
    </View>
  );
};

export default Card;
