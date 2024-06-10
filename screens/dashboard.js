import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function Dashboard ({navigation}) {
  const pressHandlerCreateAd=()=>{
    navigation.navigate('CreateAd');
  };
  const pressHandlerHelpifier=()=>{
    navigation.push('SearchAd');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View>
          <ImageBackground
            style={{height: 200, width: '100%'}}
            source={require('../assets/shSubtraction.png')}></ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Image
              style={styles.pImageIcon}
              source={require('../assets/profileIcon.png')}
            />
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#636363'}}>
              Jhon Deo
            </Text>
            <Text style={{color: '#7e7e7e', fontWeight: 'bold'}}>
              jhondoe123@email.com
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity>
            <View style={styles.bFields}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/bal.png')}
                  style={styles.imageIcon}></Image>

                <Text style={styles.bTextStyle}>Balance : 0 </Text>
              </View>
              <Image
                source={require('../assets/oArrow.png')}
                style={{height: 20, width: 20}}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={pressHandlerCreateAd}>
            <View style={styles.caFields}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/crAd.png')}
                  style={styles.imageIcon}></Image>
                <Text style={styles.textStyle}>Create Ad</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={pressHandlerHelpifier}>
            <View style={styles.bhFields}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/bhlpr.png')}
                  style={styles.imageIcon}></Image>
                <Text style={styles.textStyle}>Become Helpifier</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },

  pImageIcon: {
    height: 70,
    width: 70,
  },
  imageIcon: {
    height: 40,
    width: 40,
  },
  bFields: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    margin: 10,
    height: 100,
    backgroundColor: '#fff',
  },
  bTextStyle: {
    color: '#FC6011',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
  },
  caFields: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 150,
    width: 130,
    backgroundColor: '#fff',
  },
  bhFields: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 150,
    width: 130,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#FC6011',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
  
});
