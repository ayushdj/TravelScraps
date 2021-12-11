

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

export const getMultipleWeather = (city, setWeatherList, eventArray) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        .then((response) => (response.json()))
        .then(data => setWeatherList(getWeatherListData(data.list, eventArray)))
        // .then((data) => setWeatherList(getWeatherListData(data.list)))
        .catch(error => alert("City name not found!"))
}

const getWeatherListData = (weatherList, eventArray) => {
    //const weathers = weatherList.map(data => getDailyWeather(data))
    let finalWeatherList = []
    let count = 1
    let prevDay = "";
    for (let data of weatherList) {
        const day = data.dt_txt.substring(0, 10)
        if (prevDay !== "" && day !== prevDay) {
            count += 1
        }
        let userEvent = [];
        for (let event of eventArray) {
            if (event.date === day) {
                userEvent = [...userEvent, event]
            }
        }

        finalWeatherList = [...finalWeatherList, getDailyWeather(data, day, count, userEvent)]
        prevDay = day
    }
    return finalWeatherList
}

const getDailyWeather = (data, day, count, userEvent) => {
    return {
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        date: data.dt_txt,
        day,
        count,
        userEvent
    }
}


