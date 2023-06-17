// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Get the url to weather API
const url= "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&q=Fairbanks&appid={API_key}";
const lat = 64.8378;
const lon = -147.7164;
const apiKey = "1c7bef1e6ec014e641fdcf262cd7e6f2";
const updatedUrl = url.replace("{lat}", lat).replace("{lon}", lon).replace("{API_key}",apiKey);

const apiFetch = async() => {
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
  }
  
  apiFetch();

const displayResults = (weatherData) => {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    //Capitalize the words in the description
    const descCapitalized = desc.replace(/\b\w/g, c => c.toUpperCase());

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descCapitalized);

    captionDesc.textContent = descCapitalized;
  }