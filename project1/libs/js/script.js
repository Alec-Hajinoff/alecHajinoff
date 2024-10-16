let d = new Date()
document.getElementById("one").innerHTML = d;
var two = document.getElementById("CountryName");
navigator.geolocation.getCurrentPosition(success, fail);
function success(pos) {
    msg = "Longitude: " + pos.coords.longitude + " " + "Latitude: " + pos.coords.latitude;
    two.innerHTML = msg;
}
function fail() {
    msg = "Sorry, we couldn't get your location!";
    two.innerHTML = msg;
}