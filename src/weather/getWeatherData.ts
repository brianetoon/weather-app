import { WeatherData } from "./WeatherData";

const API_KEY: string = "2063f27449d8482596431057251601";
const BASE_URL: string = "http://api.weatherapi.com/v1/";

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
    console.log(data);
    return data;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}