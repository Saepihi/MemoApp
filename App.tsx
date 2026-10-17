import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

const App = (): React.JSX.Element =>  {
  return (
    <View style={styles.container}>
      <Hello style={{ fontSize: 30 }}>World</Hello>
      <Hello bang style={{ color: 'red' }}>World</Hello>
      <Text>Open up App.tsx to! start working! on your! app!</Text>
      <StatusBar style="auto" />
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

export default App
