import * as React from 'react';
import { StyleSheet ,Button, View, Text, Image } from 'react-native';
import HomePage from './Components/HomePage'

export default function App() {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <Text>Header!</Text>
        <Image
          style={styles.logo}
          source={require('./assets/tierlist-min-logo.png')}/>
      </View>
      <View style={styles.contentWrapper}>
        <HomePage/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex:1,
    backgroundColor: "yellow"
  },  
  headerWrapper: {
    flex:1,
    justifyContent:'center',
    backgroundColor: "red",
    justifyContent:'center',
    alignItems:'center'
  },
  logo: {
    
  },  
  contentWrapper: {
    flex: 6,
    backgroundColor: "green"
  }
});