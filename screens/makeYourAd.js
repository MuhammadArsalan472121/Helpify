import React from 'react';

import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';


export default function makeAd ({navigation}) {
  const pressHandlerContinue =()=>{
    navigation.navigate('ChooseTime');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
     <ScrollView>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Make Your Ad</Text>
        </View>
        <View style={{margin:10,flexDirection:'row', width:'100%'}}>
          <Image source={require('../assets/searchAd.png')} style={{height:80, width:'30%'}}/>
          <Image source={require('../assets/searchAd.png')} style={{height:80, width:'30%'}}/>
          <Image source={require('../assets/searchAd.png')} style={{height:80, width:'30%'}}/>
        </View>
        <View style={{margin:10,flexDirection:'row'}}>
        <Image source={require('../assets/searchAd.png')} style={{height:80, width:'30%'}}/>
          <Image source={require('../assets/searchAd.png')} style={{height:80, width:'30%'}}/>
          <Image source={require('../assets/uploadImage.png')} style={{height:80, width:'30%'}}/>
        </View>

              <TextInput style={styles.infoTextStyle} placeholder={'Title'}/>

            <View style={{margin:10,borderRadius:20,alignItems: 'flex-start', height:100,backgroundColor:'#e7e7E7'}}>
              <TextInput style={styles.infoTextStyle} placeholder={'Description'}/>
            </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerContinue}>
            <Text style={styles.buttonTextStyle}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: 'auto',
    margin:10,
  },
  headerText: {
    textAlign: 'center',
    color: '#545454',
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoTextStyle: {
    fontWeight: 'bold',
    textAlign:'left',
    padding: 30,
    fontSize: 15,
    color: '#B6B7B7',
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
    fontSize: 20,
  },
});
