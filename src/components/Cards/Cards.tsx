import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card/Card';

const Cards: React.FC<CardsProps> = ({ devices }) => {
  return (
    <View style={styles.container}>
      {devices.map((device, index) => (
        <View key={index} style={[styles.cardWrapper, index % 3 !== 2 && styles.cardSpacing]}>
          <Card {...device} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '32%',
    marginBottom: 15,
  },
  cardSpacing: {
    marginRight: '2%',
  },
});

export default Cards;