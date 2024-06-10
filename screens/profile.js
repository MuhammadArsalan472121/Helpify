import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Profile ({navigation}) {
  const pressHandlerSave=()=>{
    navigation.navigate('TermsNConditions');
  };
  const pressHandlerMore=()=>{
    navigation.push('More');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
      
        <View style={styles.imageIcon}>
          <Image source={require('../assets/profileIcon.png')} style={{height:100, width:100}}/>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 10}}>
              <View style={{margin: 3}}>
                <Image
                  source={require('../assets/Edit.png')}
                  style={{height: 14, width: 14}}></Image>
              </View>

              <Text style={{color: '#FC6011', fontWeight: 'bold'}}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#636363'}}>
            Hi there Jhon!
          </Text>

          <TouchableOpacity>
            <Text style={{color: '#7e7e7e', fontWeight: 'bold'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fields}>
          <View style={styles.fieldStyle}>
            <Text style={styles.textStyle}>Name</Text>
            <TextInput style={styles.textInputStyle}>Jhon Deo</TextInput>
          </View>
          <View style={styles.fieldStyle}>
            <Text style={styles.textStyle}>Email</Text>
            <TextInput style={styles.textInputStyle}>
              JhonDeo@email.com
            </TextInput>
          </View>
          <View style={styles.fieldStyle}>
            <Text style={styles.textStyle}>Password</Text>
            <TextInput
              style={styles.textInputStyle}
              secureTextEntry={true}
              placeholder={'******'}
              placeholderTextColor={'#3A3A3A'}></TextInput>
          </View>
        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerSave}>
            <Text style={styles.buttonTextStyle}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={pressHandlerMore}>
            <Text style={styles.buttonMoreTextStyle}>More</Text>
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
    color: '#7e7e7e',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  imageIcon: {
    flex: 0.2,
    marginTop:5,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
  },
  fields: {
    flex: 0.6,
    padding: 15,
  },
  fieldStyle: {
    borderRadius: 50,
    paddingLeft: 20,
    marginTop: 10,
    backgroundColor: '#E0E0E0',
  },
  textStyle: {
    color: '#7e7e7e',
    fontWeight: 'bold',
    fontSize: 12,
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
    marginTop: 10,
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

