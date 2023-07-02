//Get the url to weather API
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&q=Carlsbad&appid={API_key}";
const lat = 33.1581;
const lon = -117.3506;
const apiKey = "1c7bef1e6ec014e641fdcf262cd7e6f2";
const updatedUrl = url
  .replace("{lat}", lat)
  .replace("{lon}", lon)
  .replace("{API_key}", apiKey);

//Get the data
const apiFetch = async () => {
  try {
    const response = await fetch(updatedUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

//Display the data
const displayResults = (weatherData) => {
  //Select HTML in the DOM
  const weatherApi = document.getElementById("weather");

  weatherApi.innerHTML = `
                        <div class="gridAreatitle">
                        <h2>Weather</h2>
                      </div>
                      <div class="gridAreaContent">
                        <div class="grades">
                          <img
                            src=""
                            alt=""
                            id="weatherStatusImg"
                          />
                          <span id="weatherDegree"></span>
                        </div>
                        <span id="weatherStatus"></span>
                        <hr />
                        <div class="stadistics">
                          <ul>
                            <li>
                            <span>Humidity:</span>
                            <span id="humidity"></span>
                          </li>
                          </ul>
                        </div>
                      </div>
                        `;
  //Get the elements made in the innerHTML
  const currentTemp = document.getElementById("weatherDegree");
  const weatherIcon = document.getElementById("weatherStatusImg");
  const captionDesc = document.getElementById("weatherStatus");
  const humidity = document.getElementById("humidity");

  //Manipulate the elements made in the innerHTML

  //Grades
  //convert °f to °c
  const celsiusTemperature = (weatherData.main.temp.toFixed(0) / 9) * 5 - 32;
  currentTemp.innerHTML = `<span>${celsiusTemperature.toFixed(
    0
  )} &deg;C</span>`;

  //Image and description
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  //Capitalize the words in the description
  const descCapitalized = desc.replace(/\b\w/g, (c) => c.toUpperCase());
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", descCapitalized);
  captionDesc.textContent = descCapitalized;
  
  //Humidity
  humidity.textContent = `${weatherData.main.humidity}%`;
};

//Display the API
apiFetch();
