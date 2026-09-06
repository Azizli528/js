const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "🗑️";

    
    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
    });

    
    span.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked; 
        span.classList.toggle("completed");   
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.append(checkbox, span, deleteBtn);
    list.append(li);
    
    input.value = "";
});