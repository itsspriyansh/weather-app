
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const weatherIcon = document.querySelector('.weatherIcon i')
const weatherCondition = document.querySelector('.weatherCondition')
const tempElement = document.querySelector('.temperature span')
const locationElement = document.querySelector('.place')
const dateElement = document.querySelector('.date')

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

dateElement.textContent = new Date().getDate() + ", " + monthNames[new Date().getMonth()];

weatherForm.addEventListener ('submit', (event) => {
    event.preventDefault();
    console.log (search.value);
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";

    const locationApi = "https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=e2f0c0e4bae24d911a88720ad12dc1f8";
    fetch (locationApi).then (response => {
        console.log (response);
        response.json().then (data => {
            if (data.error) {
                locationElement.textContent = "data.error";
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            } else {
                locationElement.textContent = data.name;
                tempElement.textContent = (data.main.temp - 273.5).toFixed(2) + String.fromCharCode(176) + 'C';
                weatherCondition.textContent = data.weather[0].description;
            }
        })
    })
})

