import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DisplayShortTerm from "./DisplayShortTerm";

const TodaysWeatherData = ({ weather }: any) => {
  console.log(weather.next_12_hours);
  const temperature = weather.instant.details.air_temperature;
  const wind = weather.instant.details.wind_speed;

  const precipitationAmountOneHour =
    weather.next_1_hours.details.precipitation_amount;
  const symbolCodeOneHour = weather.next_1_hours.summary.symbol_code;

  const precipitationAmountSixHours =
    weather.next_6_hours.details.precipitation_amount;
  const symbolCodeSixHours = weather.next_6_hours.summary.symbol_code;

  const precipitationAmountTwelveHours =
    weather.next_12_hours.details.precipitation_amount;
  const symbolCodeTwelveHours = weather.next_12_hours.summary.symbol_code;
  return (
    <View style={styles.container}>
      <View style={styles.displayCard}>
        <Text style={styles.headline}>Været I Dag:</Text>
        <Text style={styles.text}>{`Temperatur: ${temperature}`}</Text>
        <Text style={styles.text}>{`vind: ${wind}`}</Text>
      </View>

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
});

export default TodaysWeatherData;
