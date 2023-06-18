//Get the url to weather API
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&q=Texas&appid={API_key}";
const lat = 31.9686;
const lon = -99.9018;
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
      console.log(data); // this is for testing the call
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
      <span id="weatherDegree">33°C</span>
    </div>
    <span id="weatherStatus">Partly Cloudy</span>
    <hr />
    <div class="stadistics">
      <ul>
        <li>
          <span>Wind speed:</span>
          <span id="windSpeed">2.5 km/h</span>
        </li>
        <li>
          <span>Wind chill:</span>
          <span id="windChill">N/A</span>
        </li>
      </ul>
    </div>
  </div>
                        `;
  //Get the elements made in the innerHTML
  const currentTemp = document.querySelector("#weatherDegree");
  const weatherIcon = document.querySelector("#weatherStatusImg");
  const captionDesc = document.querySelector("#weatherStatus");

  //Manipulate the elements made in the innerHTML
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )} &deg;F</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  //Capitalize the words in the description
  const descCapitalized = desc.replace(/\b\w/g, (c) => c.toUpperCase());

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", descCapitalized);

  captionDesc.textContent = descCapitalized;
};

//Display the API
apiFetch();
