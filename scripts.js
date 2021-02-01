// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []

let filteredTodos = arrayOfTodos.filter(item => item.userId)

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

const todoList = document.querySelector("#todo-list")

const createElement = () => {
  for (i = 0; i < 201; i++) {
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

const filterTodos = () => {
  let userInput = document.querySelector("#filter-input").value
  console.log(userInput)
  todoList.innerHTML = ""
  let i = 0
  if ((arrayOfTodos.userId = userInput)) {
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
