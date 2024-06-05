import WeekWeatherData from "@/components/week/WeekWeatherData";
import React from "react";
import { View, Text } from "react-native";

const WeekWeather = ({ weatherData }: any) => {
  return (
      <WeekWeatherData weather={weatherData} />
  );
};

export default WeekWeather;
