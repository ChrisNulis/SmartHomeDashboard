import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.cityName}>City Name</Text>
        <Text style={styles.temperature}>20°C</Text>
        <View style={styles.humidityContainer}>
          <Image
            source={require('../../../assets/waterDrop.png')}
            style={styles.humidityIcon}
          />
          <Text style={styles.humidityValue}>50%</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require('../../../assets/Cloudy.png')}
          style={styles.cloudIcon}
        />
        <Text style={styles.cityConditionDescription}>overcast clouds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    marginLeft: -10,
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'left',
    marginLeft: -30,
    marginTop: 35,
  },
  cityName: {
    color: 'white',
    fontSize: 18,
  },
  cityInfo: {
    color: 'white',
    fontSize: 16,
  },
  temperature: {
    color: 'white',
    fontSize: 60,
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  humidityIcon: {
    width: 25,
    height: 25,
  },
  humidityValue: {
    color: 'white',
    fontSize: 16,
  },
  cloudIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginLeft: 30,
  },
  cityConditionDescription: {
    color: 'white',
    fontSize: 16,
  },
});

export default Weather;
