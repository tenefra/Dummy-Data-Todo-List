// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false
  }
]

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
    if (!todo.completed) {
      console.log("incomplete")
      createIncompleteElement(todo)
    } else {
      console.log("complete")
      createElement(todo)
    }
  })
}

const createIncompleteElement = () => {
  const todoList = document.querySelector("#todo-list")
  const todoListItem = document.createElement("li")
  const newItem = document.createTextNode(arrayOfTodos[0].title)
  todoListItem.appendChild(newItem)
  todoList.appendChild(todoListItem)
  todoListItem.classList.add("incomplete")
}

const createElement = () => {
  const todoList = document.querySelector("#todo-list")
  const todoListItem = document.createElement("li")
  const newItem = document.createTextNode(arrayOfTodos.title)
  todoListItem.appendChild(newItem)
  todoList.appendChild(todoListItem)
  todoListItem.classList.add("complete")
}
