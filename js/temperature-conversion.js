exports.kelvinToCelsius = function(temp) {
  var celsiusTemp = temp - 273.15;
  return celsiusTemp;
};

exports.kelvinToFahrenheit = function(temp) {
  var fTemp = ((temp - 273.15) * 1.8) + 32;
  return fTemp;
};
