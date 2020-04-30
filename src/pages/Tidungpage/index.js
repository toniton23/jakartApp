import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, pantai3} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Tidung = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>PULAU TIDUNG</Text>
          </View>
          <Image source={pantai3} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Masih di Kepulauan Seribu, Pulau Tidung adalah paduan pasir pantai
            putih dan laut tenang yang cocok untuk Anda yang mencari tempat
            wisata di sekitar Jakarta yang penuh kedamaian. Pulau ini sendiri
            dibagi menjadi dua yaitu Tidung Besar dan Tidung Kecil yang
            dihubungkan dengan sebuah jembatan bernama Jembatan Cinta. Pada
            Pulau Tidung Besar terdapat penduduk dengan jumlah terbanyak di
            antara pulau-pulau yang ada di Kepulauan Seribu. Untuk bisa sampai
            ke pulau ini, Anda harus menempuh perjalanan selama tiga jam dari
            Pelabuhan Muara Angke.
          </Text>
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
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 20,
      marginTop: 10,
    },
    textancol: {fontSize: 30, fontWeight: 'bold', marginLeft: 50},
    image: {width: 370, height: 300, borderRadius: 25, margin: 20},
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
export default Tidung;
