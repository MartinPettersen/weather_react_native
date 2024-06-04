import React, { useState, useEffect } from "react";
import * as Location from 'expo-location'


export const useGetWeatherData = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weatherData, setWeatherData] = useState([])
    const [lat, setLat] = useState([])
    const [lng, setLng] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env.expo_WEATHER_API_KEY}&units=metric`)
            const data = await res.json()
            setWeatherData(data)
        }
        catch (error) {
            setError("error could not fetch Data")
        }
        finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLng(location.coords.longitude)

            await fetchWeatherData()
        })()
    }, [lat, lng])

    return [loading, error, weatherData]
}