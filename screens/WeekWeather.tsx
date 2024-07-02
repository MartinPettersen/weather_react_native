import WeekWeatherData from "@/components/week/WeekWeatherData";
import { WeatherByHour } from "@/utils/types";
import React from "react";
import { Dimensions, StyleSheet, ImageBackground } from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  weatherData: WeatherByHour[]
}

const WeekWeather = ({ weatherData }: Props) => {
  return (
    <ImageBackground
      source={require('../assets/images/cloudimage1.png')}
      style={styles.background}
    >

      <WeekWeatherData weather={weatherData} />
    </ImageBackground>
  );
};


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

export default WeekWeather;
