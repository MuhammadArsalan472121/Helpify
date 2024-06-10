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

export default function Login ({navigation})  {
  const pressHandlerLogin = () => {
    navigation.navigate('Profile');
  };
  const pressHandlerForgot = () => {
    navigation.navigate('ResetPassword');
  };
  const pressHandlerSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.iTextStyle}>
          <Text style={styles.iLoginTextStyle}>Login</Text>
          <Text style={styles.iDetailTextStyle}>Add your details to login</Text>
        </View>

        <View style={styles.inputFieldStyle}>
          <TextInput style={styles.emailStyle} placeholder="Email" placeholderTextColor='#bbb'></TextInput>
          <TextInput
            style={styles.passwordStyle}
            placeholder="Password" placeholderTextColor='#bbb' secureTextEntry={true}></TextInput>
        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerLogin}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={pressHandlerForgot}>
            <Text style={styles.forgotPassTextStyle}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpStyle}>
        <TouchableOpacity onPress={pressHandlerSignup}>
          <Text style={styles.signUpTextStyle}>Don't have an Account? Sign Up</Text>
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
    flex:0.2,
    alignItems:'center',
    padding:20

  },
  iLoginTextStyle:{
    color:'#454545',
    fontWeight:'bold',
    fontSize:30,
    paddingBottom:10,

  },
  iDetailTextStyle:{
    color:'#7E7E7E',
    fontWeight:'bold',

  },
  inputFieldStyle: {
    flex:0.3,
    marginTop:20,
    padding:20,
  },
  emailStyle: {
    fontWeight:'bold',
    marginBottom:5,
    color:'#111',
    borderBottomWidth:1,

  },
  passwordStyle: {
    fontWeight:'bold',
    color:'#111',
    borderBottomWidth:1,
  },
  loginButtonStyle:{
    flex:0.3,
    width:'100%',
    marginTop:20,  
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
  forgotPassTextStyle: {
    color:'#7E7E7E',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    paddingTop:20

  },
  signUpStyle: {
    marginTop:130,
  },
  signUpTextStyle:{
    color:'#FC6011',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
  }
});

