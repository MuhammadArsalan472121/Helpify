import React from 'react';
import { Component } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

export default class Splash extends Component{
  constructor(props)
  {
    super(props);
    setTimeout(()=>{
      this.props.navigation.navigate('Welcome');
    },3000 );
  }
  render()
  {
    return (
      <View style={Styles.container}>
        <ScrollView style={{width: '100%', height: '100%'}}>
          <View style={{alignItems: 'center'}}>
            <ImageBackground
              style={Styles.imgBgStyle}
              source={require('../assets/LogoBackground.png')}>
              <Image
                style={Styles.imageStyle}
                source={require('../assets/Logo.png')}
              />
            </ImageBackground>
          </View> 
        </ScrollView>
      </View>
    );
  }
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgBgStyle: {
    marginTop: 50,
    paddingTop: 140,
    alignItems: 'center',
    height: 400,
    width: 300,
  },
  imageStyle: {
    height: 240,
    width: 240,
  },
});

