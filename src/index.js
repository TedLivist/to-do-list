/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import './assets/stylesheet/style.css';
import check from './modules/checkComplete.js';
import saveStorage from './modules/saveStorage.js';
import addTask from './modules/addTask';
import editTask from './modules/editTask';
import deleteTask from './modules/deleteTask.js';
import deleteCompleted from './modules/deleteCompleted.js'

const container = document.querySelector('.container');
const taskInput = document.querySelector('.italics')
const addButton = document.querySelector('.add')
const clearCompletedLink = document.querySelector('.clear-all')

const renderTasks = () => {

  while(container.firstChild) {
    container.removeChild(container.firstChild)
  }

  const storedList = JSON.parse(localStorage.getItem('todo-list'))
  if (storedList != null) {
    for (let i = 0; i <= storedList.length - 1; i++) {

      const taskContainer = document.createElement('div');
      taskContainer.id = storedList[i].index;
      taskContainer.classList.add('list');

      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      taskCheckbox.classList.add('check');
      if (storedList[i].completed) {
        taskCheckbox.checked = true;
      }

      const taskDescription = document.createElement('label');
      taskDescription.classList.add('label');
      taskDescription.textContent = `${storedList[i].description}`;
      taskDescription.contentEditable = true;

      const dots = document.createElement('span');
      dots.innerHTML = "<i class='fas fa-ellipsis-v'></i>";

      const trash = document.createElement('span');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'none';
      trash.style.cursor = 'pointer';
      trash.id = storedList.indexOf(storedList[i])

      taskContainer.appendChild(taskCheckbox);
      taskContainer.appendChild(taskDescription);
      taskContainer.appendChild(dots);
      taskContainer.appendChild(trash);
      container.appendChild(taskContainer);

      taskDescription.addEventListener('focus', () => {
        dots.style.display = 'none';
        trash.style.display = 'flex';
        trash.addEventListener('mousedown', (e) => {
          e.preventDefault()
          deleteTask(parseInt(trash.id))
        })
      });

      taskDescription.addEventListener('blur', () => {
        dots.style.display = 'none';
        trash.style.display = 'flex';
        editTask(taskDescription, storedList, storedList[i].index)
      });

      taskCheckbox.addEventListener('change', (e) => {
        check(e.target, storedList[i]);
        saveStorage(storedList);
      });
    }
  }
};

addButton.addEventListener('click', () => {
  addTask(taskInput)
});

clearCompletedLink.addEventListener('click', () => {
  deleteCompleted()
})

window.addEventListener('load', () => {
  const todoList = JSON.parse(localStorage.getItem('todo-list'));

  if (todoList == null) {
    renderTasks();
  } else {
    renderTasks();
  }
});

export { renderTasks }