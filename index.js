let searchForm = document.querySelector("#search-form");

function submitForm(event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-form-input");
	let searchButton = document.querySelector(".search-form-button");
	let city = document.querySelector("#city");
	city.innerHTML = searchInput.value;
}

searchForm.addEventListener("submit", submitForm);

let now = new Date();
let Days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
let Day = Days[now.getDay()];
let Hour = now.getHours();
let Minute = now.getMinutes();

if (Hour < 10) {
	Hour = `0${Hour}`;
}
if (Minute < 10) {
	Minute = `0${Minute}`;
}

let Time = document.querySelector("#time");
Time.innerHTML = `${Day} ${Hour}:${Minute}`;


