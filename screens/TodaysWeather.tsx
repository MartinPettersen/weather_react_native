import TodaysWeatherData from '@/components/today/TodaysWeatherData'
import React from 'react'
import { View } from 'react-native'

const TodaysWeather = ({weatherData}: any) => {
  return (
    <TodaysWeatherData weather={weatherData} />

  )
}

export default TodaysWeather