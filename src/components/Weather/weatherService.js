

const API_KEY = "2f7959a7ff528b5763f9c132be4f1f9f"

export const getWeather = (city, setWeather) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + API_KEY)
        .then((response) => response.json())
        .then((data) => setWeather(returnWeatherData(data)))
        .catch(error => setWeather({
            location: "Denver",
            temp: "61",
            description: "Cloudy",
            humidity: "60",
            wind: "6.2"
        }))
}

const returnWeatherData = (data) => {
    return {
        location: data.name,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
    }
}

export const getMultipleWeather = (city, setWeatherList) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        .then((response) => (response.json()))
        .then(data => setWeatherList(getWeatherListData(data.list)))
        // .then((data) => setWeatherList(getWeatherListData(data.list)))
        .catch(error => alert("City name not found!"))
}

const getWeatherListData = (weatherList) => {
    return weatherList.map(data => getDailyWeather(data))
}

const getDailyWeather = (data) => {
    return {
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        date: data.dt_txt
    }
}

const getDay = (date) => {
    if (date !== "") {

    }
}
