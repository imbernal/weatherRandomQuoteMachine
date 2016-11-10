function changeGrade(changeTo, val){
	if (changeTo == "Celsius"){
		return Math.round(val - 273.15);
	}else{
		return Math.round(val - 273.15) * 9/5 + 32 ;
	}
}

function celsiusToFahrenheit(changeTo , val){

	if (changeTo == "Celsius"){
		return Math.round((val - 32) * 5/9);
	}else{
		return Math.round((val * 9/5) + 32) ;
	}

}

var dict = { '2': "wi wi-night-alt-lightning" , 
             '3': "wi wi-rain-wind" , 
             '5': "wi wi-day-rain" , 
             '511': "wi wi-night-alt-snow",
             '520': "wi-night-alt-hail",
             '521': "wi-night-alt-hail", 
         	 '522': "wi-night-alt-hail", 
         	 '531': "wi-night-alt-hail",
         	 '6': "wi wi-night-alt-snow" ,
         	 '7': "wi wi-windy",
         	 '800': "wi wi-day-sunny",
         	 '801': "wi wi-day-cloudy",
         	 '802': "wi wi-cloud",
         	 '803': "wi wi-cloudy",
         	 '804': "wi wi wi-cloudy"}

function searchIcon(cod){
	var firstValue = String(cod)[0];

	for(var item in dict){
		if (item == firstValue){
			return dict[item];
		}

	}

	for(var item in dict){
		if (item == cod){
			return dict[item];
		}
	}
	return "wi wi-day-rain";

}

$(document).ready(function(){



	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/weather?zip=33184,US&APPID=1202c2f1ccbe1ef0a89f65ab9a7b0692",
		success: function(res){
			$('#city').html(res.name);
			$('#tempNum').html(changeGrade("Celsius" ,res.main.temp  ));
			$('#humidityNum').html(res.main.humidity);
			$('#pressureNum').html(res.main.pressure);
			var iconClass = searchIcon(res.weather[0].id);
			
			$('#iconChange').addClass(iconClass);
			

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
							var tempCe
							$('#tempNum').html(changeGrade("Celsius" ,res.main.temp  ));
							$('#humidityNum').html(res.main.humidity);
							$('#pressureNum').html(res.main.pressure);
							var iconClass = searchIcon(res.weather[0].id);
							$('#iconChange').removeClass();
							$('#iconChange').addClass(iconClass);
						}		
					});
  				}
			});
		}
	});

	$('.wi-celsius').addClass('colorIconSelected');

	$('.wi-celsius').click(function(){
		$(this).toggleClass("colorIconSelected");
		$(".wi-fahrenheit").toggleClass("colorIconSelected");

		var gradeValue = $('#tempNum').html();
		$('#tempNum').html(celsiusToFahrenheit("Celsius" , gradeValue ));

	});

	$('.wi-fahrenheit').click(function(){
		$(this).toggleClass("colorIconSelected");
		$(".wi-celsius").toggleClass("colorIconSelected");

		var gradeValue = $('#tempNum').html();
		$('#tempNum').html(celsiusToFahrenheit("fahrenheit" , gradeValue ));
	});

});





