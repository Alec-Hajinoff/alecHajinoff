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
$('#btnSubmitOne').click(function() {
    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#paramNorth').val(),
            south: $('#paramSouth').val(),
            east: $('#paramEast').val(),
            west: $('#paramWest').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result['data'][0]["datetime"] + " || " + result['data'][0]["depth"] + " || " + result['data'][0]["lng"] + " || " + result['data'][0]["src"] + " || " + result['data'][0]["eqid"] + " || " + result['data'][0]["magnitude"] + " || " + result['data'][0]["lat"]));
            if (result.status.name == "ok") {  
            $('#txtResults').html(JSON.stringify(result['data'][0]["datetime"] + " || " + result['data'][0]["depth"] + " || " + result['data'][0]["lng"] + " || " + result['data'][0]["src"] + " || " + result['data'][0]["eqid"] + " || " + result['data'][0]["magnitude"] + " || " + result['data'][0]["lat"]));
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("This enquiry did not produce results:-(");
        }
    });
});