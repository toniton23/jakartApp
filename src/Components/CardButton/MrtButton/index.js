import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {pantai, mrt} from '../../../Utils';

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper.card}>
          <Image source={mrt} style={styles.wrapper.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MrtButton = ({onPress}) => {
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
      width: '80%',
      marginTop: 20,
      backgroundColor: 'yellow',
      borderRadius: 25,
      flexWrap: 'wrap',
      position: 'relative',
      marginHorizontal: 40,
    },
    image: {
      height: 200,
      width: 330,
      borderRadius: 25,
      resizeMode: 'cover',
      position: 'absolute',
    },
  },
};
export default MrtButton;
