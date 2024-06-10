import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

var radio_props = [
  {label: 'English', value: 0},
  {label: 'Swedish', value: 1},
];


export default function SingUp ({navigation}) {
  const pressHandlerSignup =()=>{
    navigation.navigate('Profile');
  };
  const pressHandlerLogin=()=>{
    navigation.push('Login');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.iTextStyle}>
          <Text style={styles.iLoginTextStyle}>Sign Up</Text>
          <Text style={styles.iDetailTextStyle}>Add your details to sign up</Text>
        </View>

        <View style={styles.inputFieldStyle}>
          <TextInput style={styles.fieldStyle} placeholder="Name" placeholderTextColor='#bbb'></TextInput>
          <TextInput style={styles.fieldStyle} placeholder="Email" placeholderTextColor='#bbb'></TextInput>
          <TextInput
            style={styles.fieldStyle}
            placeholder="Password" placeholderTextColor='#bbb' secureTextEntry={true}></TextInput>
          <TextInput
            style={styles.fieldStyle}
            placeholder="Confirm Password" placeholderTextColor='#bbb' secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.langSettingStyle}>
          <Text style={styles.langTextStyle}>Language Setting</Text>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={'#FC6011'}
            />
          </View>
        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerSignup}>
            <Text style={styles.buttonTextStyle}>Sing Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpStyle}>
          <TouchableOpacity onPress={pressHandlerLogin}>
            <Text style={styles.signUpTextStyle}>
              Already have an Account? Login
            </Text>
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
  },
  iLoginTextStyle: {
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
    padding: 20,
  },
  fieldStyle: {
    fontWeight: 'bold',
    color:'#111'
  },
  langSettingStyle: {
    padding: 20,
  },
  langTextStyle: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 20,
    color: '#7E7E7E',
  },
  loginButtonStyle: {
    flex: 0.3,
    width: '100%',
  },
  buttonTextStyle: {
    backgroundColor: '#FC6011',
    color: '#ffff',
    textAlignVertical: 'center',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold',
    height: 50,
    fontSize: 15,
  },
  signUpStyle: {
    marginTop: 20,
  },
  signUpTextStyle: {
    color: '#FC6011',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
