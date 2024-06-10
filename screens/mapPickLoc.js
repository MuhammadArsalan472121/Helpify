import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker } from "react-native-maps";

export default function mapPickLocation ({navigation}) {
  const [region, setRegion] = useState({
    latitude: 33.716810,
    longitude: 73.042080,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });
  const pressHandlerContinue = () => {
    navigation.navigate('MakeYourAd');
  };
  

  return (
    
    <MapView
      style={{ flex: 0.8 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}>
      
      <Marker coordinate={{ latitude: 33.716810, longitude: 73.042080 }} />
    
    </MapView>
    
  )
}
const styles = StyleSheet.create({
loginButtonStyle: {
  flex: 0.2,
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