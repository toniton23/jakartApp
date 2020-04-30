import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {back} from '../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={back} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </View>
  );
};

const BackButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};
export default BackButton;
