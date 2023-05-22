const celsiusTemperature = parseFloat(document.getElementById("weatherDegree").textContent.replace("°C", ""));
const windSpeedKmph = parseFloat(document.getElementById("windSpeed").textContent.replace("km/h", ""));
const windChillSpan = document.getElementById("windChill");

//Formula of wind chill
const windChill = (tempCelsius, windMph) => {
    return (35.74 + 0.6215 * tempCelsius - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * windMph).toFixed(2);
  };

//Condition to show the parameters (the valid range)
if (celsiusTemperature <= 50 && windSpeedKmph > 3.0){
//convert km/h to m/hs
const windSpeedMph = windSpeedKmph / 1.60934; 



//Output of wind chill
windChillSpan.innerText= `${windChill(celsiusTemperature,windSpeedMph)}`
}
else{
    windChillSpan.innerText = "N/A";
}