// separates all calls to WeatherAPI
import axios from 'axios'

const API_KEY = '2d5420d99ec24e0e98f181806251804'
const BASE_URL = 'https://api.weatherapi.com/v1'

export async function fetchCurrentWeather(city) {
  const res = await axios.get(`${BASE_URL}/current.json`, {
    params: { key: API_KEY, q: city, aqi: 'no' }
  })
  return res.data
}
