import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Home, Wisata} from '../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Wisata} style={{width: 30, height: 30}} />
        <Text style={{fontWeight: 'bold'}}>WISATA</Text>
      </TouchableOpacity>
    </View>
  );
};

const WisataButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default WisataButton;
