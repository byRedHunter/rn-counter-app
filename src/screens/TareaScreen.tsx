import React from 'react';
import { StyleSheet, View } from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaAzul}></View>
    </View>
  );
};

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#904588',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#802fc2',
    //alignSelf: 'flex-end',
    top: 100,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    left: 100,
  },
  cajaAzul: {
    //alignSelf: 'flex-start',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#1f8ee9',
  },
});
