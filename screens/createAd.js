import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function createAd({navigation}) {
  const pressHandlerMAD = () => {
    navigation.navigate('MakeYourAd');
  };

  const pressHandlerCleaning = () => {
    navigation.push('MakeYourAd');
  };

  const pressHandlerHAG = () => {
    navigation.navigate('MakeYourAd');
  };

  const pressHandlerElectrician = () => {
    navigation.push('MakeYourAd');
  };

  const pressHandlerHammer = () => {
    navigation.navigate('MakeYourAd');
  };

  const pressHandlerPainter = () => {
    navigation.push('MakeYourAd');
  };

  const pressHandlerBarber = () => {
    navigation.navigate('MakeYourAd');
  };

  const pressHandlerOthers = () => {
    navigation.push('AdMore');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create Ad</Text>
        </View>

        <View style={{marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <TouchableOpacity onPress={pressHandlerMAD}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/mad.png')}
                    style={styles.imageWIcon}></Image>
                  <Text style={styles.textStyle}>Move and Deliver</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandlerCleaning}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/cleaning.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Cleaning</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandlerHAG}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/hag.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Home and Garden</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <TouchableOpacity onPress={pressHandlerElectrician}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/elect.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Electrician</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandlerHammer}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/hammer.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Hammer</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandlerPainter}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/painter.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Painter</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <TouchableOpacity onPress={pressHandlerBarber}>
              <View style={styles.adFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/barber.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Barber</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandlerOthers}>
              <View style={styles.adOtFields}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/others.png')}
                    style={styles.imageHIcon}></Image>
                  <Text style={styles.textStyle}>Others</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    color: '#444',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  imageWIcon: {
    height: 30,
    width: 40,
  },
  imageHIcon: {
    height: 30,
    width: 30,
  },
  adFields: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    width: 100,
    backgroundColor: '#fff',
  },
  adOtFields: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    width: 200,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
