const ulContainer = document.getElementById("chaptersContainer");
const input = document.getElementById("item");
const button = document.getElementById("addChapterBtn");

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");

        span.innerText = input.value;
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


