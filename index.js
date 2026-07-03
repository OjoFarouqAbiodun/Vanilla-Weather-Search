function showData(response) {
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = Math.round(response.data.temperature.current);
	let weatherCondition = document.querySelector(".weather-condition");
	weatherCondition.innerHTML = response.data.condition.description;
	let windDate = document.querySelector("#wind-data");
	windDate.innerHTML = `${response.data.wind.speed}km/h`;
	let humidityDate = document.querySelector("#humidity-data");
	humidityDate.innerHTML = `${response.data.temperature.humidity}%`;
	city.innerHTML = response.data.city;

	let date = new Date(response.data.time * 1000);
	let Days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = Days[date.getDay()];
	let hour = date.getHours();
	let minute = date.getMinutes();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	if (minute < 10) {
		minute = `0${minute}`;
	}

	let timeElement = document.querySelector("#time");
	timeElement.innerHTML = `${day} ${hour}:${minute}`;
}

function searchCity(city) {
	let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showData);
}

function submitForm(event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-form-input");
	let searchButton = document.querySelector(".search-form-button");
	let city = document.querySelector("#city");
	searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitForm);

searchCity("New York");

// let currentDate = new Date();
// let Days = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday",
// ];
// let Day = Days[currentDate.getDay()];
// let Hour = currentDate.getHours();
// let Minute = currentDate.getMinutes();

// if (Hour < 10) {
// 	Hour = `0${Hour}`;
// }
// if (Minute < 10) {
// 	Minute = `0${Minute}`;
// }

// let Time = document.querySelector("#time");
// Time.innerHTML = `${Day} ${Hour}:${Minute}`;
