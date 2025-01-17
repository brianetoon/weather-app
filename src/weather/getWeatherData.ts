import { WeatherData } from "./WeatherData";

const API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL: string = "https://api.weatherapi.com/v1/";

export async function getWeatherData(location: string): Promise<WeatherData> {
  const days: number = 10;
  const endpoint: string = "forecast.json";
  const url: string = `${BASE_URL}${endpoint}?key=${API_KEY}&q=${location}&days=${days}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data: WeatherData = await response.json();
    return data;

  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}
