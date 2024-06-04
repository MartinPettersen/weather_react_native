import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodaysWeatherData from "./today/TodaysWeatherData";

const Tabs = ({ weatherData }: any) => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const isoFormatNextDay = nextDay.toISOString();

  //console.log(weatherData[0].time)

  const weatherTime = weatherData[0].time.slice(0, 10);
  const tommorow = isoFormatNextDay.slice(0, 10);
  const todayFormated = today.toISOString().slice(0, 10);

  console.log(weatherData[0].data);
  const weatherDataToday = weatherData[0].data;
  /*
    for ( let i = 0; i < weatherData.length; i++) {

      
      const time = weatherData[i].time.slice(0, 10)

    }
    */
  if (weatherTime == tommorow) {
    console.log(`${weatherTime} | ${tommorow}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabs</Text>
      <TodaysWeatherData weather={weatherDataToday} />
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
    fontSize: 30,
  },
});

export default Tabs;
