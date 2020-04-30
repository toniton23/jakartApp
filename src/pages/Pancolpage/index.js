import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  HomeButton,
  WisataButton,
  TransportasiButton,
  BantuanButton,
  BackButton,
} from '../../Components';
import {colors, pantai, pantai2} from '../../Utils';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Pancol = ({navigation}) => {
  const handleGoTo = (screen) => navigation.navigate(screen);
  return (
    <View>
      <View style={styles.wrapper.body}>
        <ScrollView>
          <View style={styles.wrapper.header}>
            <BackButton onPress={() => handleGoTo('Wisata')} />
            <Text style={styles.wrapper.textancol}>PULAU BIDADARI</Text>
          </View>
          <Image source={pantai2} style={styles.wrapper.image} />
          <Text style={{fontSize: 30, marginHorizontal: 20}}>
            Pulau Bidadari adalah salah satu dari pulau yang ada di Kepulauan
            Seribu. Untuk mencapai tempat wisata pantai di sekitar Jakarta ini,
            bisa melalui dermaga Marina di Taman Impian Jaya Ancol dengan
            menaiki speed boat selama sekitar 30 menit. Yang khas dari pulau ini
            adalah pasir putihnya dan laut biru nan jernih. Di Pulau Bidadari
            terdapat cottage darat dan juga cottage terapung yang sering dipilih
            oleh para wisatawan sebagai tempat berakhir pekan. Selain itu,
            pemandangan yang indah dan asri juga cocok untuk melakukan berbagai
            jenis olahraga, seperti misalnya bersepeda, olahraga air, atau hanya
            sekedar bersantai menikmati birunya langit dan berjemur di bawah
            matahari.
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
export default Pancol;
