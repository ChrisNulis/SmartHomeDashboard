import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import Weather from './src/components/Weather/Weather';
import Scenes from './src/components/Scenes/Scenes';
import Devices from './src/components/Devices/Devices';
import Cards from './src/components/Cards/Cards';
import { devices } from './src/dataMockUp';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <Weather />
          <Scenes />
          <Devices />
          <Cards devices={devices} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  contentContainer: {
    marginTop: 20,
  },
});

export default App;