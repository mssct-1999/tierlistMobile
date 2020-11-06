import * as React from 'react';
import { StyleSheet ,Button, View, Text, Image, ScrollView } from 'react-native';
import HomePage from './Components/HomePage'

export default function App() {
  return (
    <ScrollView style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.logo}
            source={require('./assets/tierlist-min-logo.png')}/>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <HomePage/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex:1,
    backgroundColor: "#0F0F20",
  },  
  headerWrapper: {
    flex:1,
    justifyContent:'center',
    backgroundColor: "#0F0F20",
    justifyContent:'center',
    alignItems:'center'
  },
  imageWrapper: {
    flex: 1,
    width: 150,
    height:150,
    resizeMode:'contain',
    marginTop: 20
  },  
  logo: {
    flex:1,
    width:null,
    height:null,
    resizeMode:'contain'
  },  
  contentWrapper: {
    flex: 6,
    padding: 20
  }
});