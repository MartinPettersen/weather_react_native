import WeekWeatherData from "@/components/week/WeekWeatherData";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";

const { width, height } = Dimensions.get("window");


const WeekWeather = ({ weatherData }: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/cloudimage1.png')} // You can also use a local image with require
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
