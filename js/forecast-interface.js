var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#forecastLocation').submit(function(event) {
    event.preventDefault();
    var city = $('#destination').val();
    $('.showForecast').empty();
    $('#destination').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&appid=' + apiKey).then(function(response) {
      $('.showForecast').append('The high for today is ' + response.list[0].weather[0].description)
      console.log(moment().add(8, 'days').format('dddd'));

      var myCenter = new google.maps.LatLng({lat: response.city.coord.lat, lng: response.city.coord.lon});
      map.setCenter(myCenter);

      var marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);

      var infowindow = new google.maps.InfoWindow({
      content:'The forecast for the next 5 days: '
        // for(var i=0; i<5; i++) {
        //   response.list[0].weather.main + ' with a max of ' + response.list[0].temp.max + ' and a min of' response.list[0].temp.min
        // };
      });
      infowindow.open(map,marker);

      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
      });

    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
