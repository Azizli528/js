const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
    const text = input.value.trim();
    if (text === "") return;

    const innerHTML = `
        <li>
            <input type="checkbox" class="check">
            <span class="task-text">${text}</span>
            <button class="deleteBtn">🗑️</button>
        </li>
    `;

    list.insertAdjacentHTML("beforeend", innerHTML);
    input.value = "";
}

list.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("deleteBtn")) {
        target.parentElement.remove();
        return;
    }

    if (target.classList.contains("check")) {
        const span = target.nextElementSibling;
        span.classList.toggle("completed", target.checked);
        return;
    }

    if (target.classList.contains("task-text")) {
        const checkbox = target.previousElementSibling;
        checkbox.checked = !checkbox.checked;
        target.classList.toggle("completed", checkbox.checked);
    }
});