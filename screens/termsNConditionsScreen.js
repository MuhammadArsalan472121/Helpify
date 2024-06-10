import React from 'react';

import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function TermsNConditions ({navigation}) {
  const pressHandlerContinue=()=>{
navigation.navigate('Dashboard');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Terms & Conditions</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <ScrollView style={styles.scrollView}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.infoTextStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row'}}>
          <CheckBox  style={{checkedColor:'#FC6011'}} />

          <Text style={styles.terms}>I have read term and conditions</Text>
        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerContinue}>
            <Text style={styles.buttonTextStyle}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  headerText: {
    textAlign: 'center',
    color: '#545454',
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  scrollView: {
    width: '90%',
    height: '70%',
  },
  infoTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    fontSize: 18,
    color: '#7E7E7E',
  },
  terms: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    color: '#7E7E7E',
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

