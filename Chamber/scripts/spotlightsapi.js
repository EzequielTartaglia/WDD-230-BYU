/* Control the data (API) */

//URL of Data
const urlJson = "./scripts/data.json";

// Get the data
const getCompaniesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.companies;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const companies = await getCompaniesData(urlJson);
  displayCompanies(companies);
};

// Manipulate the data result
const displayCompanies = (dataReceived) => {
  const spotlightsContainer = document.getElementById("spotlights");

  dataReceived.forEach(({name,email,phone,image,url,membership_level,additional_information}) => {
    // Create elements to add to the spotlightsContainer element
    let spotlightOne = document.createElement("div");
    spotlightOne.setAttribute('class','gridArea6');
    spotlightOne.setAttribute('id','spotlightOne');
    
    let spotlightTwo = document.createElement("div");
    spotlightTwo.setAttribute('class','gridArea7');
    spotlightTwo.setAttribute('id','spotlightTwo');

    let spotlightThree = document.createElement("div");
    spotlightThree.setAttribute('class','gridArea8');
    spotlightThree.setAttribute('id','spotlightThree');

	//Manipulate the DOM (card)
	spotlightOne.innerHTML= `<div class="gridAreatitle">
  <h2>Safe wallet</h2>
</div>
<div class="gridAreaContent">
  <img src="./images/Directory/image10.webp" alt="Spotlight Image" />
  <p class="spotlightsSlogan">
    "A new opportunity to your bussines"
  </p>
  <hr />
  <p>hello@safewallet.com</p>
  <p>+999 999 999 999 | <a href="#">website</a></p>
</div>
					        `
	//Manipulate the DOM (card)
	spotlightTwo.innerHTML= `<div class="gridAreatitle">
  <h2>Trading Academy</h2>
</div>
<div class="gridAreaContent">
  <img src="./images/Directory/image11.webp" alt="Spotlight Image" />
  <p class="spotlightsSlogan">"Empower Your Trading Journey"</p>
  <hr />
  <p>hello@tradinglearn.com</p>
  <p>+999 999 999 999 | <a href="#">website</a></p>
</div>
					        `
	//Manipulate the DOM (card)
	spotlightThree.innerHTML= `<div class="gridAreatitle">
  <h2>Unity Health</h2>
</div>
<div class="gridAreaContent">
  <img src="./images/Directory/image12.webp" alt="Spotlight Image" />
  <p class="spotlightsSlogan">
    "Healing Together, One Community at a Time"
  </p>
  <hr />
  <p>hello@unityhealth.org</p>
  <p>+999 999 999 999 | <a href="#">website</a></p>
</div>
					        `    
    
    // Append the section(card) with the created elements
    spotlightsContainer.appendChild(spotlightOne);
    spotlightsContainer.appendChild(spotlightTwo);
    spotlightsContainer.appendChild(spotlightThree);
  }); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();




{/* `<h2>${name}</h2>
                  <p class="membership-level">Membership: ${membership_level}</p>
                  <img src="${image}" alt="Logo of ${name}" loading="lazy" width="340" height="440"></img>
                  <p class="aditional-info">${additional_information}</p>
                  <hr>
                  <p class="email">${email}</p>
                  <p class="website">+${phone} | <a href="${url}">Website</a></p>
					        ` */}