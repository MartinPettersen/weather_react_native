import { useState, useEffect } from "react";
import * as Location from 'expo-location'


export const useGetWeatherData = () => {
    const [weatherData, setWeatherData] = useState([])
    const [lat, setLat] = useState<number|[]>([])
    const [lng, setLng] = useState<number|[]>([])

    const fetchWeatherData = async () => {
        try {

            const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`
            const options = {
                headers: {
                  "User-Agent": `weather app practice, email: ${process.env.CONTACT_INFO}`,
                },
              };

            const res = await fetch(url, options);
            
            const data = await res.json()
            
            setWeatherData(data.properties.timeseries)
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                console.log('permission to access location was denied')
                return
            }
            const location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLng(location.coords.longitude)
            await fetchWeatherData()
        })()
    }, [lat, lng])

    return [weatherData]
}