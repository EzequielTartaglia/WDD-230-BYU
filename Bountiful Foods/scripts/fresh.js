//Remove localStorage key when the page reload
document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("Total Price Fruits")
  localStorage.removeItem("Fruits Selected")
});

//-------------------------------- /* Checkout */ ------------------------------------
const totalPriceCheckout = document.getElementById("totalPrice");
let totalPriceCheckoutValue = 0;
//-------------------------------- /* Checkout */ ------------------------------------

/* Fruits */
// Get element in checkout
const totalPriceFruitsCheckout = document.getElementById("optionFruits");

// Get chekbox (fruits)
const checkboxesFruit = document.querySelectorAll(
  '#fruitsOptionsContainer input[type="checkbox"]'
);
const maxFruitsChecked = 3; // Maximum number of fruits to be checked

// Change the value per each change in checkout
checkboxesFruit.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesFruit.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxFruitsChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesFruit.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesFruit.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
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
const maxVegetablesChecked = 3; // Maximum number of vegetables to be checked

// Change the value for each change in checkout
checkboxesVegetables.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesVegetables.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxVegetablesChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesVegetables.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesVegetables.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
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
const maxCreamsJamsChecked = 2; // Maximum number of creams & jams to be checked

// Change the value for each change in checkout
checkboxesCreamsJams.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesCreamsJams.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxCreamsJamsChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesCreamsJams.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesCreamsJams.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
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
const maxSizesChecked = 1; // Maximum number of sizes to be checked

// Change the value for each change in checkout
checkboxesSizes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesSizes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxSizesChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesSizes.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesSizes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
    let totalPrice = 0;
    checkboxesSizes.forEach((checkbox) => {
      if (checkbox.checked) {
        const size = checkbox.value;
        const price = sizesPrices[size];
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

  // Obtener el valor de la clave "Total Price Fruits" del localStorage
  if (localStorage.getItem("Total Price Fruits")) {
    const totalPriceFruitsValue = parseInt(
      localStorage.getItem("Total Price Fruits")
    );
    totalPrice += totalPriceFruitsValue;
  }

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

//Receive the info from the form to send an output
outputClientName = "";
outputClientEmail = "";
outputClientPhone = "";
outputClientComments = "";

//Send order
submitSmoothie.addEventListener("click", () => {
  //If price is more than $0.00
  if (calculateTotalPrice() > 0) {
    const showOrderModal = () => {
      Swal.fire({
        // Text in the alert
        title: `<h3 style="justify-content: center;color: #ffffff;">Review and Confirm</h3>`,
        // Properties
        focusConfirm: false,
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
        confirmButtonColor: "#5ef3a9",
        confirmButtonText: "Confirm",
        background: "linear-gradient(to right, #016131, #028d48, #016131)",
        color: "#fff",
        allowOutsideClick: false,
        showDenyButton: true,
        denyButtonText: `Cancel`,
        denyButtonColor: "#f77b86",
        customClass: {
          confirmButton: "swal2-confirm",
          denyButton: "swal2-confirm",
        },
        // Create an HTML format
        html: `<label><b style="color: #ffffff;">First name</b></label><br><input type="text" id="swal-input1" class="swal2-input">
          <br><label><b style="color: #ffffff;">Email</b></label><br><input type="email" id="swal-input2" class="swal2-input">
          <br><label><b style="color: #ffffff;">Phone number</b></label><br><input type="tel" id="swal-input3" class="swal2-input">
          <br><label><b style="color: #ffffff;">Comments</b><h6 style="color: #ffffff;">(optional)</h6></label><br><input type="text"  id="swal-input4" class="swal2-input">`,
        // When you enter the values

        preConfirm: () => {
          return [
            (clientName = document.getElementById("swal-input1").value),
            (clientEmail = document.getElementById("swal-input2").value),
            (clientPhone = document.getElementById("swal-input3").value),
            (clientComments = document.getElementById("swal-input4").value),
            //Save out the scope
            (outputClientName = clientName),
            (outputClientEmail = clientEmail),
            (outputClientPhone = clientPhone),
            (outputClientComments = clientComments),
          ];
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const inputIds = ["swal-input1", "swal-input2", "swal-input3"];
          let isEmpty = false;

          for (let i = 0; i < inputIds.length; i++) {
            const input = document.getElementById(inputIds[i]);
            if (input.value.trim() === "") {
              isEmpty = true;
              break;
            }
          }

          if (isEmpty) {
            Swal.fire({
              title: "Please fill in all the fields",
              icon: "warning",
              allowOutsideClick: false,
              confirmButtonColor: "#5ef3a9",
              padding: "1.7rem",
              confirmButtonText: "Confirm",
              customClass: {
                confirmButton: "swal2-confirm",
                denyButton: "swal2-confirm",
              },
              background:
                "linear-gradient(to right, #016131, #028d48, #016131)",
              color: "#fff",
            }).then(() => {
              showOrderModal(); // Show the modal again if fields are not filled
            });
            return;
          }

          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            background: "linear-gradient(to right, #016131, #028d48, #016131)",
            color: "#fff",
            padding: "1.7rem",
            timer: 6000,
            timerProgressBar: true,
          });

          Toast.fire({
            title: "Sending order...",
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              // Update the quantity taken in localStorage
              Orderscounter++;
              localStorage.setItem(
                "Quantity of Smoothies Taken",
                Orderscounter
              );

              const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                background:
                  "linear-gradient(to right, #016131, #028d48, #016131)",
                color: "#fff",
                padding: "1.7rem",
                timer: 4000,
                hideClass: "",
              });

              if (localStorage.getItem("Fruits Selected")) {
                const fruitsArray = JSON.parse(localStorage.getItem("Fruits Selected"));
              
                Toast.fire({
                  html: `
                    <div id="ticket" style="padding: 0 10px;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-weight: bold;
                    font-size: 17px;
                    -webkit-text-fill-color: #ffffff;">
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order sent successfully.</strong></p>
                      <p style="font-size: 14px; color: #fff;"> ${new Date().toLocaleString()}</p><br>
                      <hr>
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Client Info</strong></p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Nombre:</strong> ${outputClientName}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Mail:</strong> ${outputClientEmail}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Phone:</strong> ${outputClientPhone}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Comments:</strong> ${outputClientComments}</p><br>
                      <hr>
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order Info</strong></p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Fruits:</strong> ${fruitsArray.join(", ")}</p><br>
                      <p style="font-size: 16px; color: #fff;"><strong style="color: #fff;">Total Price:</strong> ${
                        totalPriceCheckout.textContent
                      }</p><br>
                      <hr>
                      <p style="font-size: 16px; color: #fff;"><strong style="color: #fff;">Thank you for choosing us.</strong></p><br>
                    </div>
                  `,
                });
              }
              else{
                Toast.fire({
                  html: `
                    <div id="ticket" style="padding: 0 10px;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-weight: bold;
                    font-size: 17px;
                    -webkit-text-fill-color: #ffffff;">
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order sent successfully.</strong></p>
                      <p style="font-size: 14px; color: #fff;"> ${new Date().toLocaleString()}</p><br>
                      <hr>
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Client Info</strong></p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Nombre:</strong> ${outputClientName}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Mail:</strong> ${outputClientEmail}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Phone:</strong> ${outputClientPhone}</p><br>
                      <p style="font-size: 14px; color: #fff;"><strong style="color: #fff;">Comments:</strong> ${outputClientComments}</p><br>
                      <hr>
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order Info</strong></p><br>
                      <p style="font-size: 16px; color: #fff;"><strong style="color: #fff;">Total Price:</strong> ${
                        totalPriceCheckout.textContent
                      }</p><br>
                      <hr>
                      <p style="font-size: 16px; color: #fff;"><strong style="color: #fff;">Thank you for choosing us.</strong></p><br>
                    </div>
                  `,
                });
              }
              
              // Empty values
              const emptyValue = `$${0}.00`;
              localStorage.removeItem("Total Price Fruits");
              localStorage.removeItem("Fruits Selected")
              const totalPriceFruits =
                document.getElementById("totalPriceFruits");
              if (totalPriceFruits) {
                totalPriceFruits.textContent = emptyValue;
              }

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

              // Additional function to uncheck all fruit checkboxes
              const uncheckAllFruitCheckboxes = () => {
                const fruitCheckboxes = document.querySelectorAll(
                  'input[name="fruits"]'
                );
                fruitCheckboxes.forEach((checkbox) => {
                  checkbox.checked = false;
                });
              };
              // Call the function to uncheck all fruit checkboxes
              uncheckAllFruitCheckboxes();

              checkboxesVegetables.forEach((checkbox) => {
                checkbox.checked = false;
              });

              checkboxesCreamsJams.forEach((checkbox) => {
                checkbox.checked = false;
              });

              checkboxesSizes.forEach((checkbox) => {
                checkbox.checked = false;
              });

              // Reset the range inputs```javascript
              sherbetToggle.value = 0;
              iceToggle.value = 0;

              console.log("Order taken successfully");
            }
          });
        } else if (!result.isConfirmed) {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            background: "#dc3741",
            color: "#fff",
            padding: "1.7rem",
            timer: 1800,
            hideClass: "",
          });

          Toast.fire({
            icon: "error",
            text: "Order canceled.",
          });
        }
      });
    };

    showOrderModal(); // Show the initial modal
  }
});
