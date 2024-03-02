import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scenes = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
      <Text style={styles.title}>This is Scenes</Text>
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

export default Scenes;