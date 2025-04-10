const apiKey = "VLWJHDDUV7FKDURXD8EZ34KHM";

async function getWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherInfo");

  if (!cityInput) {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}?unitGroup=us&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.currentConditions) {
      const html = `
        <h3>${data.address}</h3>
        <p>Temperature: ${data.currentConditions.temp} °F</p>
        <p>Wind Speed: ${data.currentConditions.windspeed} Km/hr</p>
        <p>${data.description}</p>
      `;
      weatherBox.innerHTML = html;
    } else {
      weatherBox.innerHTML = "<p>Weather data not available.</p>";
    }
  } catch (error) {
    console.error("Error fetching Weather data", error);
    weatherBox.innerHTML = "<p>Failed to fetch weather data.</p>";
  }
}