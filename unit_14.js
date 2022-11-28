
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Aktau&appid=3ad9caeccb3e145faa476cd45cfa696d')
//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
//         console.log(data)
//         let city = document.querySelector('.city-name')
//         city.innerHTML = data.name
//         let temp = document.querySelector('.degrese')
//         temp.innerHTML = Math.floor((data.main.temp) - 273) + '&deg';
//     })
//     .catch(function () {

//     });

// document.addEventListener('DOMContentLoaded', () => {
//     let val = document.getElementById('city_select').value;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=3ad9caeccb3e145faa476cd45cfa696d`)
//         .then(function (resp) { return resp.json() })
//         .then(function (data) {
//             console.log(data)
//             let city = document.querySelector('.city-name')
//             city.innerHTML = data.name
//             let temp = document.querySelector('.degrese')
//             temp.innerHTML = Math.floor((data.main.temp) - 273) + '&deg';
//             let clouds = document.querySelector('.clouds')
//             let getDataClouds = data.weather[0].description;
//             let string = String(getDataClouds)

//             clouds.textContent = ucFirst(string);

//             getIcon(data);


//         })
//         .catch(function () {

//         });
// });

// document.getElementById('city_select').onchange = (e) => {
//     let city = e.target.value;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ad9caeccb3e145faa476cd45cfa696d`)
//         .then(function (resp) { return resp.json() })
//         .then(function (data) {
//             let city = document.querySelector('.city-name')
//             city.innerHTML = data.name
//             let temp = document.querySelector('.degrese')
//             temp.innerHTML = Math.floor((data.main.temp) - 273) + '&deg';
//             let clouds = document.querySelector('.clouds')
//             clouds.textContent = data.weather.o.description;
//         })
//         .catch(function () {

//         });
// }

function setIcon(data) {
    let icon = document.querySelector('.icon-out')
    let getIcon = data.weather[0].icon;
    icon.innerHTML = ` <img src="http://openweathermap.org/img/wn/${getIcon}@2x.png" alt="" class="icon-weather">`
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

function getWeather(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ad9caeccb3e145faa476cd45cfa696d`)
        .then(function (resp) { return resp.json() })
        .then(function (data) { return data });
}

let showWeather = (weather) => {
    //console.log(weather)
    let city = document.querySelector('.city-name')
    city.innerHTML = weather.name
    let temp = document.querySelector('.degrese')
    temp.innerHTML = Math.floor((weather.main.temp) - 273) + '&deg';
    let clouds = document.querySelector('.clouds')
    let getDataClouds = weather.weather[0].description;

    clouds.textContent = ucFirst(getDataClouds);

    setIcon(weather);
};

document.getElementById('city_select').onchange = (e) => {
    let city = e.target.value;
    getWeather(city)
        .then(weather => showWeather(weather))
        .catch(err => console.log(err));
}
