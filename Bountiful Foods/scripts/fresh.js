//-------------------------------- /* Checkout */ ------------------------------------
const totalPriceCheckout = document.getElementById("totalPrice");
let totalPriceCheckoutValue = 0;
//-------------------------------- /* Checkout */ ------------------------------------

/* Fruits */
// Get element in checkout
const totalPriceFruitsCheckout = document.getElementById("optionFruits");

// Price of fruits
const fruitPrices = {
  apple: 1,
  banana: 4,
  grapes: 5,
  kiwi: 7,
  orange: 3,
  mango: 5,
};

// Get chekbox (fruits)
const checkboxesFruit = document.querySelectorAll(
  '#fruitsOptionsContainer input[type="checkbox"]'
);

// Get quantity of fruits
const totalPriceFruits = document.getElementById("totalPriceFruits");

// Change the value per each change in checkout
checkboxesFruit.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Calcular el nuevo precio total de frutas
    let totalPrice = 0;
    checkboxesFruit.forEach((checkbox) => {
      if (checkbox.checked) {
        const fruit = checkbox.value;
        const price = fruitPrices[fruit];
        totalPrice += price;
      }
    });
    totalPriceFruits.textContent = `$${totalPrice}.00`;
    totalPriceFruitsCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Vegetables */
// Get element in checkout
const totalPriceVegetablesCheckout =
  document.getElementById("optionVegetables");

// Price of vegetables
const vegetablesPrices = {
  carrot: 1,
  celery: 4,
  ginger: 5,
  kale: 7,
  pepper: 3,
  spinach: 5,
};

// Get chekbox (vegetables)
const checkboxesVegetables = document.querySelectorAll(
  '#vegetablesOptionsContainer input[type="checkbox"]'
);

// Get quantity of vegetables
const totalPriceVegetables = document.getElementById("totalPriceVegetables");

// Change the value per each change
checkboxesVegetables.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Calcular el nuevo precio total
    let totalPrice = 0;
    checkboxesVegetables.forEach((checkbox) => {
      if (checkbox.checked) {
        const vegetable = checkbox.value;
        const price = vegetablesPrices[vegetable];
        totalPrice += price;
      }
    });
    totalPriceVegetables.textContent = `$${totalPrice}.00`;
    totalPriceVegetablesCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Creams & Jams */
// Get element in checkout
const totalPriceCreamsJamsCheckout =
  document.getElementById("optionCreamsJams");

// Price of Creams / Jams
const creamsJamsPrices = {
  caramel: 2,
  chocolate: 3,
  coconut: 5,
  honey: 2,
  peach: 3,
  strawberry: 5,
};

// Get chekbox (creams & jams)
const checkboxesCreamsJams = document.querySelectorAll(
  '#creamsJamsOptionsContainer input[type="checkbox"]'
);

// Get quantity of creams & jams
const totalPriceCreamsJams = document.getElementById("totalPriceCreamsJams");

// Change the value per each change
checkboxesCreamsJams.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Calculate the total
    let totalPrice = 0;
    checkboxesCreamsJams.forEach((checkbox) => {
      if (checkbox.checked) {
        const creamsJams = checkbox.value;
        const price = creamsJamsPrices[creamsJams];
        totalPrice += price;
      }
    });
    totalPriceCreamsJams.textContent = `$${totalPrice}.00`;
    totalPriceCreamsJamsCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Sizes */
// Get element in checkout
const totalPriceSizesCheckout = document.getElementById("optionSize");

// Price of sizes
const sizesPrices = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
  xxxl: 6,
};

// Get chekbox (sizes)
const checkboxesSizes = document.querySelectorAll(
  '#sizeOptionsContainer input[type="checkbox"]'
);

// Get quantity of sizes
const totalPriceSizes = document.getElementById("totalPriceSizes");

// Change the value per each change
checkboxesSizes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Calculate the total
    let totalPrice = 0;
    checkboxesSizes.forEach((checkbox) => {
      if (checkbox.checked) {
        const sizes = checkbox.value;
        const price = sizesPrices[sizes];
        totalPrice += price;
      }
    });
    totalPriceSizes.textContent = `$${totalPrice}.00`;
    totalPriceSizesCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Sherbets */
// Get element in checkout
const totalPriceSherbetCheckout = document.getElementById("optionSherbets");

// Get the range
const sherbetToggle = document.getElementById("sherbetToggle");

// Get the total price
const totalPriceSherbets = document.getElementById("totalSherbets");

sherbetToggle.addEventListener("input", () => {
  // Get the value of the range
  const sherbetAmount = sherbetToggle.value;

  // Calculate the total
  const totalPriceSherbetsUpdated = sherbetAmount * 1;

  // Update the final price
  totalPriceSherbets.textContent = `$${totalPriceSherbetsUpdated}.00`;
  totalPriceSherbetCheckout.textContent = `$${totalPriceSherbetsUpdated}.00`;
  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
});

/* Ices */
// Get element in checkout
const totalPriceIcesCheckout = document.getElementById("optionIces");

// Get the range
const iceToggle = document.getElementById("icesToggle");

// Get the total price
const totalPriceIces = document.getElementById("totalPriceIces");

iceToggle.addEventListener("input", () => {
  // Get the value of the range
  const iceAmount = iceToggle.value;

  // Calculate the total
  const totalPriceIcesUpdated = iceAmount * 1;

  // Update the final price
  totalPriceIces.textContent = `$${totalPriceIcesUpdated}.00`;
  totalPriceIcesCheckout.textContent = `$${totalPriceIcesUpdated}.00`;
  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
});

/* ---------------------------------- Calculate dinamically the final price ---------------------------------- */

// Calculate the final price
const calculateTotalPrice = () => {
  let totalPrice = 0;

  checkboxesFruit.forEach((checkbox) => {
    if (checkbox.checked) {
      const fruit = checkbox.value;
      const price = fruitPrices[fruit];
      totalPrice += price;
    }
  });

  checkboxesVegetables.forEach((checkbox) => {
    if (checkbox.checked) {
      const vegetable = checkbox.value;
      const price = vegetablesPrices[vegetable];
      totalPrice += price;
    }
  });

  checkboxesCreamsJams.forEach((checkbox) => {
    if (checkbox.checked) {
      const creamsJams = checkbox.value;
      const price = creamsJamsPrices[creamsJams];
      totalPrice += price;
    }
  });

  checkboxesSizes.forEach((checkbox) => {
    if (checkbox.checked) {
      const sizes = checkbox.value;
      const price = sizesPrices[sizes];
      totalPrice += price;
    }
  });

  const sherbetAmount = sherbetToggle.value;
  const totalPriceSherbetsUpdated = sherbetAmount * 1;
  totalPrice += totalPriceSherbetsUpdated;

  const iceAmount = iceToggle.value;
  const totalPriceIcesUpdated = iceAmount * 1;
  totalPrice += totalPriceIcesUpdated;

  return totalPrice;
};

/*--------------------------------------------- Take order --------------------------------------------- */
const submitSmoothie = document.getElementById("submitSmoothie");
let Orderscounter = 0;
let finalPrice = calculateTotalPrice();

//Receive info from localStorage (quantity of smoothies taken)
//and remplace the value (let Orderscounter = 0;)
if (localStorage.getItem("Quantity of Smoothies Taken")) {
  Orderscounter = parseInt(localStorage.getItem("Quantity of Smoothies Taken"));
}

//Send order
submitSmoothie.addEventListener("click", () => {
  //If price is more than $0.00
  if (calculateTotalPrice() > 0) {
    //Send a form
    Swal.fire({
      //Text in the alert
      title: `<h3 style="justify-content: center;color: #ffffff;">Review and Confirm</h3>`,
      //Propieties
      focusConfirm: false,
      showClass: { popup: "animate__animated animate__fadeInDown" },
      hideClass: { popup: "animate__animated animate__fadeOutUp" },
      confirmButtonColor: "#5ef3a9",
      padding: "1.7rem",
      icon: "warning",
      confirmButtonText: "Confirm",
      background: "linear-gradient(to right, #016131, #028d48, #016131)",
      color: "#fff",
      allowOutsideClick: false,
      showDenyButton: true,
      denyButtonText: `Cancel`,
    
      //Create an html format
      html: `<br><label><b style="color: #ffffff;">First name</b></label><br><input type="text"  id="swal-input1" class="swal2-input""><br>
        <br><label><b style="color: #ffffff;">Email</b></label><br><input type="email"  id="swal-input2" class="swal2-input""><br>
        <br><label><b style="color: #ffffff;">Phone number</b></label><br><input type="tel"  id="swal-input3" class="swal2-input"><br>`,
      //When you enter the values
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "Sending order...",
          padding: "1rem",
          background: "linear-gradient(to right, #016131, #028d48, #016131)",
          icon: "success",
          timer: 1800,
          color: "#fff",
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            //Update the quantity taken in localStorage
            Orderscounter++;
            localStorage.setItem("Quantity of Smoothies Taken", Orderscounter);
    
            //Toastify
            Toastify({
              text: `Your order of ${totalPriceCheckout.textContent} has been sent successfully!`,
              duration: 3000,
              close: true,
              gravity: "top",
              positionLeft: false,
              style: {
                background: "linear-gradient(to right, #016131, #028d48, #016131)",
              },
            }).showToast();
    
            //Empty values
            const emptyValue = `$${0}.00`;
            totalPriceFruits.textContent = emptyValue;
            totalPriceFruitsCheckout.textContent = emptyValue;
            totalPriceVegetables.textContent = emptyValue;
            totalPriceVegetablesCheckout.textContent = emptyValue;
            totalPriceCreamsJams.textContent = emptyValue;
            totalPriceCreamsJamsCheckout.textContent = emptyValue;
            totalPriceSizes.textContent = emptyValue;
            totalPriceSizesCheckout.textContent = emptyValue;
            totalPriceSherbets.textContent = emptyValue;
            totalPriceSherbetCheckout.textContent = emptyValue;
            totalPriceIces.textContent = emptyValue;
            totalPriceIcesCheckout.textContent = emptyValue;
            totalPriceCheckout.textContent = emptyValue;
    
            // Uncheck all checkboxes
            checkboxesFruit.forEach((checkbox) => {
              checkbox.checked = false;
            });
    
            checkboxesVegetables.forEach((checkbox) => {
              checkbox.checked = false;
            });
    
            checkboxesCreamsJams.forEach((checkbox) => {
              checkbox.checked = false;
            });
    
            checkboxesSizes.forEach((checkbox) => {
              checkbox.checked = false;
            });
    
            // Reset the range inputs
            sherbetToggle.value = 0;
            iceToggle.value = 0;
    
            console.log("Order taken successfully");
          }
        });
      }
      else if (!result.isConfirmed){
        Swal.fire({
          text: "Canceling order...",
          padding: "1rem",
          background: "linear-gradient(to right, #016131, #028d48, #016131)",
          icon: "error",
          timer: 1000,
          color: "#fff",
          timerProgressBar: false,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        })
      }
    });
    
  }
});
