import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Day from "./Day";

type Props = {
  weekday: string;
  weather: any;
};

const WeekDay = ({ weekday, weather }: Props) => {
  //console.log(weekday.slice(0, 10))
  //console.log(weather);
  //const [tomorrowsWeatherData, setTomorrowsWeatherData] = useState<any>([]);
  const tomorrowsWeatherData = [];

  const morningData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const midDayData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const afternoonData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  const eveningData = {
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  };
  /*
    const [morningData, setMorningData] = useState({
        temperatures: [],
        totalTemp: 0,
        downpour: [],
        totalDownpour: 0

    })
  const [midDayData, setmidDayData] = useState({
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  });
  const [afternoonData, setAfternoonData] = useState({
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  });
  const [eveningData, setEveningData] = useState({
    temperatures: [],
    totalTemp: 0,
    downpour: [],
    totalDownpour: 0,
  });*/
  /*

00-08: fra 3 til 6 grader (snittemperatur 4,5 grader)

08-12: fra 7 til 8 grader (snittemperatur 7,2 grader)

12-18: fra 9 til 12 grader (snittemperatur 10,5 grader)

18-00: fra 11 til 4 grader (snittemperatur 6,8 grader)
*/

  //const getTodaysWeather = () => {
  //const tomorrowsWeatherData: any = [];

  for (let i = 0; i < weather.length; i++) {
    const time = weather[i].time.slice(0, 10);
    //const time = weather[i].time.slice(11, 13);

    // console.log(`the time is ${time}`)
    if (time == weekday.slice(0, 10)) {
      const hour = weather[i].time.slice(11, 13);
      //console.log(`the hour of the day is ${hour}`)
      //console.log(`${time} | ${weekday}`);

      if (
        weather[i].data.instant &&
        weather[i].data.instant.details &&
        weather[i].data.next_6_hours &&
        weather[i].data.next_6_hours.details
      ) {
        if (parseInt(hour) < 9) {
          morningData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          morningData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          morningData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

          //console.log(weather[i].data.instant.details.air_temperature);
          //console.log(weather[i].data.next_1_hours.details.precipitation_amount);
        } else if (parseInt(hour) < 13) {
          midDayData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          midDayData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          midDayData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

          //console.log(weather[i].data.instant.details.air_temperature);
          //console.log(weather[i].data.next_1_hours.details.precipitation_amount);
        } else if (parseInt(hour) < 19) {
          afternoonData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          afternoonData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          afternoonData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

          //console.log(weather[i].data.instant.details.air_temperature);
          //console.log(weather[i].data.next_1_hours.details.precipitation_amount);
        } else {
          eveningData.temperatures.push(
            weather[i].data.instant.details.air_temperature
          );
          eveningData.totalTemp +=
            weather[i].data.instant.details.air_temperature;
          eveningData.totalDownpour =
            weather[i].data.next_6_hours.details.precipitation_amount;

          // console.log(weather[i].data.instant.details.air_temperature);
          //console.log(weather[i].data.next_1_hours.details.precipitation_amount);
        }
      } else {
        console.log("missing data");
        console.log(JSON.stringify(weather[i], null, 2));
      }
      tomorrowsWeatherData.push(weather[i]);
    }
  }
  //console.log(tomorrowsWeatherData)
  //console.log(morningData)
  //console.log(midDayData)
  //console.log(afternoonData)
  //console.log(eveningData)
  //};
  //useEffect(() => {
  //  getTodaysWeather();
  //});

  return (
    <View style={styles.container}>
      <Text
        style={styles.headline}
      >{`${weekday.slice(8, 10)}.${weekday.slice(5, 7)}.${weekday.slice(0, 4)}`}</Text>
      <Day headline="Morgen: 00-08" average={Math.round(morningData.totalTemp / morningData.temperatures.length)} downpour={morningData.totalDownpour} />
      <Day headline="Formidag: 08-12" average={Math.round(midDayData.totalTemp / midDayData.temperatures.length)} downpour={midDayData.totalDownpour} />
      <Day headline="Ettermidag: 12-18" average={Math.round(afternoonData.totalTemp / afternoonData.temperatures.length)} downpour={afternoonData.totalDownpour} />
      <Day headline="Kveld: 18-24" average={Math.round(eveningData.totalTemp / eveningData.temperatures.length)} downpour={eveningData.totalDownpour} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27272a",
    borderRadius: 25,
    flexDirection: "column",
    margin: 10,
    padding: 4,
  },
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

export default WeekDay;
