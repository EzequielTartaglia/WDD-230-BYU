//URL of Data
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//Manipulate the data and save in the array
async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (dataReceived) => {
  const cardsContainer = document.getElementById("cardsContainer"); // select the output container element

  dataReceived.forEach((object) => {
    // Create elements to add to the cardsContainer element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pBirthday = document.createElement('p')
    let pPlaceBirthday = document.createElement('p')
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${object.name} ${object.lastname}`;

    // Build the p content out to show the prophet's Date of birth
    pBirthday.textContent = `Date of Birth: ${object.birthdate}`;

    // Build the p content out to show the prophet's Place of birth
    pPlaceBirthday.textContent = `Place of Birth: ${object.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', object.imageurl);
    let termination;
    switch (object.order) {
      
      case 1:
      case 11:
      case 21:
        termination = "st"
        portrait.setAttribute('alt', `Portait of ${object.name} ${object.lastname} - ${object.order}${termination} Latter-day President`);
        break;

      case 2:
      case 12:
      case 22:
          termination = "nd"
        portrait.setAttribute('alt', `Portait of ${object.name} ${object.lastname} - ${object.order}${termination} Latter-day President`);
          break;

      case 3:
      case 13:
      case 23:
        termination = "rd"
        portrait.setAttribute('alt', `Portait of ${object.name} ${object.lastname} - ${object.order}${termination} Latter-day President`);
          break;  

      default:
        termination = "th"
        portrait.setAttribute('alt', `Portait of ${object.name} ${object.lastname} - ${object.order}${termination} Latter-day President`);
          break;
    }
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(pBirthday);
    card.appendChild(pPlaceBirthday);
    card.appendChild(portrait);

    cardsContainer.appendChild(card);
  }) // end of forEach loop
} // end of function expression
