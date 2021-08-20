/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import renderTasks from '../index.js';
import saveStorage from './saveStorage.js';

const deleteCompleted = () => {
  const storedItems = JSON.parse(localStorage.getItem('todo-list'));

  const uncompletedItems = storedItems.filter((item) => item.completed === false);

  let index = 1
  for (let uncompletedItem of uncompletedItems) {
    uncompletedItem.index = index++
  }
  saveStorage(uncompletedItems);
  renderTasks();
};

export default deleteCompleted;