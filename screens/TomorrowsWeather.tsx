import TomorrowsWeatherData from "@/components/tomorrow/TomorrowsWeatherData";
import React from "react";
import { View, Text } from "react-native";

const TomorrowsWeather = ({ weatherData }: any) => {
  return (
    <TomorrowsWeatherData weather={weatherData} />
  );
};

export default TomorrowsWeather;
