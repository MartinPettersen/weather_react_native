import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodaysWeather from "@/screens/TodaysWeather";
import TomorrowsWeather from "@/screens/TomorrowsWeather";
import WeekWeather from "@/screens/WeekWeather";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { WeatherByHour } from "@/utils/types";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

type Props = {
  weatherData: WeatherByHour[]
}

const Tabs = ({ weatherData }: Props) => {


  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const isoFormatNextDay = nextDay.toISOString();

  const tommorow = isoFormatNextDay.slice(0, 10);

  const weatherDataToday = weatherData[0].data;

  const tomorrowsWeatherData: WeatherByHour[] = [];

  for (let i = 0; i < weatherData.length; i++) {
    const time = weatherData[i].time.slice(0, 10);

    if (time == tommorow) {
      tomorrowsWeatherData.push(weatherData[i]);
    }
  }




  return (
    <ImageBackground
      source={require("../assets/images/cloudimage1.png")} // You can also use a local image with require
      style={styles.background}
    >
      <View style={styles.container}>
        <BlurView intensity={50} style={StyleSheet.absoluteFill}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#38bdf8",
              tabBarInactiveTintColor: "black",
              tabBarStyle: {
                backgroundColor: "white",
              },
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
                color: "black",
              },
            }}
          >
            <Tab.Screen
              name={"Dagens"}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather
                    name={"umbrella"}
                    size={25}
                    color={focused ? "#38bdf8" : "black"}
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
                    color={focused ? "#38bdf8" : "black"}
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
                    color={focused ? "#38bdf8" : "black"}
                  />
                ),
              }}
            >
              {() => <WeekWeather weatherData={weatherData} />}
            </Tab.Screen>
          </Tab.Navigator>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default Tabs;
