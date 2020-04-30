import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, Museum3} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Muslay = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>MUSUEM LAYANG-LAYANG</Text>
          </View>
          <Image source={Museum3} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Museum Layang-Layang adalah sebuah museum yang terletak di Jl. H.
            Kamang No. 38, Pondok Labu, Jakarta Selatan. Museum ini merupakan
            museum layang-layang pertama di Indonesia. Jumlah koleksi
            layang-layang di museum ini berjumlah 600, tetapi jumlah tersebut
            terus bertambah seiring datangnya koleksi-koleksi baru dari para
            pelayang daerah dan luar negeri maupun layang-layang yang dibuat
            sendiri oleh karyawan museum. Museum Layang-Layang buka setiap hari
            mulai pukul 09.00-16.00 WIB. Hari libur nasional Museum
            Layang-layang tutup.
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
    textancol: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
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
export default Muslay;
