import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DisplayShortTerm from "./DisplayShortTerm";
import { BlurView } from "expo-blur";

const TodaysWeatherData = ({ weather }: any) => {
  const temperature = weather.instant?.details.air_temperature;
  const wind = weather.instant?.details.wind_speed;

  const precipitationAmountOneHour =
    weather.next_1_hours.details.precipitation_amount;
  const symbolCodeOneHour = weather.next_1_hours.summary.symbol_code;

  const precipitationAmountSixHours =
    weather.next_6_hours.details.precipitation_amount;
  const symbolCodeSixHours = weather.next_6_hours.summary.symbol_code;

  const precipitationAmountTwelveHours =
    weather.next_12_hours.details?.precipitation_amount;
  const symbolCodeTwelveHours = weather.next_12_hours.summary?.symbol_code;
  return (
    <View style={styles.container}>
      <BlurView style={styles.displayCard}>
        <Text style={styles.headline}>Været I Dag:</Text>
        <Text style={styles.text}>{`Temperatur: ${temperature}`}</Text>
        <Text style={styles.text}>{`vind: ${wind}`}</Text>
      </BlurView>

      <DisplayShortTerm headline="Om 1 time:" precipitationAmount={precipitationAmountOneHour} symbolCode={symbolCodeOneHour} />

      <DisplayShortTerm headline="Om 6 timer:" precipitationAmount={precipitationAmountSixHours} symbolCode={symbolCodeSixHours} />

      <DisplayShortTerm headline="Om 12 timer:" precipitationAmount={precipitationAmountTwelveHours} symbolCode={symbolCodeTwelveHours} />
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
    borderRadius: 25,
    overflow: "hidden",

  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 25,
    margin: 10,
    padding: 4,
    position: "relative",
    overflow: "hidden",
  }
});

export default TodaysWeatherData;
