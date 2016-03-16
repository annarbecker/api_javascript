var apiKey = require('./../.env').apiKey;
var kelvinToCelsius = require('./../js/temperature-conversion.js').kelvinToCelsius;
var kelvinToFahrenheit = require('./../js/temperature-conversion.js').kelvinToFahrenheit;


$(document).ready(function() {
  $('#weatherLocation').submit(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    $('.showWeather').empty();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      var myCenter = new google.maps.LatLng({lat: response.coord.lat, lng: response.coord.lon});
      map.setCenter(myCenter);

      var marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);

      var infowindow = new google.maps.InfoWindow({
      content:"<br>" + "The temperature in " + city + " is " + Math.ceil(kelvinToCelsius(response.main.temp)) + " Celsius" + "<br>" + "The temperature in " + city + " is " + Math.ceil(kelvinToFahrenheit(response.main.temp)) + " Fahrenheit"});
      infowindow.open(map,marker);

      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
      });

    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
