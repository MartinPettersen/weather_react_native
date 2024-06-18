import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HourCard from "./HourCard";
import { WeatherByHour } from "@/utils/types";

type Props = {
  weather: WeatherByHour[];
}

const TomorrowsWeatherData = ({ weather }: Props) => {

  console.log("the weather in TomorrowsWeatherData")
  console.log(weather)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      {weather.map((weatherItem, index: number) => 
        <HourCard weather={weatherItem} key={index} />
    )}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  headline: {
    color: "white",
    fontSize: 30,
  },
  displayCard: {
    padding: 16,
    justifyContent: "center",
  },
  scrollView: {
    alignItems: "center",
  },
});

export default TomorrowsWeatherData;
