function showForecast() {
	
	let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
	let forecastHtml = "";

	days.forEach(function (day) {
		forecastHtml =
			forecastHtml +
			`<div class="weather-forecast-day">
<div class="weather-forecast-date">${day}</div>
<div class="weather-forecast-icon"><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"></div>
<div class="weather-forecast-temperatures">
	<div class="weather-forecast-temperature"><strong>31°C</strong></div>
	<div class="weather-forecast-temperature">13°C</div>
</div>
</div>`;
	});

	let forecastElement = document.querySelector("#forecast");
	forecastElement.innerHTML = forecastHtml;
}

function showData(response) {
	let temperatureElement = document.querySelector("#temperature");
	let weatherCondition = document.querySelector(".weather-condition");
	let windDate = document.querySelector("#wind-data");
	let humidityDate = document.querySelector("#humidity-data");
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
	let timeElement = document.querySelector("#time");
	let iconElement = document.querySelector("#icon");

	if (hour < 10) {
		hour = `0${hour}`;
	}
	if (minute < 10) {
		minute = `0${minute}`;
	}

	temperatureElement.innerHTML = Math.round(response.data.temperature.current);
	weatherCondition.innerHTML = response.data.condition.description;
	windDate.innerHTML = `${response.data.wind.speed}km/h`;
	humidityDate.innerHTML = `${response.data.temperature.humidity}%`;
	city.innerHTML = response.data.city;
	timeElement.innerHTML = `${day} ${hour}:${minute}`;
	iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
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
showForecast();
