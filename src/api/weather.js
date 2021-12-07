

const API_KEY = "2f7959a7ff528b5763f9c132be4f1f9f"

const getWeather = (city) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

const returnWeatherData = (data) => {
    const { name } = data
    const {icon , description } = data.weather;
    const {temp, humidity}  = data.main;
    const {speed} = data.wind;

}