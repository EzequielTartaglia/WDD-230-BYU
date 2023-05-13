const ulContainer = document.getElementById("chaptersContainer");
const input = document.getElementById("item");
const button = document.getElementById("addChapterBtn");

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");

        //First character capitalized
        span.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        spanContent = span.innerText;

        button.innerText = "🗑️";
        buttonContent = button.innerText;
        button.classList.add("deleteButton");

        // HTML render output
        li.innerHTML = `<li>${spanContent}
        <button class="deleteButton">
        ${buttonContent}
        </button>
        </li>`;

        ulContainer.appendChild(li);

        // Reset the value in input
        input.value = "";

        addDeleteButtonEventListeners();

        //Focus on input again
        input.focus();
    }
});

const addDeleteButtonEventListeners = () => {
    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            alert("Hola");
        });
    });
}


//Current Date
const currentYear = document.getElementById("currentYear")
date = new Date()
currentYear.innerText = date.getFullYear();

//Last update
const secondLineFooter = document.getElementById("secondLineFooter")

secondLineFooter.innerText = `Last Update: ${date.toLocaleString()}`

