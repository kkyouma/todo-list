const projectsData = [
  {
    name: "Project-1",
    startDate: "startDate-1",
    finishDate: "finishDate-1",
    description: "Description-1",
    color: "Color-1",
    tasks: "numberOfTasks",
  },
];
const tasksData = [
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
    
    projectsData.push ({
      name: this._name,
      startDate: this._startDate,
      finishDate: this._finishDate,
      description: this._description,
      tasks: this._tasks.length,
    })
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
    const task = new Task(name, date, description, this);
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
    this._completed = false;

    tasksData.push({
      name: this._name,
      startDate: this._startDate,
      finishDate: this._finishDate,
      description: this._description,
    })
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
