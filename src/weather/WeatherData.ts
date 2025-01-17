export interface WeatherData {
  location: {
    name: string; // City name
    region: string; // Region name
    localtime: string; // Local time in the specified location
  };

  current: {
    condition: {
      text: string; // Weather condition (e.g., "Sunny")
      icon: string; // Icon URL for the condition
      code: number; // Condition code
    };
    feelslike_f: number; // Feels-like temperature in Fahrenheit
    humidity: number; // Humidity percentage
    temp_f: number; // Current temperature in Fahrenheit
    wind_dir: string; // Wind direction (e.g., "NW")
    wind_mph: number; // Wind speed in mph
    windchill_f?: number | null; // Wind chill in Fahrenheit (optional)
  };

  forecast: {
    forecastday: Array<{
      astro: {
        sunrise: string; // Sunrise time
        sunset: string; // Sunset time
      };
      date: string; // Forecast date
      day: {
        avgtemp_f: number; // Average temperature in Fahrenheit
        condition: {
          text: string; // Weather condition summary
          icon: string; // Icon URL for the condition
          code: number; // Condition code
        };
        daily_chance_of_rain: number; // Chance of rain (%)
        daily_chance_of_snow: number; // Chance of snow (%)
        maxtemp_f: number; // Maximum temperature in Fahrenheit
        mintemp_f: number; // Minimum temperature in Fahrenheit
      };
    }>;
  };
}