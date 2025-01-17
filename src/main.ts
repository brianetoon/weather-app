import "./sass/main.scss";
import { getWeatherData } from "./weather/getWeatherData";

const locationForm = document.querySelector(".location-form") as HTMLFormElement;

locationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location: string = locationForm.location.value.trim();
  locationForm.reset();
  
  const data = await getWeatherData(location);
  console.log(data);
})

