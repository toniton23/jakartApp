import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, krl} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Krl = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Transportasi')} />
            <Text style={styles.wrapper.textancol}>KRL</Text>
          </View>
          <Image source={krl} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Kereta Rel Listrik (disingkat KRL) merupakan kereta rel yang
            bergerak dengan sistem propulsi motor listrik. Di Indonesia, kereta
            rel listrik terutama ditemukan di kawasan Jabotabek, dan merupakan
            kereta yang melayani para komuter (lihat KRL Jabotabek). Kereta rel
            listrik berbeda dengan kereta listrik. Di Hindia Belanda, kereta rel
            listrik pertama kali dipergunakan untuk menghubungkan Batavia dengan
            Jatinegara atau Meester Cornelis pada tahun 1925. Pada waktu itu
            digunakan rangkaian kereta rel listrik sebanyak 2 kereta, yang bisa
            disambung menjadi 4 kereta, yang dibuat oleh Werkspoor dan Heemaf
            Hengelo. Pada tahun 1960-an kereta api dengan tenaga listrik sempat
            tidak digunakan selama beberapa lama karena kondisi mesin lokomotif
            dan kereta yang tidak memadai lagi. Pada tahun 1976, PJKA mulai
            mendatangkan sejumlah kereta rel listrik dari Jepang. Kereta rel
            listrik yang kini digunakan di Indonesia dibuat pada tahun 1976,
            1978, 1983, 1984, 1986, 1987, 1994, 1996, 1997, 1998, 1999, 2000 dan
            2001. Pada saat ini juga digunakan sejumlah kereta rel listrik yang
            merupakan hibah (hadiah) dari Pemerintah Kota Tokyo, dan sejumlah
            kereta yang dibeli bekas dari Jepang.
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
    textancol: {fontSize: 30, fontWeight: 'bold', marginLeft: 120},
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
export default Krl;
