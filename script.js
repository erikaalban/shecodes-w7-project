function cityDetails(response) {
  let temperature = response.data.temperature.current;
  let tempElement = document.querySelector("#location-temperature");
  tempElement.innerHTML = Math.round(temperature);

  let cityName = response.data.city;
  let cityElement = document.querySelector("#city-display");
  cityElement.innerHTML = cityName;
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

let searchValue = document.querySelector("#city-search");
searchValue.addEventListener("submit", handleSearchSubmit);
