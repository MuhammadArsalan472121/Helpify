import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native'
import CreditCardForm, { Button} from 'rn-credit-card'


export default function paymentDetails ({navigation}) {
  const pressHandlerSend = () => {
    navigation.navigate('More');
  };
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  function onSubmit() {
    //Alert.alert('Success: ' + JSON.stringify(model, null, 2))
    navigation.navigate('More');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>

        <View style={{alignItems: 'center'}}>
          <Text
            style={styles.infoTextStyle}>
            Customize your Payment Method
          </Text>
        </View>

        <View style={styles.fields}>
       


    <FormProvider {...formMethods}>
 
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            LottieView={LottieView}
            horizontalStart
            overrides={{
              labelText: {
                marginTop: 16,
              },
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <Button
            style={styles.button}
            title={'CONFIRM PAYMENT'}
            onPress={handleSubmit(onSubmit)}
          />
        )}
  
    </FormProvider>

        </View>

        <View style={styles.loginButtonStyle}>
          <TouchableOpacity onPress={pressHandlerSend}>
            <Text style={styles.buttonTextStyle}>+ Add another Credit/Debit Card</Text>
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
    textAlign:'center',
    color: '#545454',
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  infoTextStyle:{
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor:'#7e7e7e',
    textAlign:'center',
    padding:20,
    fontSize: 18,
    color: '#7E7E7E',
  },
  fields: {
    flex: 1,
    height:'100%',
    backgroundColor:'#D6D6D6',
  },
  textInputStyle: {
    color: '#3A3A3A',
    height: 50,
    fontSize:18,
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
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
    }
});

