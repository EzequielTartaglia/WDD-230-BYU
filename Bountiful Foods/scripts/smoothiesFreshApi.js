// Control the data (API)
const urlFetched =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";

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

    // Check if the "Total Price Fruits" exists in localStorage
    if (!localStorage.getItem("Total Price Fruits")) {
        // Uncheck all fruit checkboxes
        const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
        fruitCheckboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      }
};

// Manipulate the data result
const displayFruits = (dataReceived) => {
  const fruitsContainer = document.getElementById("fruitsContainer");

  // Display the first 6 fruits
  const selectedFruits = dataReceived.slice(0, 6);
  let fruitsHTML = "";
  selectedFruits.forEach(({ name }) => {
    // Price of fruits
    const fruitPrices = {
      Apple: 1,
      Apricot: 4,
      Avocado: 5,
      Banana: 7,
      Blackberry: 3,
      Blueberry: 5,
    };
    const price = fruitPrices[name]; // Get the price based on the fruit name
    fruitsHTML += `
      <li class="optionRange-list">
        <label>
          <input type="checkbox" name="fruits" value="${price}">
          ${name}
        </label>
      </li>
    `;
  });

  fruitsContainer.innerHTML = fruitsHTML;

  // Add change event listener to fruit checkboxes
  const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
  fruitCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleFruitCheckboxChange);
  });
};

// Handle fruit checkbox change
const handleFruitCheckboxChange = () => {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name="fruits"]:checked'
  );
  let fruitsTotal = 0;

  checkedCheckboxes.forEach((checkbox) => {
    fruitsTotal += parseInt(checkbox.value);
  });

  localStorage.setItem("Total Price Fruits", fruitsTotal.toString());
  // Update the totalPriceFruits and totalPriceFruitsCheckout
  totalPriceFruits.textContent = `$${fruitsTotal}.00`;
  totalPriceFruitsCheckout.textContent = `$${fruitsTotal}.00`;

  // Update the totalPriceCheckout
  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;

  // Save the fruitsTotal value in localStorage
  localStorage.setItem("Total Price Fruits", fruitsTotal.toString());

  toggleRemainingFruitCheckboxes();
};

// Toggle remaining fruit checkboxes
const toggleRemainingFruitCheckboxes = () => {
  const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
  let checkedCount = 0;

  fruitCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  fruitCheckboxes.forEach((checkbox) => {
    if (!checkbox.checked && checkedCount >= 3) {
      checkbox.disabled = true;
    } else {
      checkbox.disabled = false;
    }
  });
};

// Rest of the code...

fetchDataAndDisplay();
toggleRemainingFruitCheckboxes();
