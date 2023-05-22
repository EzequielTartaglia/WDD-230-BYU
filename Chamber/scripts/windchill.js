const temperature = parseFloat(document.getElementById("weatherDegree").textContent.replace("°C", ""));
const windSpeedKmph = parseFloat(document.getElementById("windSpeed").textContent.replace("km/h", ""));


//Formula of wind chill
const windChill = (tempCelsius, windMph) => {
    return (35.74 + 0.6215 * tempCelsius - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * windMph).toFixed(2);
  };

//convert km/h to m/hs
const windSpeedMph = windSpeedKmph / 1.60934; 

//Replace the span of wind chill
const windChillSpan = document.getElementById("windChill");

//Output of wind chill
windChillSpan.innerText= `${windChill(temperature,windSpeedMph)}`
