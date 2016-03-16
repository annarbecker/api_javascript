var apiKey = require('./../.env').apiKey;
var map;

$(document).ready(function() {
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40, lng: -100},
      zoom: 4
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);

});
