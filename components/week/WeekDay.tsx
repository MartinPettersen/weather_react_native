import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Day from "./Day";
import { BlurView } from 'expo-blur'; 

type Props = {
  weekday: string;
  weather: any;
};

type WeatherData = {
    temperatures: number[],
    totalTemp: number,
    downpour: number[],
    totalDownpour: number,
  };

const WeekDay = ({ weekday, weather }: Props) => {
  const tomorrowsWeatherData = [];

  const morningData: WeatherData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const midDayData: WeatherData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const afternoonData: WeatherData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const eveningData: WeatherData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  

  for (let i = 0; i < weather.length; i++) {
    const time = weather[i].time.slice(0, 10);

    if (time == weekday.slice(0, 10)) {
      const hour = weather[i].time.slice(11, 13);

      if (
        weather[i].data.instant &&
        weather[i].data.instant.details &&
        weather[i].data.next_6_hours &&
        weather[i].data.next_6_hours.details
      ) {
        if (parseInt(hour) < 9) {
          morningData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          morningData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          morningData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

        } else if (parseInt(hour) < 13) {
          midDayData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          midDayData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          midDayData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

        } else if (parseInt(hour) < 19) {
          afternoonData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          afternoonData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          afternoonData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

        } else {
          eveningData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          eveningData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          eveningData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

        }
      } else {
        console.log("missing data");
      }
      tomorrowsWeatherData.push(weather[i]);
    }
  }

  return (
    <BlurView intensity={70} style={styles.container}>

      <Text
        style={styles.headline}
      >{`${weekday.slice(8, 10)}.${weekday.slice(5, 7)}.${weekday.slice(0, 4)}`}</Text>
      <Day headline="Morgen: 00-08" average={Math.round(morningData.totalTemp / morningData.temperatures.length)} downpour={morningData.totalDownpour} />
      <Day headline="Formidag: 08-12" average={Math.round(midDayData.totalTemp / midDayData.temperatures.length)} downpour={midDayData.totalDownpour} />
      <Day headline="Ettermidag: 12-18" average={Math.round(afternoonData.totalTemp / afternoonData.temperatures.length)} downpour={afternoonData.totalDownpour} />
      <Day headline="Kveld: 18-24" average={Math.round(eveningData.totalTemp / eveningData.temperatures.length)} downpour={eveningData.totalDownpour} />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  displayCard: {
    padding: 16,
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 10,
    padding: 4,
    position: "relative",
    overflow: "hidden",
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 25,
  },
  headline: {
    color: "orange",
    fontSize: 40,
    marginTop: 10,
  },
});

export default WeekDay;
