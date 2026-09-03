const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const todos = JSON.parse(localStorage.getItem("todos")) || []

form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    if (!input.value.trim()) return
    todos.push(input.value)

    localStorage.setItem("todos" , JSON.stringify(todos))

    input.value = ""

    renderTodos()

})

function renderTodos(){

    ul.innerHTML = ""

    todos.forEach((element , index )=> {
        const li = document.createElement("li")
        li.classList.add("lii")

        const span = document.createElement("span")
        span.classList.add("span")
        span.textContent = element

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        deleteBtn.textContent = "❌"

        li.addEventListener("click" , (e)=>{
            if(e.target.classList.contains("delete"))
                deleteTodo(index)

            if(e.target.classList.contains("span"))
                e.target.parentElement.classList.toggle("complete")
        })

        li.append(span , deleteBtn)
        ul.appendChild(li)
        
    });
}

function deleteTodo(index){
    todos.splice(index , 1)
    localStorage.setItem("todos" , JSON.stringify(todos))
    renderTodos()
}
 
renderTodos()