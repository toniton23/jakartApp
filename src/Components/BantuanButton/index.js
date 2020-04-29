import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Bantuan} from '../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Bantuan} style={{width: 30, height: 30}} />
        <Text style={{fontWeight: 'bold'}}>BANTUAN</Text>
      </TouchableOpacity>
    </View>
  );
};

const BantuanButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default BantuanButton;
