import { BlurView } from 'expo-blur'
import React from 'react'
import {Image, StyleSheet, View, Text } from 'react-native'

type Props = {
    headline: string
    precipitationAmount: string
    symbolCode: string,
}

const DisplayShortTerm = ({headline, precipitationAmount, symbolCode}: Props) => {
    const precipitationAmountLocal = precipitationAmount !== undefined && precipitationAmount !== null ? precipitationAmount : "?";
    

  return (
    <BlurView intensity={40} style={styles.blurContainer}>

    <View style={styles.displayCard}>
    <Text style={styles.text}>{headline}</Text>
    <Text
      style={styles.text}
    >{`Nedbørsmengde: ${precipitationAmountLocal}`}</Text>
    <Image
      source={{
        uri: `https://raw.githubusercontent.com/metno/weathericons/main/weather/png/${symbolCode}.png`,
      }}
      style={{ width: 100, height: 100 }}
    />
  </View>
  </BlurView>

  )
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
export default DisplayShortTerm