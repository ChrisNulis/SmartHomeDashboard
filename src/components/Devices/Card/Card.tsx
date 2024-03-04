import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card: React.FC = () => {
  return (
    <View style={[styles.card, { backgroundColor: 'gray' }]}>
      <Text>This is Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;