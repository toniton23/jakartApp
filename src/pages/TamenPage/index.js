import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, Taman1} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const TamanMenteng = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>TAMAN MENTENG</Text>
          </View>
          <Image source={Taman1} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Taman Menteng adalah sebuah taman yang berlokasi di kawasan Menteng,
            Jakarta Pusat. Taman ini dulunya ditempati oleh Stadion Menteng.
            Taman ini berdiri di atas lahan seluas 30 hektar, dan memiliki
            koleksi 30 spesies tanaman yang berbeda. Taman Menteng juga memiliki
            beragam fasilitas pendukung seperti taman bermain untuk anak-anak
            serta lapangan futsal dan basket. Uniknya, di taman ini terdapat
            pula 44 sumur resapan untuk membantu penyerapan air hujan ke dalam
            tanah.
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
export default TamanMenteng;
