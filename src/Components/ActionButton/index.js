import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../Button';

const ActionButton = ({title, onPress}) => {
  return (
    <View style={{flexDirection: 'row', height: 60, width: '100%'}}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default ActionButton;
