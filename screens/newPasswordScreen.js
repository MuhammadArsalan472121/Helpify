import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function TermsNConditions ({navigation}) {
  const pressHandlerSend = () => {
    navigation.navigate('Profile');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>New Password</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.infoTextStyle}>
            Please enter your new password
          </Text>
        </View>

        <View style={styles.fields}>
          <TextInput
            style={styles.textInputStyle}
            secureTextEntry={true}
            placeholder={'New Password'}
            placeholderTextColor={'#bbb'}
          />
          <TextInput
            style={styles.textInputStyle}
            secureTextEntry={true}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#bbb'}
          />
        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerSend}>
            <Text style={styles.buttonTextStyle}>Send</Text>
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
    justifyContent: 'center',
    height: 100,
  },
  headerText: {
    textAlign: 'center',
    color: '#545454',
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  infoTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    fontSize: 18,
    color: '#7E7E7E',
  },
  fields: {
    flex: 0.6,
    margin: 20,
    padding: 15,
  },
  textInputStyle: {
    color: '#3A3A3A',
    marginTop: 30,
    height: 50,
    fontSize: 18,
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
    fontSize: 20,
  },
});
