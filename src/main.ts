import "./sass/main.scss";
import { getWeatherData } from "./weather/getWeatherData";
import { WeatherData } from "./weather/WeatherData";

const locationForm = document.querySelector(".location-form") as HTMLFormElement;

locationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location: string = locationForm.location.value.trim();
  locationForm.reset();
  
  try {
    const data = await getWeatherData(location);
    renderWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

function renderWeather(data: WeatherData) {
  console.log(data);

  const cityName = data.location.name;
  const regionName = data.location.region;
  const condition = data.current.condition.text;
  const currentTemp = data.current.temp_f;
  const feelsLike = data.current.feelslike_f;
  const todayHigh = data.forecast.forecastday[0].day.maxtemp_f;
  const todayLow = data.forecast.forecastday[0].day.mintemp_f;

  document.getElementById("location-name")!.textContent = `${cityName}, ${regionName}`;
  document.getElementById("condition")!.textContent = condition;
  document.getElementById("current-temp")!.textContent = `${currentTemp}°F`;
  document.getElementById("feels-like")!.textContent = `Feels Like ${feelsLike}°`;
  document.getElementById("high-low-temp")!.textContent = `High ${todayHigh}° - Low ${todayLow}°`;

}


