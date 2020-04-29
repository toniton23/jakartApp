import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Transportasi} from '../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Transportasi} style={{width: 30, height: 30}} />
        <Text style={{fontWeight: 'bold'}}>TRANSPORTASI</Text>
      </TouchableOpacity>
    </View>
  );
};

const TransportasiButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

export default TransportasiButton;
