import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  WisataButton,
  HomeButton,
  BantuanButton,
  TransportasiButton,
  KotuButton,
  KrlButton,
  MrtButton,
  TransButton,
} from '../../Components';
import {colors, krl, mrt, trans} from '../../Utils';
import {ScrollView} from 'react-native-gesture-handler';

const Transportasi = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <KrlButton
            onPress={() => {
              handleGoTo('Krl');
            }}
          />
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>KRL</Text>
          </View>
          <MrtButton
            onPress={() => {
              handleGoTo('Mrt');
            }}
          />
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>MRT</Text>
          </View>
          <TransButton
            onPress={() => {
              handleGoTo('Trans');
            }}
          />
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>TRANS JAKARTA</Text>
          </View>
        </ScrollView>
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
    body: {height: 600, width: '100%', backgroundColor: colors.default},
    bottom: {
      width: '100%',
      height: 60,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
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
    text: {fontSize: 25, fontWeight: 'bold'},
    wrappertext: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  },
};
export default Transportasi;
