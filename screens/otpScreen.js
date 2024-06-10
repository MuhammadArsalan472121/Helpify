import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Login  ({navigation})  {
  const pressHandlerVerify = () => {
    navigation.navigate('NewPassword');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.iTextStyle}>
          <Text style={styles.iVerifyTextStyle}>Verify</Text>
          <Text style={styles.iDetailTextStyle}>
            Check Your Email and Type Code here
          </Text>
        </View>

        <View style={styles.inputFieldStyle}>
          <TextInput style={styles.otpStyle} ></TextInput>
          <TextInput style={styles.otpStyle} ></TextInput>
          <TextInput style={styles.otpStyle} ></TextInput>
          <TextInput style={styles.otpStyle} ></TextInput>
        </View>

        <View style={styles.verifyButtonStyle}>
          <TouchableOpacity onPress={pressHandlerVerify}>
            <Text style={styles.buttonTextStyle}>Verify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  iTextStyle: {
    flex: 0.2,
    alignItems: 'center',
    padding: 20,
  },
  iVerifyTextStyle: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
  },
  iDetailTextStyle: {
    color: '#7E7E7E',
    fontWeight: 'bold',
  },
  inputFieldStyle: {
    flex: 0.3,
    flexDirection:'row',
    width:350,
    height:100,
    justifyContent:'space-between',
    marginTop: 20,
    padding: 20,
  },
  otpStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
    width:50,
    fontSize:20,
    height:50,
    backgroundColor:"#E0E0E0",
    borderRadius:25,
    textAlign:'center',
  },
  verifyButtonStyle: {
    flex: 0.3,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    backgroundColor: '#FC6011',
    color: '#ffff',
    paddingTop: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 50,
    height: 50,
    fontSize: 20,
  },
});