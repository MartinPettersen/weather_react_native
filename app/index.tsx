import React, { useState } from "react";
import { useGetWeatherData } from "@/hooks/useGetWeatherData";
import {ActivityIndicator, Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Tabs from "@/components/Tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator()


export default function Index() {
  const [ weatherData] = useGetWeatherData();
  if (weatherData?.length > 0) {
    return <Tabs weatherData={weatherData} />;
  }

  return (
    <ImageBackground
      source={require('../assets/images/cloudimage1.png')} // You can also use a local image with require
      style={styles.background}
    >

    <View style={styles.container}>
      <Text style={styles.text}>Ser ut vinduet</Text>
      <ActivityIndicator size={"large"} color={"orange"} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
