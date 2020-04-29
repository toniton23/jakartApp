import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Home} from '../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Home} style={{width: 30, height: 30}} />
        <Text style={{fontWeight: 'bold'}}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default HomeButton;
