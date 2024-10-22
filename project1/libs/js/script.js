let d = new Date();
document.getElementById("one").innerHTML = d;
var two = document.getElementById("CountryName");
navigator.geolocation.getCurrentPosition(success, fail);
function success(pos) {
    //Leaflet start:
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //Leaflet end!
    //Call to getDataOpenCage.php to fetch Country name, start:
    $.ajax({
        url: "libs/php/getDataOpenCage.php",
        type: 'GET',
        dataType: 'json',
        data: {
            'latitude': pos.coords.latitude,
            'longitude': pos.coords.longitude
        },
        success: function(result) {
            console.log(JSON.stringify(result.data[0].components.country));
            if (result.status.name == "ok") {  
                $('#CountryName').html(JSON.stringify(result.data[0].components.country));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("This enquiry did not produce results:-(");
        }
    });
    //Call to getDataOpenCage.php to fetch Country name, end!
    //Call to getDataOpenCage.php to fetch Name of currency, start:
    $.ajax({
        url: "libs/php/getDataOpenCage.php",
        type: 'GET',
        dataType: 'json',
        data: {
            'latitude': pos.coords.latitude,
            'longitude': pos.coords.longitude
        },
        success: function(result) {
            console.log(JSON.stringify(result.data[0].annotations.currency.iso_code));
            if (result.status.name == "ok") {  
                $('#NameOfCurrency').html(JSON.stringify(result.data[0].annotations.currency.iso_code));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("This enquiry did not produce results:-(");
        }
    });
    //Call to getDataOpenCage.php to fetch Name of currency, end!
}
function fail() {
    var msg = "Sorry, we couldn't get your location!";
    two.innerHTML = msg;
}