// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//Get the url to weather API
const url= "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&q=Fairbanks&appid={API_key}";
const lat = 30.2672;
const lon = -97.7431;
const apiKey = "1c7bef1e6ec014e641fdcf262cd7e6f2";
const updatedUrl = url.replace("{lat}", lat).replace("{lon}", lon).replace("{API_key}",apiKey);

async function apiFetch() {
    try {
      const response = await fetch(updatedUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();