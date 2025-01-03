function cityDetails(response) {
  let temperature = response.data.temperature.current;
  let tempElement = document.querySelector("#location-temperature");
  let cityElement = document.querySelector("#city-display");
  let weatherElement = document.querySelector("#weather-specifics");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response.data);

  tempElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  weatherElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src=${response.data.condition.icon_url} />`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}, `;
}

function searchCity(city) {
  let apiKey = `9b7bac1cbc64o0da36fd874214ect64b`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(cityDetails);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let inputValue = document.querySelector("#city-input");
  let city = inputValue.value;
  searchCity(city);
}

function getForecast(city) {
  let apiKey = `9b7bac1cbc64o0da36fd874214ect64b`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let days = ["Sat", "Sun", "Mon", "Tue", "Wed"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
  <div class="day-1">
    <div class="day-of-week">${day}</div> 
    <div class="day-icon">☀️</div>
    <div class="day-temperature">
      <div class="high-temp">15°</div>
      <div class="low-temp">9°</div>
    </div>
  </div>
  `;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchValue = document.querySelector("#city-search");
searchValue.addEventListener("submit", handleSearchSubmit);

searchCity("paris");
