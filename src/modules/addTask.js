import saveStorage from "./saveStorage"
import { renderTasks } from "../index.js"

const addTask = (todoInput) => {

  let list = JSON.parse(localStorage.getItem('todo-list'))

  if (todoInput.value == "") {
    alert("Task can't be empty")
    todoInput.focus()
  } else {
    if (list != null) {
      list.push({
        description: todoInput.value,
        completed: false,
        index: list.length
      })
      saveStorage(list)
    } else {
      list = []
      list.push({
        description: todoInput.value,
        completed: false,
        index: 0
      })
      saveStorage(list)  
    }
  }

  renderTasks()
}

export default addTask