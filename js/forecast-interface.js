var apiKey = require('./../.env').apiKey;
var kelvinToCelsius = require('./../js/temperature-conversion.js').kelvinToCelsius;
var kelvinToFahrenheit = require('./../js/temperature-conversion.js').kelvinToFahrenheit;

$(document).ready(function() {
  $('#forecastLocation').submit(function(event) {
    event.preventDefault();
    var city = $('#destination').val();
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&appid=' + apiKey).then(function(response) {
      for (i = 0 ; i < 5 ; i++){
        $('#day' + i).append(moment().add(i, 'days').format('dddd') + '<br>High = ' + Math.round(kelvinToFahrenheit(response.list[i].temp.max)) + '&deg;F<br> Low = '+ Math.round(kelvinToFahrenheit(response.list[i].temp.min)) + '&deg;F<br>' + response.list[i].weather[0].description + '<br>'+ '<br>');
        console.log(moment().add(i, 'days').format('dddd'));
      }
      getLocation();
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
