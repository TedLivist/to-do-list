/* eslint-disable linebreak-style */

const saveStorage = (items) => {
  return localStorage.setItem('todo-list', JSON.stringify(items));
};

export default saveStorage;