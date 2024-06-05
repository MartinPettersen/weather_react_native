import React, { useState } from "react";
import { useGetWeatherData } from "@/hooks/useGetWeatherData";
import {ActivityIndicator, Text, View, StyleSheet } from "react-native";
import Tabs from "@/components/Tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()


export default function Index() {
  const [ weatherData] = useGetWeatherData();
  if (weatherData?.length > 0) {
    return <Tabs weatherData={weatherData} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ser ut vinduet</Text>
      <ActivityIndicator size={"large"} color={"orange"} />
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
