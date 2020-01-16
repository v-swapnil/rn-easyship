import React from 'react';
import { View, StyleSheet } from 'react-native';

import RootApp from './src';

declare var global: { HermesInternal: null | {} };

const App = () => {
  return (
    <View style={styles.container}>
      <RootApp title="Root Page" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
