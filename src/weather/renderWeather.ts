import { WeatherData } from "./WeatherData";

export function renderWeather(data: WeatherData) {
  console.log(data);

  // Current Conditions
  renderCurrentConditions(data)

  // Hourly Forecast
  renderHourlyForecast(data);

}

function renderCurrentConditions(data: WeatherData) {
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

function renderHourlyForecast(data: WeatherData) {
  const hourlyForecastContainer = document.getElementById("hourly-forecast") as HTMLDivElement;
  const hourlyForecastData = document.getElementById("hourly-forecast-data") as HTMLDivElement;

  hourlyForecastData.innerHTML = "";
  const today = data.forecast.forecastday[0];

  today.hour.forEach((hour) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast__card");

    forecastCard.innerHTML = `
      <p>${hour.temp_f}°F</p>
      <img src="${hour.condition.icon}" alt="${hour.condition.text}">
      <p>${hour.chance_of_rain}%</p>
      <p>${hour.time.split(" ")[1]}</p>
    `;

    hourlyForecastData.appendChild(forecastCard);
    hourlyForecastContainer.classList.remove("visually-hidden");
  });
}
