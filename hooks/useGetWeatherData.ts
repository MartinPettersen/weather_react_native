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

            const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`
            const options = {
                headers: {
                  "User-Agent": `weather app practice, email: ${process.env.CONTACT_INFO}`,
                },
              };

            //const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env.expo_WEATHER_API_KEY}&units=metric`)
            const res = await fetch(url, options);
            
            const data = await res.json()
            console.log("res")
            
            // console.log(data.properties.timeseries)
            setWeatherData(data.properties.timeseries)
            console.log(weatherData)
        }
        catch (error) {
            setError("error could not fetch Data")
        }
        finally {
            console.log("we are done")
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
            console.log("")
            await fetchWeatherData()
        })()
    }, [lat, lng])

    return [loading, error, weatherData]
}