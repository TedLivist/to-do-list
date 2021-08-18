import { renderTasks } from ".."
import saveStorage from "./saveStorage"

const deleteCompleted = () => {
  const storedItems = JSON.parse(localStorage.getItem('todo-list'))

  const uncompletedItems = storedItems.filter((item) => item.completed == false)
  saveStorage(uncompletedItems)
  renderTasks()
}

export default deleteCompleted