import tasksData from "./data.js";

const renderList = function () {
  tasksData.forEach((task) => {
    console.table({ task });
  });
};

export default renderList;
