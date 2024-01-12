let projectsData = [
  {
    name: "Project-1",
    initDate: "initDate-1",
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
  constructor(name, initDate, finishDate, description) {
    this.name = name;
    this.initDate = initDate
    this.finishDate =  finishDate
    this.descriptiom = description;
    this.tasks = [];
  }
}

export default tasksData;
