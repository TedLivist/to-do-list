import saveStorage from "./saveStorage.js"

const deleteTask = (itemIndex) => {
  let storedStuff = JSON.parse(localStorage.getItem('todo-list'))

  let newList = storedStuff.filter((i) => storedStuff.indexOf(i) !== itemIndex)
  for (let i = 0; i <= newList.length - 1; i++) {
    newList[i].index = newList.indexOf(newList[i])
  }
  saveStorage(newList)
  location.reload()
}

export default deleteTask