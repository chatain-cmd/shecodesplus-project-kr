let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let hours = now.getHours();

let minutes = now.getMinutes();

let dateTime = document.querySelector("#date");
dateTime.innerHTML = `${currentDay} ${hours}:${minutes}`;

function searchCity(city){
  let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentData);

}

function showCurrentData(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#weather").innerHTML = response.data.weather[0].main;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);

}
searchCity("London");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);


function searchLocation(position){
   let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
  let apiUrl =  `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentData);

}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation)

}

let currentLocationButton = document.querySelector("#current-location-btn");
currentLocationButton.addEventListener("click", getCurrentLocation);
