import "./css/styles.css";

import renderList from "./js/list.js";
import { Project } from "./js/data.js";

const project2 = new Project(
  "Proyecto-2",
  "FechaInicio-2",
  "FechaFin-2",
  "Descripción-2",
  "Color-2",
);

project2.addTask("Task-2", "startDate-2", "Description-2");
project2.addTask("Task-3", "startDate-3", "Description-3");

function getData() {
  renderList();
}
getData();
