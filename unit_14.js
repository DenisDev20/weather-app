// Функция вставки иконки с погодой
function setIcon(data) {
    let icon = document.querySelector('.icon-out')
    let getIcon = data.weather[0].icon;
    icon.innerHTML = ` <img src="http://openweathermap.org/img/wn/${getIcon}@2x.png" alt="" class="icon-weather">`
}
//Функция перевода первой буквы в заглавную
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};
//Функция получения погодных сведений по городу
function getWeather(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ad9caeccb3e145faa476cd45cfa696d`)
        .then(function (resp) { return resp.json() })
        .then(function (data) { return data });
}
// Функция отрисовки сведений о погоде
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
//Функция для получения data атрибута при нажатии на кнопку
let btnWeather = document.querySelectorAll('.btn-city');
for (let i = 0; i < btnWeather.length; i++) {
    btnWeather[i].onclick = function () {
        let curCity = this.getAttribute('data')
        getWeather(curCity)
            .then(weather => showWeather(weather))
            .catch(err => console.log(err));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let curCity = 'Aktau';
    getWeather(curCity)
        .then(weather => showWeather(weather))
        .catch(err => console.log(err));
});
