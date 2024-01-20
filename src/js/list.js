import { Project, Task, projectsData, tasksData } from "./data.js";

const list = document.querySelector(".list");

const renderList = function () {
  tasksData.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskName = document.createElement("h3");
    taskName.textContent = `Task: `;

    const taskNameInput = document.createElement("input");
    taskNameInput.type = "text";
    taskNameInput.value = task.name;
    taskNameInput.disabled = true;
    taskName.appendChild(taskNameInput);

    const taskDate = document.createElement("p");
    taskDate.textContent = `${task.date}`;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = `Description: ${task.description}`;

    const taskProject = document.createElement("p");
    taskProject.textContent = `Project: ${task.project}`;

    const taskCompleted = document.createElement("p");
    taskCompleted.textContent = "Completed: ";

    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = task.completed;
    taskCompleted.appendChild(completedCheckbox);

    taskCard.appendChild(taskName);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskProject);
    taskCard.appendChild(taskCompleted);

    taskCard.addEventListener("click", () => {
      taskNameInput.disabled = !taskNameInput.disabled;
    });

    completedCheckbox.addEventListener("change", () => {
      task.completed = completedCheckbox.checked;
    });

    list.appendChild(taskCard);

    console.table({ task });
  });
};

projectsData.forEach((project) => {
  console.table({ project });
});

export default renderList;
