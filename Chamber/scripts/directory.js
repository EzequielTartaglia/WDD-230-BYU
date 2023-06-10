const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}

/* Control the data (API) */

//URL of Data
const url = "./scripts/data.json";

// Get the data
const getCompaniesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.companies;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const companies = await getCompaniesData(url);
  displayProphets(companies);
};

// Manipulate the data result
const displayProphets = (dataReceived) => {
  const dataContainer = document.getElementById("dataContainer"); // select the output container element

  dataReceived.forEach(({name,email,phone,image,url,membership_level,additional_information}) => {
    // Create elements to add to the dataContainer element
    let card = document.createElement("section");

	//Manipulate the DOM (card)
	card.innerHTML= `<h2>${name}</h2>
					 <p>${email}</p>
					 <p>+${phone} | <a href="${url}">Website</a></p>
					 <img src="${image}" alt="Logo of ${name}" loading="lazy" width="340" height="440"></img>
					 <p>Membership: ${membership_level}</p>
					 <p>Aditional Information: ${additional_information}</p>
					 `

    // Append the section(card) with the created elements
    dataContainer.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();
