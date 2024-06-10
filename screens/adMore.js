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

//style={{flexDirection: 'row', justifyContent: 'space-around', padding:10}}
const adMore = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>More</Text>
        </View>

        <View style={{margin: 20}}>
          <TouchableOpacity>
            <View style={styles.adFields}>
              <View>
                <Image
                  source={require('../assets/more.png')}
                  style={styles.imageIcon}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.textStyle}>More ITEMS !</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.adFields}>
              <View>
                <Image
                  source={require('../assets/more.png')}
                  style={styles.imageIcon}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.textStyle}>More ITEMS !</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.adFields}>
              <View>
                <Image
                  source={require('../assets/more.png')}
                  style={styles.imageIcon}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.textStyle}>More ITEMS !</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.adFields}>
              <View>
                <Image
                  source={require('../assets/more.png')}
                  style={styles.imageIcon}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.textStyle}>More ITEMS !</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.adFields}>
              <View>
                <Image
                  source={require('../assets/more.png')}
                  style={styles.imageIcon}></Image>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.textStyle}>More ITEMS !</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    color: '#444',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  imageIcon: {
    height: 30,
    width: 40,
  },
  adFields: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default adMore;
