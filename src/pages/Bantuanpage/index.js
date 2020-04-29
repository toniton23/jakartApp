import React from 'react';
import {View, Text} from 'react-native';
import {
  WisataButton,
  HomeButton,
  BantuanButton,
  TransportasiButton,
} from '../../Components';
import {colors} from '../../Utils';

const Bantuan = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <Text>Bantuan screen</Text>
        <View></View>
      </View>
      <View style={styles.wrapper.bottom}>
        <HomeButton
          onPress={() => {
            handleGoTo('Home');
          }}
        />
        <WisataButton
          onPress={() => {
            handleGoTo('Wisata');
          }}
        />
        <TransportasiButton
          onPress={() => {
            handleGoTo('Transportasi');
          }}
        />
        <BantuanButton
          onPress={() => {
            handleGoTo('Bantuan');
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    body: {height: 600, width: '100%', backgroundColor: 'blue'},
    bottom: {
      width: '100%',
      height: 60,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
  },
};
export default Bantuan;
