let d = new Date()
document.getElementById("one").innerHTML = d;
var two = document.getElementById("CountryName");
navigator.geolocation.getCurrentPosition(success, fail);
function success(pos) {
    $.ajax({
        url: "libs/php/getCountryMap.php",
        type: 'GET',
        dataType: 'json',
        data: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        },
        success: function(result) {
            console.log(JSON.stringify(result['data']));
            if (result.status.name == "ok") {  
            $('#CountryName').html(JSON.stringify(result['data']));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("This enquiry did not produce results:-(");
        }
    });
    //msg = "Longitude: " + pos.coords.longitude + " " + "Latitude: " + pos.coords.latitude;
    //two.innerHTML = msg;
}
function fail() {
    msg = "Sorry, we couldn't get your location!";
    two.innerHTML = msg;
}