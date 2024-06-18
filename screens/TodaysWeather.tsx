import TodaysWeatherData from '@/components/today/TodaysWeatherData'
import { WeatherData } from '@/utils/types';
import React from 'react'
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get("window");

type Props = {
  weatherData: WeatherData
}


const TodaysWeather = ({weatherData}: Props) => {

  return (
    <ImageBackground
      source={require('../assets/images/cloudimage1.png')}
      style={styles.background}
    >

    <TodaysWeatherData weather={weatherData} />
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default TodaysWeather