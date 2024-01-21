import { Project, Task, projectsData, tasksData } from "./data.js";

const list = document.querySelector(".list");

const createTaskCard = function (task) {
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
    taskNameInput.disabled
      ? (taskNameInput.disabled = false)
      : (taskNameInput.disabled = true);
  });

  completedCheckbox.addEventListener("change", () => {
    task.completed = completedCheckbox.checked;
  });

  return taskCard;
};

const createProjectCard = function (project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectName = document.createElement("h2");
  projectName.textContent = `Project: ${project.name}`;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = `Description: ${project.description}`;

  projectCard.appendChild(projectName);
  projectCard.appendChild(projectDescription);

  return projectCard;
};

const renderList = function () {
  const fragment = document.createDocumentFragment();

  tasksData.forEach((task) => {
    const taskCard = createTaskCard(task);
    fragment.appendChild(taskCard);
    console.table({ task });
  });

  projectsData.forEach((project) => {
    const projectCard = createProjectCard(project);
    fragment.appendChild(projectCard);
    console.table({ project });
  });
  list.appendChild(fragment);
};

projectsData.forEach((project) => {
  console.table({ project });
});

export default renderList;
