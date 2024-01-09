import tasksData from "./tasks.js";

const todoContainer = document.getElementById('todo-container');
const list = document.querySelector('ul.list')

const renderList = function () {
  tasksData.forEach(task => {
    const name = document.createElement('li');
    name.textContent = task.name

    list.appendChild(name)
  });
}

export default renderList