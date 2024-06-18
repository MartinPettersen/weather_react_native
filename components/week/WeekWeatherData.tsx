import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import WeekDay from "./WeekDay";
import { WeatherByHour } from "@/utils/types";

type Props = {
  weather: WeatherByHour[]
}

const WeekWeatherData = ({ weather }: Props) => {


  const nextSevenDays = [];

    const today = new Date();
    for (let i = 1; i < 8; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const isoFormatNextDay = nextDay.toISOString();
      nextSevenDays.push(isoFormatNextDay);
    }

  return (
    <View style={styles.container}>
      {nextSevenDays.length > 0 ? (
      <ScrollView contentContainerStyle={styles.scrollView}>
        {nextSevenDays.map((day:string, index:number) => (
            <WeekDay key={index} weather={weather} weekday={day} />
            
        ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  headline: {
    color: "orange",
    fontSize: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  displayCard: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
  scrollView: {
    alignItems: "center",
  },
});

export default WeekWeatherData;
