//API Key ae2c6a27c872b651f2de5dec5f45db7d

//selecting elements
var weatherIcon = document.querySelector('.weather-icon')
var inputValue = document.querySelector('.inputValue')
var button = document.querySelector('.button')
var nam = document.querySelector('.nam')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var windSpeed = document.querySelector('.windSpeed')
var noobvar = document.querySelector('.location')

//var date = document.querySelector('.date-time')

// Adding click funtion to Search button

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ae2c6a27c872b651f2de5dec5f45db7d')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var humidityValue = data['main']['humidity'];
        var windSpeedValue = data['wind']['speed'];
        var weatherIconValue = data['weather'][0]['icon']

        nam.innerHTML = nameValue ;
        temp.innerHTML = '<img src ="thermometer.png" height = "25px"></img>'+parseFloat(tempValue - 273).toFixed(1) + " °C" ;
        desc.innerHTML = descValue ;
        humidity.innerHTML = '<img src = "humidity.png" height = "25px" />' +humidityValue + " %";
        windSpeed.innerHTML = '<img src="wind.png" height = "25px" /> ' +windSpeedValue ;
        weatherIcon.innerHTML = `<img src="icons/${weatherIconValue}.png" />`;
        console.log(data);

    })

    

    .catch(err => alert('wrong'));
})

var latitude = 0
var longitude = 0

if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition);
}

function setPosition(position){
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;

    
}

let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ae2c6a27c872b651f2de5dec5f45db7d`;
//let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=ae2c6a27c872b651f2de5dec5f45db7d`

noobvar.addEventListener('click', function(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var humidityValue = data['main']['humidity'];
        var windSpeedValue = data['wind']['speed'];
        var weatherIconValue = data['weather'][0]['icon']

        nam.innerHTML = nameValue ;
        temp.innerHTML = '<img src ="thermometer.png" height = "25px"></img>'+parseFloat(tempValue - 273).toFixed(1) + " °C" ;
        desc.innerHTML = descValue ;
        humidity.innerHTML = '<img src = "humidity.png" height = "25px" />' +humidityValue + " %";
        windSpeed.innerHTML = '<img src="wind.png" height = "25px" /> ' +windSpeedValue ;
        weatherIcon.innerHTML = `<img src="icons/${weatherIconValue}.png" />`;
        console.log(data);

    })
})    

