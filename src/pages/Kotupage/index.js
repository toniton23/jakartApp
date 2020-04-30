import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, Museum2} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Kotu = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>KOTA TUA</Text>
          </View>
          <Image source={Museum2} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Kota Tua Jakarta, juga dikenal dengan sebutan Batavia Lama (Oud
            Batavia), adalah sebuah wilayah kecil di Jakarta, Indonesia. Wilayah
            khusus ini memiliki luas 1,3 kilometer persegi melintasi Jakarta
            Utara dan Jakarta Barat (Pinangsia, Taman Sari dan Roa Malaka).
            Dijuluki "Permata Asia" dan "Ratu dari Timur" pada abad ke-16 oleh
            pelayar Eropa, Jakarta Lama dianggap sebagai pusat perdagangan untuk
            benua Asia karena lokasinya yang strategis dan sumber daya melimpah.
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
    textancol: {fontSize: 30, fontWeight: 'bold', marginLeft: 80},
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
export default Kotu;
