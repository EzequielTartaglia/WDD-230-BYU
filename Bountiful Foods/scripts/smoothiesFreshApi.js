// Control the data (API)

// URL of Data
const urlFetched = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// Get the data
const getFruitsData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  try {
    const fruits = await getFruitsData(urlFetched);
    displayFruits(fruits);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Manipulate the data result
const displayFruits = (dataReceived) => {
  const fruitsContainer = document.getElementById("fruitsContainer");
  let checkedCount = 0; // Track the number of checkboxes checked

  // Display the first 6 fruits
  const selectedFruits = dataReceived.slice(0, 6);
  selectedFruits.forEach(({ genus, name, id, family, order, nutritions }, i) => {
    // Create elements to add to the fruitsContainer element
    let fruitContainer = document.createElement("li");
    fruitContainer.setAttribute("class", `optionRange-list`);

    // Create the checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "fruits";
    checkbox.value = "1";

    // Add event listener to the checkbox
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        checkedCount++;
        if (checkedCount > 3) {
          checkbox.checked = false; // Uncheck the checkbox if the maximum limit is reached
          checkedCount--;
        }
      } else {
        checkedCount--;
      }
      toggleRemainingCheckboxes(checkedCount);
    });

    // Create the label for the checkbox
    let label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(name));

    fruitContainer.appendChild(label);

    // Append the fruit option to the fruitsContainer
    fruitsContainer.appendChild(fruitContainer);
  });
};

// Disable or enable the remaining checkboxes
const toggleRemainingCheckboxes = (checkedCount) => {
  const checkboxes = document.querySelectorAll('input[name="fruits"]');
  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked && checkedCount >= 3) {
      checkbox.disabled = true; // Disable the checkbox if the maximum limit is reached
    } else {
      checkbox.disabled = false;
    }
  });
};

fetchDataAndDisplay();
