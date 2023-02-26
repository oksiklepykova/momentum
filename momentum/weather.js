
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');



async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=7de8edc4ed814aeb0a4e486a9d398f79&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
 //   console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
   
   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
   description.textContent = `${data.weather[0].description}`;
   wind.textContent = `${Math.round(data.wind.speed)}`;
   humidity.textContent = `${data.main.humidity}`;

}

function setCity(event) {
    
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}
 
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);