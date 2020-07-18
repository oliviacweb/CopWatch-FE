import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Components/Home/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App!</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
