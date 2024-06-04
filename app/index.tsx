import React, { useState } from "react";
import { useGetWeatherData } from "@/hooks/useGetWeatherData";
import { Text, View, StyleSheet } from "react-native";
import Tabs from "@/components/Tabs";

export default function Index() {
  const [loading, error, weatherData] = useGetWeatherData();
  if (weatherData?.length > 0) {
    return <Tabs weatherData={weatherData} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ser ut vinduet</Text>
    </View>
  );
}

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
