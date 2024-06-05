import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HourCard from "./HourCard";

const TomorrowsWeatherData = ({ weather }: any) => {
    //console.log(weather[0].time.slice(11,13))
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      {weather.map((weatherItem: any, index: number) => 
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
    backgroundColor: "black",
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
