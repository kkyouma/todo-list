import { Project, Task, projectsData, tasksData } from "./data.js";

const renderList = function () {
  tasksData.forEach((task) => {
    console.table( {task} );
  });

  projectsData.forEach((project) => {
    console.table( {project} )
  })
};

export default renderList;
