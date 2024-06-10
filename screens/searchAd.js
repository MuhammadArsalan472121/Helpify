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
  ImageBackground,
} from 'react-native';

export default function searchAd ({navigation}) {
  const pressHandlerTitle1=()=>{
    navigation.navigate('AdDescription');
  };
  const pressHandlerTitle2=()=>{
    navigation.push('AdDescription');
  };
  const pressHandlerTitle3=()=>{
    navigation.navigate('AdDescription');
  };
  const pressHandlerTitle4=()=>{
    navigation.push('AdDescription');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        
        <View style={styles.fields}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={'Search here!'}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/search.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Ad}>
        <TouchableOpacity onPress={pressHandlerTitle1}>
          <ImageBackground
            source={require('../assets/searchAd.png')}
            style={{width: 'auto', height: '100%'}}
          />
          </TouchableOpacity>
          <View
            style={styles.starFixPos}>
            <TouchableOpacity>
            <Image source={require('../assets/starLike.png')} style={{height:30,width:30}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tileFixPos}>This is tile</Text>
          <View style={styles.starRatingFixPos}>
          <TouchableOpacity>
            <Image source={require('../assets/startRating.png')} style={{height:15,width:15}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.ratingText}>4.9</Text>
            </TouchableOpacity>
            <Text style={styles.ratingText}>by Jhon</Text>
          </View>
        </View>
        
        <View style={styles.Ad}>
        <TouchableOpacity onPress={pressHandlerTitle2}>
          <ImageBackground
            source={require('../assets/searchAd.png')}
            style={{width: 'auto', height: '100%'}}
          />
          </TouchableOpacity>
          <View
            style={styles.starFixPos}>
            <TouchableOpacity>
            <Image source={require('../assets/starLike.png')} style={{height:30,width:30}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tileFixPos}>This is tile</Text>
          <View style={styles.starRatingFixPos}>
          <TouchableOpacity>
            <Image source={require('../assets/startRating.png')} style={{height:15,width:15}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.ratingText}>4.9</Text>
            </TouchableOpacity>
            <Text style={styles.ratingText}>by Jhon</Text>
          </View>
        </View>

        <View style={styles.Ad}>
          <TouchableOpacity onPress={pressHandlerTitle3}>
          <ImageBackground
            source={require('../assets/searchAd.png')}
            style={{width: 'auto', height: '100%'}}
          />
          </TouchableOpacity>
          <View
            style={styles.starFixPos}>
            <TouchableOpacity>
            <Image source={require('../assets/starLike.png')} style={{height:30,width:30}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tileFixPos}>This is tile</Text>
          <View style={styles.starRatingFixPos}>
          <TouchableOpacity>
            <Image source={require('../assets/startRating.png')} style={{height:15,width:15}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.ratingText}>4.9</Text>
            </TouchableOpacity>
            <Text style={styles.ratingText}>by Jhon</Text>
          </View>
        </View>

        <View style={styles.Ad}>
          <TouchableOpacity onPress={pressHandlerTitle4}>
          <ImageBackground
            source={require('../assets/searchAd.png')}
            style={{width: 'auto', height: '100%'}}
          />
          </TouchableOpacity>
          <View
            style={styles.starFixPos}>
            <TouchableOpacity>
            <Image source={require('../assets/starLike.png')} style={{height:30,width:30}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tileFixPos}>This is tile</Text>
          <View style={styles.starRatingFixPos}>
          <TouchableOpacity>
            <Image source={require('../assets/startRating.png')} style={{height:15,width:15}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.ratingText}>4.9</Text>
            </TouchableOpacity>
            <Text style={styles.ratingText}>by Jhon</Text>
          </View>
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
    alignItems: 'center',
    margin: 10,
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
  fields: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    margin: 10,
    height: 50,
    backgroundColor: '#E0E0E0',
  },
  textInputStyle: {
    color: '#3A3A3A',
    height: 50,
    width: '80%',
  },
  Ad: {
    borderWidth:1,
    height: 200,
  },
  starFixPos:{
    position: 'absolute',
    top: 10,
    left: 20,
    right: 0,
    bottom: 0,
    height:40,
    width:30,
  },
  tileFixPos:{
    position: 'absolute',
    top: 120,
    left: 20,
    right: 0,
    bottom: 0,
    height:20,
    width:'30%',
    color:'#fff',
    fontWeight:'bold'
  },
  starRatingFixPos:{
    justifyContent:'space-between',
    flexDirection:'row',
    position: 'absolute',
    top: 140,
    left: 20,
    right: 0,
    bottom: 0,
    width:'30%',
    height:30,
  },
  ratingText:{
    color:'#FC6011'
  }
});

