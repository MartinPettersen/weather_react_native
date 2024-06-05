import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodaysWeatherData from "./today/TodaysWeatherData";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodaysWeather from "@/screens/TodaysWeather";
import TomorrowsWeather from "@/screens/TomorrowsWeather";
import WeekWeather from "@/screens/WeekWeather";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weatherData }: any) => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const isoFormatNextDay = nextDay.toISOString();

  //console.log(weatherData[0].time)

  // const weatherTime = weatherData[0].time.slice(0, 10);
  const tommorow = isoFormatNextDay.slice(0, 10);
  const todayFormated = today.toISOString().slice(0, 10);

  //console.log(weatherData[0].data);
  const weatherDataToday = weatherData[0].data;

    const tomorrowsWeatherData: any = []

  for (let i = 0; i < weatherData.length; i++) {
    const time = weatherData[i].time.slice(0, 10);

    if (time == tommorow) {
      //console.log(`${time} | ${tommorow}`);
      //console.log(weatherData[i])
      tomorrowsWeatherData.push(weatherData[i])
    }
  }

  //if (weatherTime == tommorow) {
  //  console.log(`${weatherTime} | ${tommorow}`);
  //}

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "lightgrey",
        tabBarStyle: {
          backgroundColor: "#262626",
        },
        headerStyle: {
          backgroundColor: "#262626",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "orange",
        },
      }}
    >
      <Tab.Screen
        name={"Dagens"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "orange" : "lightgrey"}
            />
          ),
        }}
      >
        {() => <TodaysWeather weatherData={weatherDataToday} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Imorgen"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"arrow-right"}
              size={25}
              color={focused ? "orange" : "lightgrey"}
            />
          ),
        }}
      >
        {() => <TomorrowsWeather weatherData={tomorrowsWeatherData} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Uken"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"calendar"}
              size={25}
              color={focused ? "orange" : "lightgrey"}
            />
          ),
        }}
      >
        {() => <WeekWeather weatherData={weatherData} />}
      </Tab.Screen>
    </Tab.Navigator>
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
    fontSize: 30,
  },
});

export default Tabs;
