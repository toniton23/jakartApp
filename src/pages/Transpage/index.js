import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, mrt, trans} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Trans = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Transportasi')} />
            <Text style={styles.wrapper.textancol}>TRANS JAKARTA</Text>
          </View>
          <Image source={trans} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Transjakarta adalah sistem transportasi Bus Rapid Transit (BRT)
            pertama di Asia Tenggara dan Selatan, yang beroperasi sejak tahun
            2004 di Jakarta, Indonesia. Sistem ini didesain berdasarkan sistem
            TransMilenio yang sukses di Bogota, Kolombia. Transjakarta dirancang
            sebagai moda transportasi massal pendukung aktivitas ibu kota yang
            sangat padat. Transjakarta merupakan sistem BRT dengan jalur
            lintasan terpanjang di dunia (230,9 km), serta memiliki 243 stasiun
            BRT (sebelumnya disebut halte) yang tersebar dalam 13 koridor
            (jalur), yang awalnya beroperasi dari 05.00 - 22.00 WIB, dan kini
            beroperasi 24 jam di sebagian koridornya.[1] Transjakarta
            dioperasikan oleh PT Transportasi Jakarta. Jumlah tenaga kerja yang
            terlibat dalam operasional Transjakarta (Pramudi, petugas bus,
            petugas stasiun BRT, dan petugas kebersihan) sekitar 6.000 orang.[2]
            Jumlah rata-rata harian pengguna Transjakarta diprediksikan sekitar
            350.000 orang. Sedangkan pada tahun 2012, Jumlah pengguna
            Transjakarta mencapai 109.983.609 orang.[3]
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
export default Trans;
