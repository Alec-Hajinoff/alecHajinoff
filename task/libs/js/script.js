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
				
				//console.log(JSON.stringify(result));

				if (result.status.name == "ok") {
					
				$('#txtResults').html(JSON.stringify(result['data'][0]["datetime"] + " || " + result['data'][0]["depth"] + " || " + result['data'][0]["lng"] + " || " + result['data'][0]["src"] + " || " + result['data'][0]["eqid"] + " || " + result['data'][0]["magnitude"] + " || " + result['data'][0]["lat"]));
					
				//$('#txtResults').html(JSON.stringify(result['data']));

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("This enquiry did not produce results:-(");
			}
		});
	
	});

	$('#btnSubmitTwo').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfoOcean.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#paramLat').val(),
				lng: $('#paramLng').val()
			},
			
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtResults').html(JSON.stringify(result['data']));

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("This enquiry did not produce results:-(");
			}
		});
	
	});

	$('#btnSubmitThree').click(function() {
	$.ajax({
			url: "libs/php/getCountryInfoWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#paramNorthWeather').val(),
				south: $('#paramSouthWeather').val(),
				east: $('#paramEastWeather').val(),
				west: $('#paramWestWeather').val()
			},
			
			success: function(result) {
	
				console.log(JSON.stringify(result['data'][0]["lng"] + " || " + result['data'][0]["observation"] + " || " + result['data'][0]["ICAO"] + " || " + result['data'][0]["clouds"] + " || " + result['data'][0]["dewPoint"] + " || " + result['data'][0]["datetime"] + " || " + result['data'][0]["temperature"] + " || " + result['data'][0]["humidity"] + " || " + result['data'][0]["stationName"] + " || " + result['data'][0]["weatherCondition"] + " || " + result['data'][0]["windDirection"] + " || " + result['data'][0]["windSpeed"] + " || " + result['data'][0]["lat"]));
	
				if (result.status.name == "ok") {
	
				$('#txtResults').html(JSON.stringify(result['data'][0]["lng"] + " || " + result['data'][0]["observation"] + " || " + result['data'][0]["ICAO"] + " || " + result['data'][0]["clouds"] + " || " + result['data'][0]["dewPoint"] + " || " + result['data'][0]["datetime"] + " || " + result['data'][0]["temperature"] + " || " + result['data'][0]["humidity"] + " || " + result['data'][0]["stationName"] + " || " + result['data'][0]["weatherCondition"] + " || " + result['data'][0]["windDirection"] + " || " + result['data'][0]["windSpeed"] + " || " + result['data'][0]["lat"]));
	
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("This enquiry did not produce results:-(");
			}
		});
	});