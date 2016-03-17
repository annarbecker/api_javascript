var apiKey = require('./../.env').apiKey;
var kelvinToCelsius = require('./../js/temperature-conversion.js').kelvinToCelsius;
var kelvinToFahrenheit = require('./../js/temperature-conversion.js').kelvinToFahrenheit;


var getLocation = function() {
  var city = $('#destination').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    console.log(JSON.stringify(response));
    var myCenter = new google.maps.LatLng({lat: response.coord.lat, lng: response.coord.lon});
    map.setCenter(myCenter);

    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
    content:"Current temperature in " + city + ": " +  Math.ceil(kelvinToFahrenheit(response.main.temp)) + "&deg;F" + "/" + Math.ceil(kelvinToCelsius(response.main.temp)) + "&deg;C"});
    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });

    // $('#destination').val("");
  }).fail(function(error) {
    $('.showWeather').text(error.message);
  });
};
