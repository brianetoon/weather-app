# SBA 308A - JavaScript Web Application

## Project Summary

The main purpose of this project is to demonstrate understanding of asynchronous JavaScript using fetch or Axios and async / await syntax. A detailed list of the project requirements is detailed below. To accomplish this, I created a Weather App using the [Weather API](https://www.weatherapi.com/).

## Project Requirements

- Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.
- Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
- Make use of Promises and async/await syntax as appropriate.
- Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
- Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).
- Create an engaging user experience through the use of HTML and CSS.
- Commit frequently to the git repository (minimum of 10 commits).
- Include a README file that contains a description of your application.

## Application Details

This project uses JavaScripts native fetch API to retrieve data from the [Weather API](https://www.weatherapi.com/). The API provides detailed weather information, including current conditions, forecasts, and hourly data.

The application leverages TypeScript for type safety, ensuring that data retrieved from the API is validated against a well-defined interface. The WeatherData interface outlines the structure of the API's response, specifying only the fields relevant to the application. This approach improves code readability, reduces runtime errors, and streamlines the process of accessing nested data properties.

Key features of the implementation include:

- Dynamic Data Fetching: The app retrieves and displays weather details based on user-provided locations, supporting both city names (e.g., "Denver") and zip codes (e.g., "80222").
- TypeScript Integration: The WeatherData interface enforces consistency when accessing API data. 
- Real-time Rendering: Data is dynamically rendered to the DOM, including the city name, current temperature, condition icon, and forecast details.
- Responsive Design: The application is styled for optimal viewing on both desktop and mobile devices.

## Future Improvements

- Rendering daily forecast data (10-day forecast)
- Outputting any request errors to the DOM
- Dynamic day / night background image

## Deliverables

- GitHub Repository: https://github.com/brianetoon/weather-app
- Live Project on GitHub Pages: https://brianetoon.github.io/weather-app/
