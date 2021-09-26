import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxObjetModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjetModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    borderWidth: 5,
    padding: 20,
    width: 250,
    margin: 20,
  },
});
