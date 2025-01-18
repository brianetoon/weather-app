import "./sass/main.scss";
import { getWeatherData } from "./weather/getWeatherData";
import { renderWeather } from "./weather/renderWeather";

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
