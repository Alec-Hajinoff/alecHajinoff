let d = new Date()
document.getElementById("one").innerHTML = d;
var two = document.getElementById("CountryName");
var msg = "Sorry, we couldn't get your location.";
if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    two.textContent = "Checking location..";
} else {
    two.textContent = msg;
}
function success(position) {
    msg = "Longitude: " + pos.coords.longitude + "Latitude: " + pos.coords.lantitude;
    two.innerHTML = msg;
}
function fail(msg) {
    two.textContent = msg;
    console.log(msg.code);
}