let projectsData = [
  {
    name: "Project-1",
    startDate: "startDate-1",
    finishDate: "finishDate-1",
    description: "Description-1",
    tasks: "numberOfTasks",
  },
];
let tasksData = [
  {
    name: "Task-1",
    date: "Date-1",
    description: "Description-1",
    project: "Project-1",
  },
  {
    name: "Task-2",
    date: "Date-2",
    description: "Description-2",
    project: "Project-2",
  },
];

class Project {
  constructor(name, startDate, finishDate, description, color) {
    this._name = name;
    this._startDate = startDate;
    this._finishDate = finishDate;
    this._description = description;
    this._color = color;
    this._tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(name, date, description) {
    const task = new Task(name, date, description, this.name);
    this.tasks.push(task);
    return task;
  }
}

class Task {
  constructor(name, date, description, project) {
    this._name = name;
    this._date = date;
    this._description = description;
    this._project = project;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  complete(completed = false) {
    this.complete = completed;
  }
}

let project1 = new Project(
  "Project-2",
  "startDate-2",
  "finishDate-2",
  "Description-2",
  "Red",
);

export { Project, Task, projectsData, tasksData };
