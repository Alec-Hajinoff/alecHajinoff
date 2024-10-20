let d = new Date();
document.getElementById("one").innerHTML = d;
var two = document.getElementById("CountryName");
navigator.geolocation.getCurrentPosition(success, fail);
function success(pos) {
    $.ajax({
        url: "libs/php/getCountryMap.php",
        type: 'GET',
        dataType: 'json',
        data: {
            'latitude': pos.coords.latitude,
            'longitude': pos.coords.longitude
        },
        success: function(result) {
            console.log(JSON.stringify(result.data[0].annotations.OSM.url));
            if (result.status.name == "ok") {  
                $('#CountryName').html(JSON.stringify(result.data[0].annotations.OSM.url));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("This enquiry did not produce results:-(");
        }
    });
}
function fail() {
    var msg = "Sorry, we couldn't get your location!";
    two.innerHTML = msg;
}