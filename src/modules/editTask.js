import { renderTasks } from "../index.js"
import saveStorage from "./saveStorage.js"

const editTask = (description, items, index) => {
  let item = items[index]
  item.description = description.textContent
  saveStorage(items)
  renderTasks()
}

export default editTask