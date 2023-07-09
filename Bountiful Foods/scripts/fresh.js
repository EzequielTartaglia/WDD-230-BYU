/* Fruits */
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
    const checkboxesFruit = document.querySelectorAll('#fruitsOptionsContainer input[type="checkbox"]');
    
    // Get quantity of fruits
    const totalPriceFruits = document.getElementById('totalPriceFruits');
    
    // Change the value per each change
    checkboxesFruit.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
        // Calcular el nuevo precio total
        let totalPrice = 0;
        checkboxesFruit.forEach((checkbox) => {
            if (checkbox.checked) {
            const fruit = checkbox.value;
            const price = fruitPrices[fruit];
            totalPrice += price;
            }
        });
        totalPriceFruits.textContent = `$${totalPrice}.00`;
        });
    });
  
/* Vegetables */
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
    const checkboxesVegetables = document.querySelectorAll('#vegetablesOptionsContainer input[type="checkbox"]');
    
    // Get quantity of vegetables
    const totalPriceVegetables = document.getElementById('totalPriceVegetables');
    
    // Change the value per each change
    checkboxesVegetables.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
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
        });
    });
    
/* Creams & Jams */

/* Sizes */

/* Sherbets */

/* Ices */

/* Checkout */