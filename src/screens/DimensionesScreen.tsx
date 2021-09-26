import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { height, width } = Dimensions.get('window');

const DimensionesScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text>
        W: {width}, H: {height}{' '}
      </Text>
    </View>
  );
};

export default DimensionesScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
    left: 10,
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
