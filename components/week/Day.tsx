import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    headline: string,
    average: number,
    downpour: number
}

const Day = ({headline, average, downpour}: Props) => {
  return (
    <View style={styles.displayCard}>
      <Text style={styles.text}>{headline}</Text>
      <Text
        style={styles.text}
      >{`Gjennomsnitts Temperatur: ${average} grader`}</Text>
      <Text style={styles.text}>{`nedbør: ${downpour}`}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    text: {
      color: "white",
      fontSize: 20,
    },
    headline: {
      color: "orange",
      fontSize: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    displayCard: {
      padding: 16,
      flex: 1,
  
      justifyContent: "center",
      alignItems: "center",
  
      flexDirection: "column",
    },
  });
  
export default Day;
