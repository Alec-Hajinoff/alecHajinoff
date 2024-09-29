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
			url: "libs\php\getCountryInfoWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#paramNorthWeather').val(),
				south: $('#paramSouthWeather').val(),
				east: $('#paramEastWeather').val(),
				west: $('#paramWestWeather').val()
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

	/*
	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code here
			}
		}); 
	
	});
	*/