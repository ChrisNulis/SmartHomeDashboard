import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scenes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Scenes</Text>
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
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: -20,
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
  },
});

export default Scenes;