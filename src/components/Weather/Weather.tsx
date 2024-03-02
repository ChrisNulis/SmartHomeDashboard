import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weather = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'salmon' }]}>
      <Text style={styles.title}>This is Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Weather;