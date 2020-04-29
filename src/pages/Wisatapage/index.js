import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
} from '../../Components';
import {
  colors,
  Taman1,
  Taman2,
  Taman3,
  Museum2,
  Museum,
  Museum3,
  pantai,
  pantai2,
  pantai3,
} from '../../Utils';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from '../../Utils';

const Wisata = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView showVerticalScrollIndicator={false}>
          <ScrollView
            horizontal
            style={{marginTop: 15}}
            showHorizontalScrollIndicator={false}>
            <View style={styles.wrapper.card}>
              <Image source={Taman1} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={Taman2} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={Taman3} style={styles.wrapper.image} />
            </View>
          </ScrollView>
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>TAMAN</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.wrapper.card}>
              <Image source={Museum} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={Museum2} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={Museum3} style={styles.wrapper.image} />
            </View>
          </ScrollView>
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>MUSEUM</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.wrapper.card}>
              <Image source={pantai} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={pantai2} style={styles.wrapper.image} />
            </View>
            <View style={styles.wrapper.card}>
              <Image source={pantai3} style={styles.wrapper.image} />
            </View>
          </ScrollView>
          <View style={styles.wrapper.wrappertext}>
            <Text style={styles.wrapper.text}>PANTAI</Text>
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
    text: {fontSize: 25, fontWeight: 'bold'},
    wrappertext: {justifyContent: 'center', alignItems: 'center'},
  },
};
export default Wisata;
