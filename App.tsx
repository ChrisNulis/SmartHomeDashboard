import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header/Header';
import Weather from './src/components/Weather/Weather';
import Scenes from './src/components/Scenes/Scenes';
import Devices from './src/components/Devices/Devices';
import Cards from './src/components/Cards/Cards';
import { devices } from './src/dataMockUp';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Weather />
        <Scenes />
        <Devices />
        <Cards devices={devices} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;