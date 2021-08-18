import { renderTasks } from "../index.js"
import saveStorage from "./saveStorage.js"

const deleteTask = (itemIndex) => {
  let storedStuff = JSON.parse(localStorage.getItem('todo-list'))

  let newList = storedStuff.filter((i) => storedStuff.indexOf(i) !== itemIndex)
  
  saveStorage(newList)
  location.reload()
}

export default deleteTask