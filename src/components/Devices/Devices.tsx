import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Devices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Devices</Text>
      <View style={styles.iconsContainer}>
        <Image source={require('../../../assets/gear-icon.png')} style={styles.gearIcon} />
        <Text style={styles.plusIcon}>+</Text>
      </View>
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
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: -20,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
  },
  gearIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
});

export default Devices;