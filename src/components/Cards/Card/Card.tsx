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
      <View style={styles.content}>
        <View style={styles.bulbStatus}>
          <Image source={iconSource} style={styles.icon} />
          <Text style={styles.statusText}>{statusText}</Text>
        </View>
        <Text style={styles.text}>{switchName}</Text>
        <Text style={styles.text}>{location}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulbStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Card;