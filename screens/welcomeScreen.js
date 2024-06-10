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

export default function Welcome ({navigation}) {
  const pressHandlerLogin = () => {
    navigation.navigate('Login');
    //navigation.push('Login'); works fine with both methods
  };
  const pressHandlerSignup = () => {
    navigation.push('Signup');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View>
          <Image
            source={require('../assets/Subtracted.png')}
            style={styles.logoStyle}
          />
        </View>
        <View style={styles.loginButton}>
          <View style={{flexDirection: 'column', alignContent: 'center'}}>
            <TouchableOpacity onPress={pressHandlerLogin}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandlerSignup}>
              <Text style={styles.cABTextStyle}>Create an Account</Text>
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
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    flex: 0.3,
    width: 'auto',
    height: 380,
    alignItems: 'flex-start',
  },

  loginButton: {
    flex: 0.2,
    width: '100%',
    padding: 20,
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
  cABTextStyle: {
    borderWidth:2,
    borderColor: '#FC6011',
    color: '#FC6011',
    paddingTop: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 50,
    height: 50,
    fontSize: 20,
  },
});
