import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function adDescription ({navigation}) {
  const pressHandlerApply=()=>{
    navigation.navigate('SearchAd');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.Ad}>
          <ImageBackground
            source={require('../assets/searchAd.png')}
            style={{width: 'auto', height: '100%'}}
          />
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require('../assets/arrowW.png')}
                style={styles.imageIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailStyle}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>this is title</Text>
          <View
            style={{
              paddingTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '25%',
              }}>
              <Image
                source={require('../assets/startRating.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../assets/startRating.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../assets/startRating.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../assets/startRating.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../assets/startRatingH.png')}
                style={{height: 15, width: 15}}
              />
            </View>

            <Text style={styles.ratingText}>4 Star Ratings</Text>
          </View>
          <View>
            <View
              style={{
                margin: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#7C7D7E',
              }}>
              <Text style={{fontWeight: 'bold', color: '#4A4B4D'}}>
                Description
              </Text>
              <Text style={styles.infoTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                leo non mollis id cursus. Eu euismod faucibus in leo malesuada
              </Text>
            </View>
            <View
              style={{
                margin: 10,
              }}>
              <Text style={{fontWeight: 'bold', color: '#4A4B4D'}}>
                What I am Expecting?
              </Text>
              <Text style={styles.infoTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                leo
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#4A4B4D'}}>
              You Need To Pay:
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#FC6011'}}>
              750 kr
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={styles.pImageIcon}
                source={require('../assets/profileIcon.png')}
              />
            </View>

            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#636363'}}>
                Jhon Deo
              </Text>
              <Text style={{color: '#7e7e7e', fontWeight: 'bold'}}>
                jhondoe123@email.com
              </Text>
            </View>
          </View>

          <View style={styles.loginButtonStyle}>
            <TouchableOpacity onPress={pressHandlerApply}>
              <Text style={styles.buttonTextStyle}>Apply</Text>
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
    backgroundColor: '#7e7e7e',
  },
  header: {
    flex: 0.2,
    position: 'absolute',
    top: 10,
    left: 20,
    right: 0,
    bottom: 0,
  },
  headerText: {
    color: '#444',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  imageIcon: {
    height: 20,
    width: 10,
  },
  detailStyle: {
    padding: 10,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    height: '100%',
  },

  textInputStyle: {
    color: '#3A3A3A',
    height: 50,
    width: '80%',
  },
  Ad: {
    height: 200,
  },
  starFixPos: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 0,
    bottom: 0,
  },
  tileFixPos: {
    position: 'absolute',
    top: 120,
    left: 20,
    right: 0,
    bottom: 0,
    color: '#fff',
    fontWeight: 'bold',
  },
  starRatingFixPos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: 140,
    left: 20,
    right: 0,
    bottom: 0,
    width: '30%',
    height: 30,
  },
  ratingText: {
    color: '#FC6011',
    fontSize: 12,
  },
  infoTextStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 18,
    color: '#7C7D7E',
  },
  pImageIcon: {
    height: 100,
    width: 100,
  },
  loginButtonStyle: {
    flex: 0.3,
    width: '100%',
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
