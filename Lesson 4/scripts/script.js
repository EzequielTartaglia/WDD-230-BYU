const ulContainer = document.getElementById("chaptersContainer");
const input = document.getElementById("item");
const button = document.getElementById("addChapterBtn");

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        //First character capitalized
        span.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        const spanContent = span.innerText;

        deleteButton.innerText = "🗑️";
        deleteButton.classList.add("deleteButton");

        // HTML render output
        li.innerHTML = `
            <span>${spanContent}</span>
            <button class="deleteButton">${deleteButton.innerText}</button>
        `;

        ulContainer.appendChild(li);

        // Reset the value in input
        input.value = "";

        //Funtion of delete (event)
        const deleteButtonElement = li.querySelector(".deleteButton");
        deleteButtonElement.addEventListener("click", () => {
            ulContainer.removeChild(li);
        });

        //Focus on input again
        input.focus();
    }
});





//Current Date
const currentYear = document.getElementById("currentYear")
date = new Date()
currentYear.innerText = date.getFullYear();

//Last update
const secondLineFooter = document.getElementById("secondLineFooter")

secondLineFooter.innerText = `Last Update: ${date.toLocaleString()}`

