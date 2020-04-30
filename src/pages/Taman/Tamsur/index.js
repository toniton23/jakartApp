import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Tamsur = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>TAMAN SUROPATI</Text>
          </View>
          <Image source={pantai} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Ancol adalah suatu kata yang berasal dari bahasa Sunda. Menurut
            Kamus Sunda-Inggris A Dictionary of the Sunda Language of Java yang
            diterbitkan oleh Jonathan Rigg di Batavia pada tahun 1862. kata
            ancol mengandung arti tanah semenanjung. Orang Sunda dulu
            menggunakan kata ancol untuk menamai kawasan di sebelah timur kota
            tua Jakarta. Naskah Kuno Sunda Bujangga Manik menyebutkan wilayah
            ini saat dia menempuh perjalanan dari pelabuhan Sunda Kalapa ke
            Pajajaran. Letak strategis kawasan ancol rupanya sudah dimanfaatkan
            jauh sebelum kedatangan VOC, yaitu pada masa agama Islam mulai
            tersebar di daerah pesisir Kerajaan Sunda. Dalam naskah koleksi
            Perpustakaan Nasional koropak nomor 406, yaitu naskah Carita
            Parahiyangan, Ancol disebut-sebut sebagai salah satu lokasi medan
            perang disamping Kalapa, Tanjung, Wahanten dan tempat-tempat lainnya
            pada masa pemerintahan Prabu Surawisesa yang masih memeluk agama
            Hindu . Kata ancol juga digunakan untuk menamai suatu kawasan
            kelurahan di Bandung. Penggunaan kata ancol kemudian berkembang
            untuk menamai apartemen dan lain-lain.
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
export default Tamsur;
