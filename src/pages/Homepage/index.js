import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  WisataButton,
  HomeButton,
  BantuanButton,
  TransportasiButton,
} from '../../Components';
import {colors, BannerHome} from '../../Utils';
import {People, Luas, Gubernur} from '../../Utils';

const Home = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <Image source={BannerHome} style={{height: 300, width: '100%'}} />
        <View style={styles.wrapper.wrappercard}>
          <View style={styles.wrapper.penduduk}>
            <View>
              <Image source={People} style={styles.wrapper.iconPenduduk} />
            </View>
            <View style={styles.wrapper.card1}>
              <Text style={styles.wrapper.text1card1}>
                Total Penduduk Jakarta
              </Text>
              <Text style={styles.wrapper.text2card1}>10.557.810 Jiwa</Text>
            </View>
          </View>
          <View style={styles.wrapper.card2}>
            <Image source={Luas} style={styles.wrapper.iconPenduduk} />
            <View style={styles.wrapper.wrappercard}>
              <Text style={styles.wrapper.text1card1}>Luas Jakarta</Text>
              <Text style={styles.wrapper.text2card1}>7.659,02 km2</Text>
            </View>
          </View>
          <View style={styles.wrapper.card2}>
            <Image source={Gubernur} style={styles.wrapper.iconPenduduk} />
            <View style={styles.wrapper.wrappercard}>
              <Text style={styles.wrapper.text1card1}>Gubernur</Text>
              <Text style={styles.wrapper.text2card1}>Anis Baswedan</Text>
            </View>
          </View>
        </View>
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
            handleGoTo('Transportasi');
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
    imageHeader: {width: '100%', height: 300},
    penduduk: {
      width: '80%',
      height: 60,
      backgroundColor: '#19a1db',
      marginHorizontal: 40,
      borderRadius: 25,
      marginTop: 30,
      flexDirection: 'row',
    },
    iconPenduduk: {
      height: 40,
      width: 40,
      marginVertical: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    wrappercard: {flexDirection: 'column'},
    card1: {flexDirection: 'column'},
    text1card1: {fontWeight: 'bold', marginTop: 10, color: 'white'},
    text2card1: {fontWeight: 'bold', color: 'white'},
    card2: {
      widht: '80%',
      height: 60,
      backgroundColor: '#19a1db',
      marginHorizontal: 40,
      borderRadius: 25,
      marginTop: 30,
      flexDirection: 'row',
    },
  },
};
export default Home;
