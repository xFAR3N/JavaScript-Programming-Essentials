function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "1fef8de1c810b9155e686310d9d3ae4e";
    const geoApiUrl =  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    fetch(geoApiUrl)
    .then(response => response.json())
    .then(data =>{
        const lat = data[0].lat;
        const long = data[0].lon;
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`

        fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data =>{
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2> Weather in ${city}</h2>
                                    <p>Temperature: ${data.main.temp} celsius</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
    })
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );