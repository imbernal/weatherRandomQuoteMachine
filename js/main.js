$(document).ready(function(){

	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/weather?zip=33184,US&APPID=1202c2f1ccbe1ef0a89f65ab9a7b0692",
		success: function(res){
			$('#city').html(res.name);
			$('#tempNum').html(res.main.temp);
			$('#humidityNum').html(res.main.humidity);
			$('#pressureNum').html(res.main.pressure);

			$('input').keypress(function(e) {
  				if(e.which == 13) {
    				var zipCode = $('#inputEmail3').val();
    				var api = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode +",US&APPID=1202c2f1ccbe1ef0a89f65ab9a7b0692";		
    				if(zipCode == ""){
    					api = "http://api.openweathermap.org/data/2.5/weather?zip=33184,US&APPID=1202c2f1ccbe1ef0a89f65ab9a7b0692";
    				}
					
		
					$.ajax({
						url: api,
						success: function(res){
							$('#city').html(res.name);
							$('#tempNum').html(res.main.temp);
							$('#humidityNum').html(res.main.humidity);
							$('#pressureNum').html(res.main.pressure);
						}		
					});
  				}
			});
		}
	});

});





