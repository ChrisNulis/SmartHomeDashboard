import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scenes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Scenes</Text>
      {/* Placeholder for "+" icon */}
      <Text style={styles.plusIcon}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  plusIcon: {
    color: 'white',
    fontSize: 20,
  },
});

export default Scenes;