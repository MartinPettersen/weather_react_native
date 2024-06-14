import TomorrowsWeatherData from "@/components/tomorrow/TomorrowsWeatherData";
import React from "react";
import { View, Text, ImageBackground, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


const TomorrowsWeather = ({ weatherData }: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/cloudimage1.png')} // You can also use a local image with require
      style={styles.background}
    >

    <TomorrowsWeatherData weather={weatherData} />
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

export default TomorrowsWeather;
