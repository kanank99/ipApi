
let fuckingIp = "";
let ipDiv = document.querySelector('.gotIp');
let yourCountry = "";
let yourCity = "";
let yourLat = "";
let yourLng = "";

fetch('https://api.ipify.org/?format=json')
.then(response => response.json())
.then(data => {
    fuckingIp = data.ip;
})

fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_HtLKa1wGtIyBK0oMrq4wJRhPfQPo3&ipAddress=${fuckingIp}`)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    yourCountry = data.location.country;
    yourCity = data.location.city;
    yourLat = data.location.lat;
    yourLng = data.location.lng;
    console.log(yourCity + ", " + yourCountry);
})

setTimeout(() => {
    console.log(fuckingIp);
    ipDiv.innerHTML = fuckingIp + " " + yourCity + ", " + yourCountry;
    console.log(yourLat, yourLng);
    let locationArr = [yourLat, yourLng];
    var map = L.map('map').setView(locationArr, 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 16,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);



} ,500)

console.log(yourLat, yourLng);

