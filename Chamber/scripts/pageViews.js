//Get from dom
const totalVisitors = document.getElementById("totalVisitors");

// Connect with localStorage (cache) - Get the value stored
const visitorsKey = localStorage.getItem("visitors");
//IF the value in null → create a new key visitors with 0 as a value.
if (!visitorsKey) {
  localStorage.setItem("visitors", JSON.stringify(0));
} 
//If exist visitors
else {
  //Convert the value to a number
  const visitorsCount = JSON.parse(visitorsKey);
  //Update the dom
  localStorage.setItem("visitors", JSON.stringify(visitorsCount + 1));
}

// Get the updated value from localStorage
const updatedVisitorsKey = localStorage.getItem("visitors");
const updatedVisitorsCount = JSON.parse(updatedVisitorsKey);

// Set the new value
totalVisitors.textContent = updatedVisitorsCount;
