import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Devices = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'yellow' }]}>
      <Text style={styles.title}>This is Devices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Devices;