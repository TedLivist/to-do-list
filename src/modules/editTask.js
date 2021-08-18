/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import renderTasks from '../index.js';
import saveStorage from './saveStorage.js';

const editTask = (description, items, index) => {
  const item = items[index];
  item.description = description.textContent;
  saveStorage(items);
  renderTasks();
};

export default editTask;