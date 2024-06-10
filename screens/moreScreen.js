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

export default function more ({navigation}) {
  const pressHandlerHelpifier=()=>{
    navigation.navigate('Profile');
  };
  const pressHandlerPayment=()=>{
    navigation.push('Payment');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>More</Text>
        </View>

        <TouchableOpacity onPress={pressHandlerPayment}>
          <View style={styles.fields}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/pay.png')}
                style={styles.imageIcon}></Image>

              <Text style={styles.textStyle}>Payment Details</Text>
            </View>

            <Image
              source={require('../assets/arrow.png')}
              style={{height: 15, width: 10}}></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.fields}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/wallet.png')}
                style={styles.imageIcon}></Image>

              <Text style={styles.textStyle}>Balance Enquiry</Text>
            </View>

            <Image
              source={require('../assets/arrow.png')}
              style={{height: 15, width: 10}}></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.fields}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/lang.png')}
                style={styles.imageIcon}></Image>

              <Text style={styles.textStyle}>Language Setting</Text>
            </View>

            <Image
              source={require('../assets/arrow.png')}
              style={{height: 15, width: 10}}></Image>
          </View>
        </TouchableOpacity>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerHelpifier}>
            <Text style={styles.buttonTextStyle}>Become Helpifier</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imageIcon: {
    height: 50,
    width: 50,
  },
  fields: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    margin: 10,
    height: 70,
    backgroundColor: '#E0E0E0',
  },
  textStyle: {
    color: '#7e7e7e',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
  },
  textInputStyle: {
    color: '#3A3A3A',
    height: 40,
    fontWeight: 'bold',
  },
  loginButtonStyle: {
    flex: 0.3,
    width: '100%',
    padding: 15,
  },
  buttonTextStyle: {
    backgroundColor: '#FC6011',
    color: '#ffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold',
    height: 50,
    fontSize: 18,
  },
  buttonMoreTextStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FC6011',
    color: '#FC6011',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold',
    height: 50,
    fontSize: 18,
  },
});
