import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HourCard = ({ weather }: any) => {
  //console.log(weather);
  const temperature = weather.data.instant?.details.air_temperature;
  const wind = weather.data.instant?.details.wind_speed;
  const precipitationAmount =
    weather.data.next_1_hours.details.precipitation_amount;
  const symbolCode = weather.data.next_1_hours.summary.symbol_code;
  const time = weather.time.slice(11, 13);
  return (
    <View style={styles.displayCard}>
      <Text style={styles.headline}>{`${time}`}</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/metno/weathericons/main/weather/png/${symbolCode}.png`,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.text}>
        {`temp: ${temperature}\u00B0C \nvind: ${wind}m/s \nnedbør:${precipitationAmount}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
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
});

export default HourCard;
