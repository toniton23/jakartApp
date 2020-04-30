import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {pantai, Museum} from '../../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper.card}>
          <Image source={Museum} style={styles.wrapper.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MusgajButton = ({onPress}) => {
  return (
    <View>
      <Button onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    card: {
      height: 200,
      width: 250,
      margin: 20,
      backgroundColor: 'yellow',
      borderRadius: 25,
      flexWrap: 'wrap',
      position: 'relative',
    },
    image: {
      height: 200,
      width: 250,
      borderRadius: 25,
      resizeMode: 'cover',
      position: 'absolute',
    },
  },
};
export default MusgajButton;
