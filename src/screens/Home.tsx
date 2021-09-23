import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

const Home = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTADOR</Text>
      <Text style={styles.title}> {contador} </Text>

      <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#045',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#eee',
  },
});
