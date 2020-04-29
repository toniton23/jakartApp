import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  touch: {
    backgroundColor: '#95c8bf',
    borderRadius: 25,
    paddingVertical: 13,
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    textalign: 'center',
  },
  text: {fontWeight: 'bold', fontSize: 15},
};
export default Button;
