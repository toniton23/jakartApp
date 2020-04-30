import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, mrt} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Mrt = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Transportasi')} />
            <Text style={styles.wrapper.textancol}>MRT</Text>
          </View>
          <Image source={mrt} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            MRT Jakarta, singkatan dari Moda Raya Terpadu Jakarta (bahasa
            Inggris: Jakarta Mass Rapid Transit), adalah sebuah sistem
            transportasi transit cepat menggunakan kereta rel listrik di
            Jakarta. Proses pembangunan telah dimulai pada tanggal 10 Oktober
            2014 dan diresmikan pada 24 Maret 2019.[1] Layanan MRT ini diberi
            nama "Ratangga". Kata ratangga merupakan kata bahasa Jawa Kuno yang
            berarti "kendaraan beroda" atau "kereta".[2] Operator layanan ini,
            PT MRT Jakarta, merupakan badan usaha milik daerah yang modalnya
            dimiliki Pemerintah Provinsi DKI Jakarta.
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
    textancol: {fontSize: 30, fontWeight: 'bold', marginLeft: 100},
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
export default Mrt;
