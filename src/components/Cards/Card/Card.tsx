import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  status: boolean;
  switch: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ status, switch: switchName, location }) => {
  const iconSource = status
    ? require('../../../../assets/onLightbulb.png')
    : require('../../../../assets/offLightbulb.png');

  const statusText = status ? 'On' : 'Off';

  return (
    <View style={styles.container}>
      <View style={styles.bulbStatus}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.statusText}>{statusText}</Text>
      </View>
      <View style={styles.switchAndLocation}>
        <Text style={styles.switchText}>{switchName}</Text>
        <Text numberOfLines={1} style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulbStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 35,
    height: 35,
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  switchAndLocation: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  switchText: {
    color: 'white',
    fontSize: 12,
  },
  locationText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Card;
