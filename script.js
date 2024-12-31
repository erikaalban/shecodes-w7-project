function handleSearchSubmit(event) {
  event.preventDefault();
  let inputValue = document.querySelector("#city-input");
  let city = document.querySelector("#city-display");
  city.innerHTML = inputValue.value;
}

let searchValue = document.querySelector("#city-search");
searchValue.addEventListener("submit", handleSearchSubmit);
