//URL of Data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//Container DOM
const cardsContainer = document.getElementById("cardsContainer");

//Empty array (to save data)
let prophets = []

//Manipulate the data and save in the array
const getProphetData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    (data.prophets).forEach(prophet => {
        prophets.push(prophet)
    });
  }
  
  getProphetData();

//Since this part you could manipulate the data from url storaged in the array prophets
console.log(prophets)