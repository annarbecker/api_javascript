var apiKey = require('./../.env').apiKey;
var kelvinToCelsius = require('./../js/temperature-conversion.js').kelvinToCelsius;
var kelvinToFahrenheit = require('./../js/temperature-conversion.js').kelvinToFahrenheit;
var meetupApiKey = require('./../.env').meetupApiKey;

$(document).ready(function() {
  $('#forecastLocation').submit(function(event) {
    event.preventDefault();
    var city = $('#destination').val();
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&appid=' + apiKey).then(function(response) {
      $('#cityName').text(city + "'s 5 Day Forecast");
      for (i = 0 ; i < 5 ; i++){
          $('#day' + i).html('<b>' + moment().add(i, 'days').format('dddd') + '</b><br>High = ' + Math.round(kelvinToFahrenheit(response.list[i].temp.max)) + '&deg;F <br> Low = '+ Math.round(kelvinToFahrenheit(response.list[i].temp.min)) + '&deg;F<br>'  + response.list[i].weather[0].description);
          console.log(moment().add(i, 'days').format('dddd'));
      }
      getLocation();
      getEvents();
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
