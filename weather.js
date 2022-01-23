const API_KEY = "0c765b14e85fc1d1d65ab3741d46e48f";
const temp = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child")
function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        temp.innerText = `🌡 : ${Math.floor(data.main.temp)}`;
        city.innerText = `🏠 : ${data.name} `;
    })
}

function onErrGeo(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeo, onErrGeo);


