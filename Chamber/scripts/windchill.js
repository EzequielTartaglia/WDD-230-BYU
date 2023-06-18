const celsiusTemperature = parseFloat(
  document.getElementById("weatherDegree").textContent.replace("°C", "")
);
const windSpeedKmph = parseFloat(
  document.getElementById("windSpeed").textContent.replace("km/h", "")
);
const windChillSpan = document.getElementById("windChill");

//Formula of wind chill
const windChill = (tempCelsius, windMph) => {
  return (
    35.74 +
    0.6215 * tempCelsius -
    35.75 * Math.pow(windMph, 0.16) +
    0.4275 * tempCelsius * Math.pow(windMph, 0.16)
  ).toFixed(2);
};

//convert °c to °f
const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
//convert km/h to m/hs
const windSpeedMph = windSpeedKmph / 1.60934;

//Valid range to Wind chill
if (fahrenheitTemperature >= 50 && windSpeedMph > 3.0) {
  //Output
  windChillSpan.textContent = `${windChill(celsiusTemperature, windSpeedMph)}`;
} else {
  windChillSpan.textContent = "N/A";
}

