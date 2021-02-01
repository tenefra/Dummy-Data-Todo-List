// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => (arrayOfTodos = json))
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  arrayOfTodos.forEach(todo => {
    createElement(todo)
  })
}

const createElement = () => {
  for (i = 0; i < 201; i++) {
    const todoList = document.querySelector("#todo-list")
    const todoListItem = document.createElement("li")
    const newItem = document.createTextNode(arrayOfTodos[i].title)
    todoListItem.appendChild(newItem)
    todoList.appendChild(todoListItem)
    if (arrayOfTodos[i].completed) {
      console.log("complete")
      todoListItem.classList.add("complete")
    } else {
      console.log("incomplete")
      todoListItem.classList.add("incomplete")
    }
  }
}
