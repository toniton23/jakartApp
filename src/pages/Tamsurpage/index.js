import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, Taman3} from '../../Utils';
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
          <Image source={Taman3} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Taman Suropati awalnya bernama Burgemeester Bisschopplein adalah
            nama sebuah taman di Jakarta. Pada awalnya nama taman ini diambil
            dari nama wali kota Batavia pertama, G.J. Bisshop 1916–1920. Taman
            ini merupakan pusat kawasan Menteng, berada tepat di antara
            pertemuan tiga jalan utama, yaitu Menteng Boulevard Jalan Teuku
            Umar, Orange Boulevard, Jalan Diponegoro, dan Nassau Boulevard Jalan
            Imam Bonjol. Lapangan yang kini disebut sebagai Taman Suropati ini
            sejak tahun 1920 sudah menggantikan lapangan bundar yang luas dalam
            Rencana Moojen. Taman Suropati, yang disebut-sebut sebagai titik nol
            Republik Indonesia, menjadi taman yang rindang dan sejak beberapa
            tahun yang lalu dihiasi dengan patung-patung karya pematung dari
            negara-negara pendiri Perhimpunan Bangsa-Bangsa Asia Tenggara.
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
    textancol: {fontSize: 30, fontWeight: 'bold', marginLeft: 40},
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
