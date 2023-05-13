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

    //HTML render output
    li.innerHTML = `<li>${spanContent}
                        <button>
                            ${buttonContent}}
                        </button>
                    </li>`;

    ulContainer.appendChild(li);

    //Reset the value in input
    input.value = "";
  }
});
