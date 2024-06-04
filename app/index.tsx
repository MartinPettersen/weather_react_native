import React, {useState} from 'react'
import { useGetWeatherData } from "@/hooks/useGetWeatherData";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {


  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'black'
    },
    text:{
      color: 'white',
      fontSize: 30
    }
  })

  const [loading, error, weather] = useGetWeatherData();


  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Weather App</Text>
    </View>
  );
}
